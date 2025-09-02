# CRUD-TEAM 🐱‍🏍

Repositorio del proyecto de ejemplo para manejo de cursos de lenguajes y materias.

## Descripción
Este proyecto es un servidor construido con Node.js y Express que organiza cursos de lenguajes y materias. Permite:

- Listar todos los cursos disponibles.
- Filtrar cursos por título o nivel.
- Ordenar cursos según vistas.
- Usar rutas separadas para lenguajes y materias.
- Agregar, modificar y eliminar cursos mediante métodos HTTP.

El servidor está estructurado usando routers, siguiendo buenas prácticas de Node.js y Express.

## Tecnologías utilizadas
- Node.js
- Express
- Git / GitHub
- Visual Studio Code

## Endpoints principales (listos para copiar y probar)

### Lenguajes
```http
# Obtener todos los cursos de lenguajes
GET http://localhost:3000/api/ale/lenguajes

# Filtrar cursos por título
GET http://localhost:3000/api/ale/lenguajes/Aleman

# Filtrar cursos por título y nivel
GET http://localhost:3000/api/ale/lenguajes/Ingles/Basico

# Agregar un nuevo curso
POST http://localhost:3000/api/ale/lenguajes
Content-Type: application/json

{
    "id": 6,
    "titulo": "Ruso",
    "nivel": "Intermedio",
    "vistas": 1800
}

# Modificar completamente un curso
PUT http://localhost:3000/api/ale/lenguajes/2
Content-Type: application/json

{
    "id": 2,
    "titulo": "Frances Modificado",
    "nivel": "Avanzado",
    "vistas": 35500
}

# Modificar parcialmente un curso
PATCH http://localhost:3000/api/ale/lenguajes/2
Content-Type: application/json

{
    "titulo": "Frances Patch",
    "vistas": 40000
}

# Eliminar un curso
DELETE http://localhost:3000/api/ale/lenguajes/6
```

### Materias
```http
# Obtener todas las materias
GET http://localhost:3000/api/materias

# Filtrar materias por título
GET http://localhost:3000/api/materias/Matematicas

# Filtrar materias por título y nivel
GET http://localhost:3000/api/materias/Ingles/Basico

# Agregar una nueva materia
POST http://localhost:3000/api/materias
Content-Type: application/json

{
    "id": 6,
    "titulo": "Historia",
    "nivel": "Basico",
    "vistas": 900
}

# Modificar completamente una materia
PUT http://localhost:3000/api/materias/2
Content-Type: application/json

{
    "id": 2,
    "titulo": "Fisica Modificada",
    "nivel": "Avanzado",
    "vistas": 35000
}

# Modificar parcialmente una materia
PATCH http://localhost:3000/api/materias/2
Content-Type: application/json

{
    "titulo": "Fisica Patch",
    "vistas": 40000
}

# Eliminar una materia
DELETE http://localhost:3000/api/materias/6
```

### General
```http
# Mensaje de bienvenida
GET http://localhost:3000/

# Objeto completo de cursos de lenguajes
GET http://localhost:3000/api/ale

# Objeto completo de materias
GET http://localhost:3000/api/ronny
```

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/alejandrordeveloper/CRUD.git
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor:

```bash
node app.js
```

El servidor por defecto se ejecuta en [http://localhost:3000](http://localhost:3000).

## Autores
- Alejandro R.
- Ronny C.
---
¡Contribuciones y sugerencias son bienvenidas!
