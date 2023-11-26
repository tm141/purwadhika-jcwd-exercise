import './Intro.css';

export default function Intro() {

    return (
        <div className="intro-container">
            <div className="introBacksheet introDelay7s">
                <div className="introInner">
                    <p className="introSlideInTop">Hi!</p>
                    <p className="introSlideInTop3s introDelay2s">I'm Andre TM, a web developer</p>
                    {/* <p className="introSlideInTop introDelay4s">I'm a web developer</p> */}
                    <p className="introSlideInTop introDelay5s">This is my portfolio</p>
                </div>
            </div>
        </div>
    )
}