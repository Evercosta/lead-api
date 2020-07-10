'use strict'; // ajuda o slint a checar erros

const repository = require('../repositories/webhook-repository');

exports.post = async(req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(201).send({ 
            message: 'Teste executado com  sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};