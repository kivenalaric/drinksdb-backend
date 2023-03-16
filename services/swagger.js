const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
      openapi: "3.0.1",
      info: {
        title: "Drinksdb Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Alarics Drinksdb",
          url: "https://logrocket.com",
          email: "kivenala2@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3005",
        },
      ],
    },
    apis: ["./routes/*js"],
  };
  
  const specs = swaggerJsdoc(options);

  module.exports = specs
//   app.use(
//     "/api-docs",
//     swaggerUi.serve,
//     swaggerUi.setup(specs)
//   );