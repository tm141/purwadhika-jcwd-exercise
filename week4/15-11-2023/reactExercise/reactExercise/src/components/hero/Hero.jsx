import Style from "./Hero.module.css";
import monkUrl from "../../assets/macaca.png";
import Button from "../button/Button.jsx";

export default function Hero() {
    return (
        <div className={Style.container}>
            <div className={Style.content}>
                <img src={monkUrl} alt="monkey" className={Style.monkImg} />
                <div className={Style.detail}>
                    <div className={Style.hello}>
                        <p>HELLO!</p>
                    </div>
                    <p className={Style.Iam}>I'm Macaca, a Monkey</p>
                    <p className={Style.imgReff}>Image from: <a href="https://rb.gy/p6pnth" target="_blank">Wikipedia</a></p>
                    <Button
                        type1='white'
                        content1='READ MORE'
                        ref1='#'
                    />
                </div>
            </div>
        </div>
    )
}