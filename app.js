const express = require('express');
const app = express();

const {aleCursos} = require('./Datos/ale.js');
const {alexanderCursos} = require('./Datos/alexander.js');
const {ronnyCursos} = require('./Datos/ronny.js');

//ROUTERS

const aleRouter = require('./Routers/lenguajes.js');
app.use('/api/ale/lenguajes', aleRouter);

// const alexanderRouter = express.Router();
// app.use('/api/ale/lenguajes', alexanderRouter);

// const ronnyRouter = express.Router();
// app.use('/api/ale/lenguajes', ronnyRouter);


//ROUTING
//Aca va el router que Alexander va a usar
// app.get('/api/alexander/', (req, res) => {
//     res.send(alexanderCursos.);
// });

//Aca va el router que Ronny va a usar
// app.get('/api/ronny/', (req, res) => {
//     res.send(ronnyCursos.);
// });


//ROUTING
app.get('/', (req, res) => {
    res.send('Servidor Funcionando')
});

//NUESTRAS RUTAS
app.get('/api/ale', (req, res) => {
    res.send(JSON.stringify(aleCursos));
});
app.get('/api/alexander', (req, res) => {
    res.send(JSON.stringify(alexanderCursos));
});
app.get('/api/ronny', (req, res) => {
    res.send(JSON.stringify(ronnyCursos));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});