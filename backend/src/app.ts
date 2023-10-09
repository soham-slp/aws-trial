import { Application, Request, Response, NextFunction } from 'express';
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

const app: Application = express();

app.use(cors({
    origin: '*',
    allowedHeaders: '*',
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT', 'HEAD']
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/api/', (req: Request, res: Response, next: NextFunction) => {
    return res.json({
        'message': 'Success!'
    })
});

export default app;