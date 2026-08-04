'use client'

import 'material-symbols';
import Footer from '../frontend/Pages/Resuable/footer';
import Header from '../frontend/Pages/Resuable/header';

export default async function Products() {


  return (
    <main className="flex-col">   
      {Header()}

      {Footer()}
    </main>
  );
}
