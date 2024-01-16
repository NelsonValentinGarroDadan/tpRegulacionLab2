const server = require('./app/app');

const PORT = server.get("port");

server.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`)
})