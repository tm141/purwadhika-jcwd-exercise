'use client'
import { useState } from "react"

export default function Hero() {
    const [isHover, setIsHover] = useState(false);
    // const [videoOnce, setVideoOnce] = useState(false); //dev mode so it does not play evertime refreshing page
    const [videoOnce, setVideoOnce] = useState(true);

    function toggleHover(){
        setIsHover(!isHover);
    }
    function reloadVideo(){
        (videoOnce)&&setVideoOnce(false);
        let video = document.getElementById("hero-video")
        video&&video.load();
    }

    function toggleVideoOnce(){
        setVideoOnce(true);
    }

    return (
        <div className="py-24 flex sm:flex-col md:flex-row p-[var(--px)] h-1/3 bg-[var(--color-fourth)] ">
            <div className="p-10">
                <h1 className="px-5 py-2 w-fit rounded-lg text-4xl font-bold tracking-tight text-[var(--color-secondary)] bg-[var(--color-primary-2)] sm:text-6xl">RePet</h1>
                <p className="mt-6 text-2xl leading-8">Where Love Means no Surprises</p>
                <p className="mt-6 leading-8 text-justify">At RePet, we bring the joy of beloved pets back into your life through cutting-edge cloning techniques</p>
            </div>
            <div className="min-w-[360px] max-w-[720px] md:min-w-[720px] mr-0 ml-auto">
                <video id="hero-video" src='/tv-ad.mov' poster="/landscape7.jpg" autoPlay={videoOnce} muted onMouseEnter={toggleHover} onMouseLeave={toggleHover} onEnded={reloadVideo} controls={isHover} className="" />
            </div>
        </div>
    )
}