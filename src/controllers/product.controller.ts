import { Request, Response } from 'express';
import Product from '../models/product.model';

// Obtener todos los productos
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos' });
  }
};

// Crear un producto
export const createProduct = async (req: Request, res: Response) => {
  try {
    // Validar los datos del producto
    console.log("📥 Datos recibidos:", req.body); // 👈 Verificar qué datos llegan
    
    const { nombre, descripcion, precio, categoria, stock, imagen } = req.body;
    const newProduct = new Product({ nombre, descripcion, precio, categoria, stock, imagen });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el producto' });
  }
};
