import express from 'express'
import urlRoutes from './urlRoutes.js';

const app = express();
const PORT:number = 3000;

app.use(express.json());

app.use(urlRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});