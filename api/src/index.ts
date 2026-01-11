import express from 'express'
import urlRoutes from './urlRoutes.js';
import cors from 'cors';

const app = express();
const PORT: number = 3000;

app.use(cors({
  origin: ["*"],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "x-api-key"]
}));

app.options("*", cors());

app.use(express.json());

app.use(urlRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});