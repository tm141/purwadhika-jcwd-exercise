import Image from "next/image"

export default function Card({ imgUrl, title, desc }: { imgUrl: string, title: string, desc: string }) {

    return (
        <div className="grid grid-rows-3 w-[300px] h-[400px] my-10">
            <div className="row-[1\4] col-[1]">
                <Image className="" src={imgUrl} alt={title} width={300} height={300} />
            </div>
            <div className={"row-[4] col-[1] text-black bg-slate-300  bg-opacity-40 h-[160%] "}>

                <p className="text-center font-semibold">{title}</p>
                <p className="text-center">{desc}</p>
            </div>
        </div>
    )
}