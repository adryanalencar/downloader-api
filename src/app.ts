import express from 'express'
import morgan from 'morgan';
import cors from 'cors'
import { router } from './routes';

const app = express();
const corsOptions = {

}

app.use(cors(corsOptions));
app.use(morgan('common'));
app.use(router)

export {
    app
}
