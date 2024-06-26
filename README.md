# Client Management API

API REST para gestionar una lista de clientes. Esta API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una lista de clientes almacenada en el servidor.

## Requisitos

- Node.js
- npm

## Instalación

1. Clona el repositorio:
    ```sh
    https://github.com/RoddBrian/Practice-API-Rest.git
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd Practice-API-Rest
    ```

3. Instala las dependencias:
    ```sh
    npm install express
    npm install swagger-jsdoc swagger-ui-express
    npm install cors
    npm install express-cache-controller
    ```

## Uso

1. Ejecuta el servidor:
    ```sh
    node index.js
    ```

2. Abre tu navegador y navega a `http://localhost:3000/api-docs` para ver la documentación de la API generada por Swagger.

## Rutas de la API

- **GET /api/clients**: Obtener todos los clientes.
- **GET /api/clients/:id**: Obtener un cliente por ID.
- **POST /api/clients**: Crear un nuevo cliente.
- **PUT /api/clients/:id**: Actualizar un cliente existente.
- **DELETE /api/clients/:id**: Eliminar un cliente existente.

## Documentación de la API

La documentación de la API está disponible en `http://localhost:3000/api-docs` y está generada por Swagger. Esta documentación incluye detalles sobre todas las rutas disponibles, así como los esquemas de datos utilizados.

## Caché

Para mejorar el rendimiento, esta API utiliza caché HTTP. Las respuestas a las solicitudes `GET /api/clients` y `GET /api/clients/:id` están cacheadas durante 60 segundos.

### Configuración de Caché

La configuración de caché se realiza utilizando el paquete `express-cache-controller`. La configuración global de caché se establece en el archivo `index.js`:


## Estructura del Proyecto

```plaintext
.
├── controllers
│   └── clientController.js
├── models
│   └── clientModel.js
├── routes
│   └── clientRoutes.js
├── index.js
├── package.json
└── README.md
