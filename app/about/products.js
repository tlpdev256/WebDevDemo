// pages/api/posts.js
import { getDb } from '../backend/server';

export default async function handler(req, res) {
  const db = await getDb();
  
  // Example: Get all posts
  const products = await db.all('SELECT * FROM Products');
  res.status(200).json(products);
}   