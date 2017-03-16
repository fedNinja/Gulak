import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middlewares';
import {userRoutes} from './modules';
const app= express();

/****
Database

***/
dbConfig();

/**
Middleware
*/
middlewaresConfig(app);
app.use('/api', [userRoutes]);

const PORT=process.env.PORT ||8080;

app.listen(PORT, err => {
	if(err){
		console.error(err);
	} {
		console.log(`App listen to port: ${PORT}`);
	}
});