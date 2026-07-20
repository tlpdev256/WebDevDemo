'use client';
import { useRouter } from 'next/navigation';
import facebook from '../../..//ui/Images/facebookOutlined.png';
import Image from 'next/image';

export default function Footer() {

    const router = useRouter();
    const naviClick = () => {
      let path = `https://www.google.com/maps/place/23+Assembly+Dr,+Tullamarine+VIC+3043/@-37.7109041,144.860026,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad6595ad6d077cd:0x762c3e0db2673f48!8m2!3d-37.7109084!4d144.8626009!16s%2Fg%2F11c14vpwjc?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D`; 
      router.push(path);
    };

    const socialClick = () => {
      let path = `https://www.facebook.com/PackNSave`; 
      router.push(path);
    };

    const phoneClick = () => {
      router.push('tel:+610393353211');
    };

    return (
     <footer>
        <div className="pb-10 flex justify-center px-36 text-[#ff7601] text-center">
            <dl className="flex-col max-w-sm basis-0 grow">
              <dt className="font-bold text-2xl">
                Opening Hours
              </dt>
              <br/>
              <dd> Monday: Closed </dd>
              <dd> Tuesday: Closed </dd>
              <dd> Wednesday: 9.30am - 5.30pm </dd>
              <dd> Thursday: 9.30am - 5.30pm </dd>
              <dd> Friday: 9.30am - 5.30pm </dd>
              <dd> Saturday: 9.00am - 4.00pm </dd>
              <dd> Sunday: Closed </dd>
            </dl>
          
            <dl className="flex-col max-w-sm basis-0 grow">
              <dt className="font-bold text-2xl text-wrap">
                Contacts
              </dt>
              <br/>
              <div className="flex gap-1 text-center">
                <dd>
                  <button className="material-symbols-outlined size-12 text-white bg-black flex-none" onClick={naviClick}>Location_On</button>
                </dd>
                <dd> 23 Assembly Drive Tullamarine, Victoria, Australia, 3043 </dd>
              </div>
              <br/>
              <div className="flex text-center">
                <dd>
                <button className="material-symbols-outlined size-12 text-white bg-black flex-none" onClick={phoneClick}>Call</button>
                </dd>
                <dd className="basis-0 grow self-center">+61 (03) 9335 3211</dd>
              </div>
            </dl>
          
            <dl className="flex-col max-w-sm basis-0 grow">
              <dt className="font-bold text-2xl">
                Connect With Us
              </dt>
                <dd>
                  <button className=" mt-5" onClick={socialClick}>
                    <Image
                      src={facebook}
                      alt="facebook image"/>
                  </button>
                </dd>
              <br/>
            </dl>
        </div>
        <div className="p-10 bg-black flex justify-center">
          <text>© Copyright Of Pack N Save. All Rights Reserved.</text>
        </div>
      </footer>
    )
}