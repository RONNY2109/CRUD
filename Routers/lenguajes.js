const express = require('express');

const {lenguajes} = require('../Datos/ale.js');

const aleRouter = express.Router();

//Middleware para parsear JSON
aleRouter.use(express.json());

aleRouter.get('/', (req, res) => {
    res.send(lenguajes);
});

aleRouter.get('/:titulo', (req, res) => {
    const titulo = req.params.titulo;
    const resultados = lenguajes.filter(curso => curso.titulo.toLowerCase() === titulo.toLowerCase());

    if(resultados.length === 0) {
        return res.status(204).send(`No se encontraron cursos con el título: ${titulo}`); 
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
        return res.status(204).send(`No se encontraron cursos con el título: ${titulo} y nivel: ${nivel}`); 
    }
    res.send(resultados);
})

//Metodo POST para agregar un nuevo curso
aleRouter.post('/', (req, res) => {
    let cursoNuevo = req.body;
    lenguajes.push(cursoNuevo);
    res.send(lenguajes);
})

//Metodo PUT para actualizar un curso existente
aleRouter.put('/:id', (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = lenguajes.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        lenguajes[indice] = cursoActualizado;
    } else {
        //res.status(404).send(`No se encontró un curso con el ID: ${id}`);
        return res.status(404).end();
    };
    res.send(cursoActualizado);
});

//Metodo PATCH para actualizar parcialmente un curso existente
aleRouter.patch('/:id', (req, res) => {
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = lenguajes.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        const cursoModificado = lenguajes[indice];
        Object.assign(cursoModificado, infoActualizada);
    } else {
        //res.status(404).send(`No se encontró un curso con el ID: ${id}`);
        return res.status(404).end();
    };
    res.send(lenguajes);
});


//Metodo DELETE para eliminar un curso existente
aleRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    const indice = lenguajes.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        lenguajes.splice(indice, 1);
    } else {
        //res.status(404).send(`No se encontró un curso con el ID: ${id}`);
        return res.status(404).end();
    };
    res.send(lenguajes);
});

module.exports = aleRouter;

// hola