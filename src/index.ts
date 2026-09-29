import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import morgan from "morgan";
import RootRoutes from "./router/index";
import swaggerSpec from "./utils/swaggerConfig";
import swaggerUi from "swagger-ui-express";

const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use("/api", RootRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.listen(process.env.PORT || 3000, async () => {
  console.log(`server running on port ${process.env.PORT}`);
});

module.exports = app;
