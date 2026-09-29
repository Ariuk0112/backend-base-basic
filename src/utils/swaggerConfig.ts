import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LAB docs',
      version: '1.0.0',
      description :"Description of the LAB API",
    },
  },
  apis: ['./src/router/*.ts'], // Adjust the path according to your project structure
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;
