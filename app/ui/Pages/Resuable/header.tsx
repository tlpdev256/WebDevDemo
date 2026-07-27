'use client';
import Image from 'next/image';
import PNS from '../../..//ui/Images/PNS.png';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import React, { useState } from 'react';

export default function Header() {

      const [openPanel, setOpenPanel] = useState(false);

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
          <div>
            {/* add search function */}
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