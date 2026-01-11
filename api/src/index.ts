import express from 'express'
import urlRoutes from './urlRoutes.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors()); // 🔓 libera CORS para todas as origens
app.use(express.json());

app.use(urlRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
