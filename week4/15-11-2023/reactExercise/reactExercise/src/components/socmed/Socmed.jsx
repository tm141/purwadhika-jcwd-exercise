import Style from './Socmed.module.css';
import facebookUrl from "../../assets/facebook.svg";
import instaUrl from "../../assets/instagram.svg";
import twitterUrl from "../../assets/twitter.svg";
import youtubeUrl from "../../assets/youtube.svg";


export default function Socmed() {

    return (
        <div className={Style.socmedLinks}>
            <a href="https://www.facebook.com/funnymonkeypage/photos/a.747954351952018/2076134915800615/" target='_blank'>
                <img src={facebookUrl} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/p/CtjThzmr0YO/" target='_blank'>
                <img src={instaUrl} alt="instagram" />
            </a>
            <a href="https://twitter.com/thechimpzone/status/1274411284122021888" target='_blank'>
                <img src={twitterUrl} alt="twitter" />
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank'>
                <img src={youtubeUrl} alt="youtube" />
            </a>
        </div>
    )
}