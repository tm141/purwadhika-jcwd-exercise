import Style from './Profile.module.css';
import monkUrl from "../../assets/macaca.png";
import Socmed from '../socmed/Socmed.jsx';

export default function Profile() {

    return (
        <div className={Style.container}>
            <div className={Style.profileHeader}>
                <div className={Style.profileTitle}><p>Profile</p></div>
                <p className={Style.profileDesc}>I'm a curious monkey!</p>
            </div>
            <div className={Style.content}>
                <div className={Style.aboutMe}>
                    <h1>About me</h1>
                    <p>
                        Hey folks! Monkey here, living the high life in the treetops. Ready for a peek into our jungle adventures? Let's dive into the wild together!
                    </p>
                </div>
                <div className={Style.picture}>
                    <img src={monkUrl} alt="Mongkeh" />
                </div>
                <div className={Style.details}>
                    <h1>Details</h1>
                    <ul>
                        <li><b>Name: </b></li>
                        <li>Macaca</li>
                        <li><b>Age: </b></li>
                        <li>8 years</li>
                        <li><b>Location</b></li>
                        <li>Sulawesi</li>
                    </ul>
                    <Socmed />
                </div>
            </div>
        </div>
    )
}