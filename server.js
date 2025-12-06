import fs from 'node:fs/promises'
import express from 'express'

// Constants
/** @type {'production' | 'development' | 'undefined'} */
const env = process.env.NODE_ENV
const base = process.env.BASE || '/'

// Cached production assets
const templateHtml =
    env === 'production' ? await fs.readFile('./public/index.html', 'utf8') :
        env === 'development' ? await fs.readFile('./dist/client/index.html', 'utf-8') :
            '';

// Create http server
const app = express();

app.use(express.static('public'));

// Add Vite or respective production middlewares
/** @type {import('vite').ViteDevServer | undefined} */
let vite
if (!env) {
    const {createServer} = await import('vite')
    vite = await createServer({
        server: {middlewareMode: true},
        appType: 'custom',
        base,
    })
    app.use(vite.middlewares)
} else {
    const compression = (await import('compression')).default
    const sirv = (await import('sirv')).default
    app.use(compression())
    app.use(base, sirv('./dist/client', {extensions: []}))
}

// Serve HTML
app.use('*all', async (req, res) => {
    try {
        const url = req.originalUrl.replace(base, '')

        /** @type {string} */
        let template
        /** @type {import('./src/entry-server.ts').render} */
        let render
        if (!env) {
            // Always read fresh template in development
            template = await fs.readFile('./index.html', 'utf-8')
            template = await vite.transformIndexHtml(url, template)
            render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
        } else {
            template = templateHtml
            render = (await import('./dist/server/entry-server.js')).render
        }

        const fullUrl = `http://${req.headers.host}${req.originalUrl}`;
        const request = new Request(fullUrl, {
            method: req.method,
            headers: req.headers,
            body:
                req.method !== 'GET' && req.method !== 'HEAD'
                    ? req
                    : undefined
        });
        const rendered = await render(request)

        const html = template
            .replace(`<!--app-head-->`, rendered.head ?? '')
            .replace(`<!--app-html-->`, rendered.html ?? '')

        res.status(200).set({'Content-Type': 'text/html'}).send(html)
    } catch (e) {
        vite?.ssrFixStacktrace(e)
        console.log(e.stack)
        res.status(500).end(e.stack)
    }
});


export default app;