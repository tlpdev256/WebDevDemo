'use client'

import 'material-symbols';
import Footer from '../frontend/Pages/Resuable/footer';
import Header from '../frontend/Pages/Resuable/header';
import {selectProducts} from '../query/route'
import { useRouter } from 'next/navigation';

export default function Products() {
  let path = window.location.pathname;

  var user;
  const handleFetch = async () => {
    user = await selectProducts(path);  
    alert(user);
  }
  const handleClick = () => {
    alert(path);
  }
  const router = useRouter();

  return (
    <main className="flex-col ">   
    {Header()}

    <div>
      <input> Hi! This doesn't exist yet! Come back later</input>
    </div>

    {Footer()}
    </main>
  );
}
