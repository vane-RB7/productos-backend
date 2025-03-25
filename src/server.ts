import express from 'express';
import cors from 'cors';
import connectDB from './config/database';
import productRoutes from './routes/product.routes';

// Conectar a la base de datos
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Definir rutas
app.use('/api', productRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
