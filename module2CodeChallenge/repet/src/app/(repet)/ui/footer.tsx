import Link from "next/link";
import Image from "next/image";
import repetUrl from '../../../../public/repet.png'
import ContactUsForm from "./contactUsForm";

export default function Footer(){
    return(
        <div className="font-metropolis h-fit bg-blue-400 w-full flex px-[var(--px)] py-8">
            <div>
                <Image
                    src={repetUrl}
                    alt="repet logo"
                    height={100}
                    width={100}
                />
            </div>
            <div className="ml-80 text-xl font-bold">
                <ul>
                    <li className="pb-1 px-3 rounded-lg text-gray-700 hover:text-[var(--color-secondary)]"><Link key="Home" href='/'>Home</Link></li>
                    <li className="pb-1 px-3 rounded-lg text-gray-700 hover:text-[var(--color-secondary)]"><Link key="About Us" href='/about-us'>About Us</Link></li>
                    <li className="pb-1 px-3 rounded-lg text-gray-700 hover:text-[var(--color-secondary)]"><Link key="Services" href='/services'>Services</Link></li>
                    <li className="pb-1 px-3 rounded-lg text-gray-700 hover:text-[var(--color-secondary)]"><Link key="Teams" href='/teams'>Teams</Link></li>
                </ul>
            </div>
            <div className="mr-0 ml-auto">
                <ContactUsForm />
            </div>
        </div>
    )
}