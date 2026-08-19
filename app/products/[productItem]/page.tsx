'use client'

import 'material-symbols';
import Footer from '../../frontend/Pages/Resuable/footer';
import Header from '../../frontend/Pages/Resuable/header';
import {selectProducts} from '../../query/route'
import Image from "next/image";
import placeholder from '../../frontend/Images/placeholder.jpg'
import { Suspense, useState } from 'react';
import { Products as ProductType} from '@/app/lib/definitions';
import { useEffect } from 'react';

let path = window.location.pathname;
path = path.split('/products/').join("");

const productName = path.charAt(0).toUpperCase() + path.slice(1);

export default function Products() {
  const [data, setData] = useState<ProductType>();
  const [image, setImage] = useState();

  useEffect (() => {
    const loadData = async () => {
      const response = await selectProducts(productName);
      const imageUrl = await import(`../../frontend/Images/${path}.jpg`);
      if (typeof response !== "string"){
        setData(response[0]); 
      };
      setImage(imageUrl);
    };
    loadData();
  },[]);

  const loadImage = () => {
    var returnImg;

    if (image) {
      returnImg = image;
    } else {
      returnImg = placeholder;
    };

    return (
      <Image
          src={returnImg}
          alt={'alt'}
          width={500}
          height={500}
          className="rounded-lg shadow-md"
        />
    )
  };

  const loadProducts = () => {

    if (data && image) return (
      <div className = "text-violet-700 flex flex-col m-5 p-4 border-l-4 border-violet-700 ">
        <text className = "text-4xl">Price:$ {data.Price.toString()}</text>
        <div className = "border-2 border-violet-700 my-3 w-1/2">
          <input className = "w-full" id="amount" type="number" min="0" max="100" step="1" defaultValue={1}/>   
        </div>
        <text>Category:</text>
        <div className = "basis-1/2">
          <button className = "border-2 border-violet-700 my-2 px-4 py-2 rounded-md">Add to Cart</button>
        </div>
      </div>
    ) 
    else return <div>Loading...</div>
  }


return (
    <main className="flex-col">   
    {Header()}
    <div className="flex flex-col justify-center mb-10">
      <text className = "text-center text-violet-700 text-6xl py-5">{productName}</text>
      <div className="flex flex-row justify-center mb-10">
        <Suspense fallback={<div>Loading...</div>}>        
          {loadImage()}
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>        
          {loadProducts()}
        </Suspense>
      </div>
    </div>
    

    {Footer()}
    </main>
  );
}
