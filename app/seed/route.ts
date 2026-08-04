import { NextResponse } from 'next/server';
const connectionPool = require('../../db');

async function selectProducts() {
  const data = await connectionPool.query(`
    SELECT * 
    FROM Products
  `);

  return data;
}

export async function GET() {
  try {
    const client = await connectionPool.connect();
    console.log('Connected!');
    const result = await client.query('SELECT * FROM public."Products"');
    const data = result.rows;
    console.log("Fetched data")
    client.release();

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  } 
}
