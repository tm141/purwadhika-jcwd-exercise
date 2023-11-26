import Style from "./Button.module.css";

export default function Button({ type1, content1, ref1 }) {

    let typeStyle = (type1=="white")?Style.whiteButton:Style.blackButton;

    return (
        <a href={ref1} className={`${Style.container} ${typeStyle}`}>
            <p>{content1}</p>
        </a>
    )
}