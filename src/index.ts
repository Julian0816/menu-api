/**
 * Required External Modules (Importing the project dependencies)
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./items/items.router"
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

dotenv.config();
require('./db/config')

/**
 * App Variables (Loading the envitomental variable PORT into the process.env and creating an instance of express)
 */

if(!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();


/**
 * App Configuration (Mounting the middlewear)
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/menu", require('./routers/menu-item-list')); //Watch out for this, not very convinced with that path

app.use(errorHandler);
app.use(notFoundHandler);


/**
 * Server Activation (Creating the express server)
 */

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});