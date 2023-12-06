import Image from "next/image"

export default function OverView() {
    return (
        <div className="px-[var(--px)] pt-12 pb-12 bg-[rgba(var(--color-primary-rgb),0.3)]">
            <h1 className="text-right text-5xl font-bold py-5 rounded-xl px-14">Overview</h1>
            <div className="flex gap-20 pl-16 sm:flex-row">
                <div className="pl-15">
                    <Image src={'/scientist.jpg'} alt="scientist" height={600} width={600} className="rounded-xl" />
                </div>
                <div className="grid grid-rows-2 grid-cols-2 w-[50%] gap-4 ">
                    <div className="row-[1] col-span-2 bg-teal-100 rounded-xl p-10">
                        <h1 className="text-3xl font-bold mb-6">Our Vision</h1>
                        <p className="tracking-wide leading-7">Our vision at rePet is to offer pet owners the unique opportunity to preserve the bond with their cherished pets, ensuring that the love, loyalty, and companionship they shared are perpetuated through advanced cloning technology. We strive to redefine the concept of pet companionship, transcending the boundaries of time and loss.</p>
                    </div>
                    <div className="row-[2] col-[1] bg-teal-100 rounded-xl p-5">
                        <h1 className="text-2xl font-bold mb-6">Ethical Cloning</h1>
                        <p className="leading-7">We prioritize ethical considerations and transparency in our cloning process.</p>
                    </div>
                    <div className="row-[2] col-[2] bg-teal-100 rounded-xl p-5">
                        <h1 className="text-2xl font-bold mb-6">Responsible Cloning</h1>
                        <p className="leading-7">Our practices adhere to all relevant regulations, ensuring the well-being of the cloned pets and promoting responsible cloning within the boundaries of ethical guidelines.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}