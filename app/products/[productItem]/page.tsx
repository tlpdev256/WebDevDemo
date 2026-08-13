'use client'

import 'material-symbols';
import Footer from '../../frontend/Pages/Resuable/footer';
import Header from '../../frontend/Pages/Resuable/header';
import {selectProducts} from '../../query/route'
import Image from "next/image";
import { use, Suspense } from 'react';
import { Products as ProductType} from '@/app/lib/definitions';
import { useEffect } from 'react';

let path = window.location.pathname;
path = path.split('/products/').join("");

const AsyncImage = async () => {

  try{
    const imageUrl = await import(`../../frontend/Images/${path}.jpg`);
    return (
      <Image
        src={imageUrl.default}
        alt={'alt'}
        width={700}
        height={700}
        className="rounded-lg shadow-md"
      />
    );
    } catch {
      return (<text>oops couldn't find what you were looking for...</text>)
    }
};

var data: ProductType;

function ProductDetails({ dataPromise }: { dataPromise: Promise<any> }) {
  const response = use(dataPromise); 
  if (typeof response !== "string"){
    data = response[0]; 
  };

  return (
    <div className = "text-violet-700 text-6xl flex flex-col">
      <text>Price:$ {data.Price.toString()}</text>
      <input className = "text-violet-700 text-6xl flex flex-col" type="number" min="0" max="100" step="1" defaultValue={1}/>   
      <text>Category:</text>
      
    </div>
  );

}
const productName = path.charAt(0).toUpperCase() + path.slice(1);
const promise = selectProducts(productName);

export default function Products() {
  return (
    <main className="flex-col">   
    {Header()}

    <div className="flex flex-row">
      <div className="flex flex-col">
        <text className = "text-violet-700 text-6xl">{path}</text>
        <Suspense fallback={<div>Loading...</div>}>        
          <AsyncImage/> 
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>        
          <ProductDetails dataPromise={promise} />
        </Suspense>
      </div>
    </div>
    

    {Footer()}
    </main>
  );
}
