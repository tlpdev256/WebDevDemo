'use client'

import 'material-symbols';
import Footer from '../frontend/Pages/Resuable/footer';
import Header from '../frontend/Pages/Resuable/header';

export default function Products() {
  
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
