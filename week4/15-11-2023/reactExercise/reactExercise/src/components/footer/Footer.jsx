import Style from './Footer.module.css';
import Socmed from '../socmed/Socmed.jsx';
import Button from '../button/Button.jsx';

export default function Footer() {

    return (
        <div className={Style.container}>
            <div className={Style.desc}>
                <p className={Style.getInTouch}>GET IN TOUCH</p>
                <p className={Style.secondHeader}>
                    Swing into Jungle Joy! - Playful Monkeys - Interactive Fun - Tropical Vibes - Tasty Monkey Snacks - Plan your visit today!
                </p>
                <p className={Style.caution}>
                    <b>CAUTION</b>: The bananas in our snack bar are for humans only. Our monkeys have a strict diet of stolen ice cream and dreams of world domination. Don't tempt them with your potassium-packed treats!
                </p>
                <Socmed />
            </div>
            <div className={Style.contact}>
                <ul>
                    <li className={Style.heading}>CALL ME</li>
                    <li className={Style.list1}>1 (234) 456-banana</li>
                    <li className={Style.list1}>1 (234) 654-banana</li>
                    <li className={Style.heading}>LOCATION</li>
                    <li className={Style.list1}>Sulawesi</li>
                    <li className={Style.heading}>MY TOP SERVICE</li>
                    <li className={Style.list1}>✔ Flea Finding</li>
                    <li className={Style.list1}>✔ Monkey Bussiness</li>
                    <li className={Style.list1}>✔ Monkeying Around</li>
                </ul>
            </div>
            <div className={Style.emailForm}>
                <form action='#'>
                    <input className={Style.input1} type="text" id="name" name="name" placeholder="Enter your Name" /><br />
                    <input className={Style.input2} type="email" id="email" name="email" placeholder="Enter a valid email address" /><br /><br />
                    <textarea placeholder="" rows="4" cols="50" id="message-daf4" name="message" className={Style.input3} required=""></textarea>
                    <Button type1="blackButton" content1="Submit" ref1="#"/>
                </form>
            </div>
        </div>
    )
}
