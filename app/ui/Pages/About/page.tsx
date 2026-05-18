'use client'

import 'material-symbols';
import Footer from '../Resuable/footer';
import Header from '../Resuable/header';

export default async function Page() {
  
  return (
    <main className="flex-col">
      
      {Header()}

     
      {Footer()}
    </main>
  );
}
