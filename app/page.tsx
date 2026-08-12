'use client'

import 'material-symbols';
import Footer from './frontend/Pages/Resuable/footer';
import Header from './frontend/Pages/Resuable/header';

export default function Page() {
  
  return (
    <main className="flex-col">
      
      {Header()}

      <div className="flex-col z-[-40]">
        <div className="flex flex-col bg-cover bg-center bg-[url(https://www.packnsave.com.au/wp-content/themes/PackNSaveV2/images/94e5ffdc7e9631ffd9d0ad5019e1b364_IMG_2544.JPG)]">
            <div className="animate-fade-in bg-black/30 p-36">
              <strong> Pack N' Save <br/> Wholesale Food Market <br/></strong> 
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
        <div className="p-10 flex justify-center text-[#ff7601] ">
          <div>
            <strong className="text-6xl">
              Feature Products
            </strong>
            <br/>
            <div className="pt-10 flex justify-center">
              <hr className="border-[#ff7601] w-2/5 self-center"/>
            </div>
          </div>
        </div> 
        
        {/* Everything You Need In The One Place */}
        <div className="justify-center bg-fixed bg-cover bg-[url(https://www.packnsave.com.au/wp-content/themes/PackNSaveV2/images/3ec9c8b588e642a11be2132b5508c3a7_IMG_2537.JPG)]">
          <div className="bg-[#ff7601]/70 p-36 py-60 flex justify-center">
            <div className="max-w-6xl  text-center ">
              <strong className="flex justify-center"> Everything You Need In The One Place</strong> 
              <div className="pt-10 flex justify-center">
                <hr className="border-white w-1/6 self-center"/>
              </div>
              <br/><br/>
              <small>For the most comprehensive range of Party Food, Finger Food and Catering Supplies in Melbourne you need look no further than the  Pack N' Save Wholesale Foodmarket<br/></small>
            </div>
          </div>
        </div>

        {/* Search, Find And Get What You Need, At Any Time*/}
        <div className="px-36 py-10 flex text-[#ff7601] flex justify-center">
          <div className="max-w-6xl text-center ">
            <div>
              <strong className="max-w-4xl"> Search, Find And Get What You Need, At Anytime</strong> 
              <div className="pt-10 flex justify-center">
                <hr className="w-1/6 self-center border-[#ff7601]"/>
              </div>
            </div>

            {/* Images section*/}
            <div className="py-10 flex text-[#ff7601] gap-4">
              <dl className="flex-col max-w-sm basis-0 grow">
                
                <img src="https://www.packnsave.com.au/wp-content/themes/PackNSaveV2/images/1905102_bd_media_id_da6855975f83a82798b5eea5771dbe30.jpeg" alt="Scissors"></img>
                <br/>
                <dt className="font-bold text-2xl">
                  View Our Latest Catalogue
                </dt>
                <br/>
                <dd className="text-black"> View our latest catalogue online </dd>
                <br/>
                <button className="text-[#ff7601] rounded-lg py-2 px-6 border-[#ff7601] border-solid border-2">
                  View
                </button>

              </dl>
            
              <dl className="flex-col max-w-sm basis-0 grow">
                
                <img src="https://www.packnsave.com.au/wp-content/themes/PackNSaveV2/images/6cc1ac9be92080744d764a3e98871022_IMG_2547.JPG" alt="Register"></img>
                <br/>
                <dt className="font-bold text-2xl">
                  Click And Collect
                </dt>
                <br/>
                <dd className="text-black"> Order online from the convience of your own home. We'll then pick your order and give you a call when your order's ready to collect. </dd>
                <br/>
                <button className="text-[#ff7601] rounded-lg py-2 px-6 border-[#ff7601] border-solid border-2">
                  Shop
                </button>
              </dl>
            
              <dl className="flex-col max-w-sm basis-0 grow">
                
                <img src="https://www.packnsave.com.au/wp-content/themes/PackNSaveV2/images/7a5190f71e3797af239147b5a057eb1b_IMG_2534.JPG" alt="Freezers"></img>
                <br/>
                <dt className="font-bold text-2xl">
                  Our Store
                </dt>
                <br/>
                <dd className="text-black"> Visit our store today</dd>
                <br/>
                <button className="text-[#ff7601] rounded-lg py-2 px-6 border-[#ff7601] border-solid border-2">
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
