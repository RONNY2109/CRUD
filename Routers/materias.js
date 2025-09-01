//ACA VA TODO LO DEL ROUTER DE TU PROYECTO NO TE OLVIDES DE CAMBAIR EL NOMBRE DE ESTE ARCHIVO Y EL ROUTER
const express = require('express');

const {Materias} = require('../Datos/materias.js');

const ronnyRouter = express.Router();

ronnyRouter.get('/', (req, res) => {
    res.send(Materias);
});

ronnyRouter.get('/:titulo', (req, res) => {
    const titulo = req.params.titulo;
    const resultados = Materias.filter(curso => curso.titulo.toLowerCase() === titulo.toLowerCase());

    if(resultados.length === 0) {
        return res.status(404).end();
    }

    if(req.query.ordenar === 'vistas') {
        return res.send(resultados.sort((a, b) => b.vistas - a.vistas));
    }
    
    res.send(resultados);
});

ronnyRouter.get('/:titulo/:nivel', (req, res) => {
    const titulo = req.params.titulo;
    const nivel = req.params.nivel;

    const resultados = Materias.filter(curso => 
        curso.titulo.toLowerCase() === titulo.toLowerCase() && 
        curso.nivel.toLowerCase() === nivel.toLowerCase()
    );
    if(resultados.length === 0) {
        return res.status(404).end();
    }
    res.send(resultados);
});

// Metodo POST para agregar un nuevo curso
ronnyRouter.post('/', (req, res) => {
    let cursoNuevo = req.body;
    Materias.push(cursoNuevo);
    res.status(201).send(cursoNuevo);
});

// Metodo PUT para actualizar un curso existente
ronnyRouter.put('/:id', (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = Materias.findIndex(curso => curso.id == id);

    if (indice >= 0) {//a ser correcta la peticion se enviara el curso actualizado y el estado 200
        Materias[indice] = cursoActualizado;
        res.status(200).send(cursoActualizado);
    } else {
        return res.status(404).end();//si no encuentra el curso con ese id, se envia un estado 404
    }
});

// Metodo PATCH para actualizar parcialmente un curso existente
ronnyRouter.patch('/:id', (req, res) => {
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = Materias.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        const cursoModificado = Materias[indice];
        Object.assign(cursoModificado, infoActualizada);
        res.status(200).send(Materias);
    } else {
        return res.status(404).end();
    }
});


// Metodo DELETE para eliminar un curso existente
ronnyRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    const indice = Materias.findIndex(cursos => cursos.id == id);

    if (indice >= 0) {
        Materias.splice(indice, 1);
        res.status(200).send(Materias);
    } else {
        return res.status(404).end();
    }
});

module.exports = ronnyRouter;