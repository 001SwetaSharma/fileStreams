import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/fileStreamRoutes.js';
const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use('/api', routes);
app.listen(port, () => {
    console.log(`Server listening to port :: ${port}`);

    process
    .on('uncaughtException', (err) => {
        console.error(`Uncaught Exception :: ${err}`);
        process.exit(1);
    })
    .on('unhandledRejection', (err) => {
        console.error(`Unhandled Rejection :: ${err}`);
        process.exit(1);
    })
});