import express from 'express';
import cors from 'cors';
import urlRoutes from './urlRoutes.js';

const app = express();
  
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use(urlRoutes);

export default app;
