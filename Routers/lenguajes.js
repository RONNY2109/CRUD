const express = require('express');

const {lenguajes} = require('../Datos/ale.js');

const aleRouter = express.Router();

aleRouter.get('/', (req, res) => {
    res.send(lenguajes);
});

aleRouter.get('/:titulo', (req, res) => {
    const titulo = req.params.titulo;
    const resultados = lenguajes.filter(curso => curso.titulo.toLowerCase() === titulo.toLowerCase());

    if(resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos con el título: ${titulo}`); 
}

if(req.query.ordenar === 'vistas') {
   return res.send(resultados.sort((a, b) => b.vistas - a.vistas));
}
    
res.send(resultados);
});

aleRouter.get('/:titulo/:nivel', (req, res) => {
    const titulo = req.params.titulo;
    const nivel = req.params.nivel;

    const resultados = lenguajes.filter(curso => 
        curso.titulo.toLowerCase() === titulo.toLowerCase() && 
        curso.nivel.toLowerCase() === nivel.toLowerCase()
    );
    if(resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos con el título: ${titulo} y nivel: ${nivel}`); 
    }
    res.send(resultados);
})

module.exports = aleRouter;
