const express = require('express');
const cors = require('cors');
const cacheControl = require('express-cache-controller');
const app = express();
const clientRoutes = require('./routes/clientRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Configuración de CORS
app.use(cors());

// Configuración de Cache-Control
app.use(cacheControl({
    maxAge: 60, // tiempo en segundos
    private: true
}));

// Configuración de Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Client Management API',
            version: '1.0.0',
            description: 'API para gestionar clientes',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
            },
        ],
    },
    apis: ['./routes/*.js'], // Rutas a los archivos donde se documentarán las rutas
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json()); // Para parsear JSON en el cuerpo de las solicitudes
app.use('/api', clientRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Swagger UI available at http://localhost:3000/api-docs`);
});
