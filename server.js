// ajuda o slint a checar erros
'use strict' 

const app = require('./src/app');
const http = require('http');
const debug = require('debug')('curso-api-node:server');

const port = normalizePort(process.env.PORT || 3000);
app.set('port', port) // setar a porta

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log('API rodando na porta ' + port);

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port>=0) {
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port: 'Port ' + port;

    switch (error.code) {
        case value: 'EACCES'
            console.error(bind + ' requires elevated privileges');
            process.exit(1);            
            break;
        case value: 'EADDRINUSE'
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' 
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    // start no debug    
    debug('Listening on ' + bind);
}