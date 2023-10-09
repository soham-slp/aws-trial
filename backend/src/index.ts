import app from './app';
import * as dotenv from 'dotenv';

if(process.env.NODE_ENV !== 'production')
    dotenv.config({
        path: './vars/.env'
    });


app.listen(process.env.PORT, () => console.log('listening on port ' + process.env.PORT));

