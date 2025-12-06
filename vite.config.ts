import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [
                    [
                        "babel-plugin-styled-components",
                        {
                            ssr: true,
                            displayName: true,
                            fileName: false,
                            pure: true
                        }
                    ]
                ]
            }
        })
    ],
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, './src'),
        },
    },
    ssr: {
        noExternal: ['styled-components', 'react-helmet-async', 'lodash']
    }
})
