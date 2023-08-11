const http= require('http')
const app= require('./app/app.js')

const PORT = process.env.PORT || 2020

const server = http.createServer()

server.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});


