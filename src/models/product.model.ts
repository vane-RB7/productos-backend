import mongoose, { Schema, Document } from 'mongoose';

// Definir interfaz para el Producto
export interface IProduct extends Document {
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  stock: number;
  imagen: string;
}

// Definir el esquema del producto
const ProductSchema = new Schema<IProduct>({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: String, required: true },
    stock: { type: Number, required: true },
    imagen:{type: String}
});

// Exportar el modelo
export default mongoose.model<IProduct>('Product', ProductSchema, 'productos');

