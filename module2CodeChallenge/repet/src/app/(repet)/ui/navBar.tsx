import Link from "next/link";
import Image from "next/image";
import repetUrl from '../../../../public/repet.png';

export default function NavBar() {
    return (
        <div className="sticky">
            <div className="flex h-fit bg-blue-100 border-b-2 border-gray-100 p-2 justify-between items-center px-[var(--px)]">
                <div className="">
                    <Link
                        key="Icon"
                        href="/"
                        className=""
                    >
                        <Image
                            src={repetUrl}
                            alt="repet logo"
                            width={85}
                            height={85}
                        />
                    </Link>
                </div>

                <div className="">
                    <Link
                        key="About Us"
                        href="/about-us"
                        className="p-3 hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)] rounded-lg"
                    >
                        About Us
                    </Link>
                    <Link
                        key="Services"
                        href="/services"
                        className="p-3 hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)] rounded-lg"
                    >
                        Services
                    </Link>
                    <Link
                        key="Teams"
                        href="/teams"
                        className="p-3 hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)] rounded-lg"
                    >
                        Teams
                    </Link>
                </div>
            </div>
        </div>
    )
}