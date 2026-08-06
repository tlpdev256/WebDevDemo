'use client';
import Image from 'next/image';
import PNS from '../../..//frontend/Images/PNS.png';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Notes: ensure that logo is moved into the center
export default function Header() {

      const [openPanel, setOpenPanel] = useState(false);
      const [search, setSearch] = useState(''); 
      const router = useRouter();

      const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && search != "") {
          const origin = window.location.origin;
          let path = `${origin}/products/${search}`;
          alert(path);
          //router.push(path);
        }
      }

    return (
     <header className='z-[1]'>
      <div>
        <button className="material-symbols-outlined size-20" onClick={() => setOpenPanel(true)}>menu</button>
      </div>
      <div className="image-restraint">
        <Image
          src={PNS}
          alt="Pack N Save Logo"
        />
      </div>
      <div>
        <div className="text-[#ff7601] rounded-md bg-white flex flex-row">
          <input
            className="placeholder:text-[#ff7601] rounded-md"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Find Products..."
          />
          <div className="flex justify-center">
            <button className="material-symbols-outlined hover:bg-transparent hover:text-gray-500 hover:transition-none">Search</button>
          </div>
        </div>
        <div>
          {/* add cart function */}
        </div>
      </div>
      <SlidingPane
        className="website-nav"
        overlayClassName="website-nav"
        isOpen={openPanel}
        hideHeader
        from={'left'}
        width='20%'
        onRequestClose={() => {
          setOpenPanel(false)
        }}
      >
      <div>
        <dl>
          <dt className="display flex">
            <div className="justify-center flex-grow 2 font-bold text-2xl">
              <button>Home</button>
            </div>
            <button className="material-symbols-outlined wght-700" onClick={() => setOpenPanel(false)}>Close</button>
          </dt>
          <dd>
            <button>| Account</button>
          </dd>
        </dl>
          <dt className="font-bold text-2xl">
            <button>Shop</button>
          </dt>
        <dl>
          <dt className="font-bold text-2xl">
            <button>Our Range/Services</button>
          </dt>
          <dd>
            <button>| Party Finger Food</button>
          </dd>
          <dd>
            <button>| Cake Decoration Supplies</button>
          </dd>
          <dd>
            <button>| Seafood and Food Services</button>
          </dd>
          <dd>
            <button>| Party Goods</button>
          </dd>
        </dl>
        <dl>
          <dt className="font-bold text-2xl">
            <button>About Us</button>
          </dt>
        </dl>
        <dl>
          <dt className="font-bold text-2xl">
            <button>Contact Us</button>
          </dt>
        </dl>
      </div>
      
      </SlidingPane>
    </header>

      
    )
}