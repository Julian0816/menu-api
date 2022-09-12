/**
 * Required External Modules (Importing the project dependencies)
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();


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


/**
 * Server Activation (Creating the express server)
 */

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});