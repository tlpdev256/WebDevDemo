'use client'

import 'material-symbols';
import Footer from './frontend/Pages/Resuable/footer';
import Header from './frontend/Pages/Resuable/header';
import registers from './frontend/Images/registers.jpg';
import freezers from './frontend/Images/freezers.jpg';
import flyers from './frontend/Images/flyers.jpg';
import Image from 'next/image';

export default function Page() {
  
  return (
    <main className="flex-col">
      
      {Header()}

      <div className="flex-col">
        <div className="flex flex-col bg-cover bg-center bg-[url('./Images/supermarket.jpg')]">
            <div className="animate-fade-in bg-black/30 p-36  bg-cover">
              <strong> Generic <br/> Wholesale Food Market <br/></strong> 
              <br/><hr/><br/>
              <small>A Wholesale outlet for Cake Decorating Supplies, Party Food, Seafood and Bulk frozen foods. We also carry a range of party supplies, paper and packaging products. <br/></small>
              <br/><br/><br/>
              <i>Visit our outlet for genuine wholesale prices.</i>
              <br/><br/>
              <button className="text-white rounded-lg py-2 px-6 border-white border-solid border-2 font-bold">
                Shop Now
              </button>
            </div>
        </div>

        {/* Feature Products */}
        <div className="p-10 flex justify-center text-violet-700 ">
          <div>
            <strong className="text-6xl">
              Feature Products
            </strong>
            <br/>
            <div className="pt-10 flex justify-center">
              <hr className="border-[#6D28D9] w-2/5 self-center"/>
            </div>
          </div>
        </div> 
        
        {/* Everything You Need In The One Place */}
        <div className="justify-center bg-fixed bg-cover bg-[url('./Images/aisle.jpg')]">
          <div className="bg-[#6D28D9]/70 p-36 py-60 flex justify-center">
            <div className="max-w-6xl  text-center ">
              <strong className="flex justify-center"> Everything You Need In The One Place</strong> 
              <div className="pt-10 flex justify-center">
                <hr className="border-white w-1/6 self-center"/>
              </div>
              <br/><br/>
              <small>For the most comprehensive range of Party Food, Finger Food and Catering Supplies in Melbourne you need look no further than the  Generic Wholesale Foodmarket<br/></small>
            </div>
          </div>
        </div>

        {/* Search, Find And Get What You Need, At Any Time*/}
        <div className="px-36 py-10 flex text-violet-700 flex justify-center">
          <div className="max-w-6xl text-center ">
            <div>
              <strong className="max-w-4xl"> Search, Find And Get What You Need, At Anytime</strong> 
              <div className="pt-10 flex justify-center">
                <hr className="w-1/6 self-center border-[#6D28D9]"/>
              </div>
            </div>

            {/* Images section*/}
            <div className="py-10 flex text-violet-700 gap-4">
              <dl className="flex-col max-w-sm basis-0 grow">
                
                <Image src={flyers} alt="flyers"/>
                <br/>
                <dt className="font-bold text-2xl">
                  View Our Latest Catalogue
                </dt>
                <br/>
                <dd className="text-black"> View our latest catalogue online </dd>
                <br/>
                <button className="text-violet-700 rounded-lg py-2 px-6 border-[#6D28D9] border-solid border-2">
                  View
                </button>

              </dl>
            
              <dl className="flex-col max-w-sm basis-0 grow">
                
                <Image src={registers} alt="registers"/>
                <br/>
                <dt className="font-bold text-2xl">
                  Click And Collect
                </dt>
                <br/>
                <dd className="text-black"> Order online from the convience of your own home. We'll then pick your order and give you a call when your order's ready to collect. </dd>
                <br/>
                <button className="text-violet-700 rounded-lg py-2 px-6 border-[#6D28D9] border-solid border-2">
                  Shop
                </button>
              </dl>
            
              <dl className="flex-col max-w-sm basis-0 grow">
                
                <Image src={freezers} alt="freezers"/>
                <br/>
                <dt className="font-bold text-2xl">
                  Our Store
                </dt>
                <br/>
                <dd className="text-black"> Visit our store today</dd>
                <br/>
                <button className="text-violet-700 rounded-lg py-2 px-6 border-[#6D28D9] border-solid border-2">
                  More
                </button>
              </dl>
            </div>

          </div>
        </div>
      </div>
 
      {Footer()}

     

    

    </main>
  );
}
