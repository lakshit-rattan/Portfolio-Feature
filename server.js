const express = require('express');
const next = require('next');

//simply means that if NODE.ENV is not a production environment, it'll then be a development evironment. Will return a true/false inside of dev
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.all('*', (req,res) => {
        return handle(req,res);
    })

    const PORT = process.env.PORT || 5000;
    server.listen(PORT, (err) => {
        if (err)
        {
            console.log(err);
        }
        console.log(`> Ready on port ${PORT}`)
    })
})