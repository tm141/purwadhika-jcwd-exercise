import Intro from '../intro/Intro.jsx';
import TopCard from '../topCard/TopCard.jsx';
import WorkCard from '../workCard/WorkCard.jsx';
import './Portfolio.css';

export default function Portofolio() {
    return (
        <>
            <Intro />
            <div className="portofolio-container">
                <TopCard />
                <div className="portofolio-introduction">
                    <p>Hi!, I'm Andre Timoti Mahadika, I'm a web developer and a programmer. I've graduated from Parahyangan Catholic University in 2018 majoring in Information Techonlogies</p>
                </div>
                <div className="portofolio-work-experience">
                    <h1>My Work Experiences</h1>
                    <WorkCard />
                </div>
            </div>
        </>
    )
}