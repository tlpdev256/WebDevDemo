'use server'

const connectionPool = require('../../db');

export async function selectProducts(productName:string) {
  try {
    const client = await connectionPool.connect();
    console.log('Connected!');
    const result = await client.query('SELECT * FROM public."Products" WHERE "Name" = ' + "'" + {productName} +"'");
    const data = result.rows;
    console.log("Fetched data")
    client.release();

    return JSON.stringify(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  } 
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
