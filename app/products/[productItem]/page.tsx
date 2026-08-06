'use client'

import 'material-symbols';
import Footer from '../../frontend/Pages/Resuable/footer';
import Header from '../../frontend/Pages/Resuable/header';
import {selectProducts} from '../../query/route'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

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
        height={500}
        className="rounded-lg shadow-md"
      />
    );
    } catch {
      return (<text>oops couldn't find what you were looking for...</text>)
    }
};



export default function Products() {
  const handleClick = () => {
    alert(path);
  }

  return (
    <main className="flex-col">   
    {Header()}

    <div>
      <button onClick={handleClick}> click me</button>
      <AsyncImage/> 
    </div>
    

    {Footer()}
    </main>
  );
}
