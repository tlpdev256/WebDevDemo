'use server'

import { Products } from "../lib/definitions";

const connectionPool = require('../../db');

export async function selectProducts(productName:string) {
  try {
    const client = await connectionPool.connect();
    console.log('Connected!');
    console.log('SELECT * FROM public."Products" WHERE "Name" = ' + "'" + productName +"'");
    const result = await client.query('SELECT * FROM public."Products" WHERE "Name" = ' + "'" + productName +"'");
    const data: Products[] = result.rows;
    console.log("Fetched data");
    console.log(data);
    client.release();

    return data;
  } catch (error) {
    return JSON.stringify(Response.json({ error }, { status: 500 }));
  } 
}

// export async function GET() {
//   try {
//     const client = await connectionPool.connect();
//     console.log('Connected!');
//     const result = await client.query('SELECT * FROM public."Products"');
//     const data = result.rows;
//     console.log("Fetched data")
//     client.release();

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   } 
// }
