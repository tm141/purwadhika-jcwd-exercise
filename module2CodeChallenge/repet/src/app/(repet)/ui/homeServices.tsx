import Image from "next/image"

export default function HomeServices() {
    return (
        <div className="px-[var(--px)] bg-[var(--color-fourth)] py-12">
            <h1 className="font-bold text-5xl pb-5 text-center">Services Highlight</h1>
            <div className="flex flex-row gap-4 justify-evenly">
                <div className="rounded-xl bg-[var(--color-third)] h-fit pt-0 pl-0 pr-0 pb-5 w-[300px]">
                    <Image className="rounded-t-xl mb-5" src={'/landscape3.jpg'} alt="lanscape3" width={300} height={300} />
                    <div className="pt-0 h-56 p-5">
                        <h1 className="text-xl font-bold text-center mb-2">Cloning</h1>
                        <p className="text-justify tracking-small leading-6">Bring back the presence of your beloved pet through genetic cloning</p>
                    </div>
                </div>
                <div className="rounded-xl bg-[var(--color-third)] h-fit pt-0 pl-0 pr-0 pb-5 w-[300px]">
                    <Image className="rounded-t-xl mb-5" src={'/landscape9.jpg'} alt="lanscape3" width={300} height={300} />
                    <div className="pt-0 h-56 p-5">
                        <h1 className="text-xl font-bold text-center mb-2">Genetic Engineering</h1>
                        <p className="text-justify tracking-small leading-6">Are you alergic to your cat? we can make your RePet cat Hypo-alergenic. Wish your dog were smaller or larger?, we can do that too</p>
                    </div>
                </div>
                <div className="rounded-xl bg-[var(--color-third)] h-fit pt-0 pl-0 pr-0 pb-5 w-[300px]">
                    <Image className="rounded-t-xl mb-5" src={'/landscape5.jpg'} alt="lanscape3" width={300} height={300} />
                    <div className="pt-0 h-56 p-5">
                        <h1 className="text-xl font-bold text-center mb-2">Post-Mortem Syncord</h1>
                        <p className="text-justify tracking-small leading-6">If you've lost your pet that were never syncorded, in most cases we can still take a post-mortem syncording within 12 hours of your pet demise</p>
                    </div>
                </div>
            </div>
        </div>
    )
}