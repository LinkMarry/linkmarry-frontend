import app from "./server.js";

const port = process.env.PORT || 3000

app.listen(port, error => {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    console.log(`Server started at http://localhost:${port}`)
});