import Styles from './Header.module.css';
import monkurl from '../../assets/monkey.png';
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <div className={Styles.nav}>
            <div className={Styles.navbarWrap}>
                <div className={Styles.navbar}>
                    <img src={monkurl} alt="monkey" className={Styles.monkImg} />
                    {/* <div className={Styles.menu} onClick={()=>{alert('clicked!')}}> */}
                    <div className={Styles.menuWrap}>
                        <div className={Styles.menu} onClick={() => { setMenuOpen(!isMenuOpen) }}>
                            {/* <div className={Styles.menu}> */}
                            <div className={`${Styles.bar1} ${(isMenuOpen) ? Styles.change : ""}`}></div>
                            <div className={`${Styles.bar2} ${(isMenuOpen) ? Styles.change : ""}`}></div>
                            <div className={`${Styles.bar3} ${(isMenuOpen) ? Styles.change : ""}`}></div>
                        </div>

                        <div className={`${Styles.sideBar} ${isMenuOpen ? Styles.menuOpen : Styles.menuClose}`}>
                            <a href="#">Home</a>
                            <a href="#">Profile</a>
                            <a href="#">Capabilities</a>
                            <a href="#">Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
