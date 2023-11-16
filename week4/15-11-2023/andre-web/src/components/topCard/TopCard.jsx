
import imgurl from '../../assets/20231116_150912.png';
import InfiniteScroll from '../infiniteScroll/InfiniteScroll';
import './TopCard.css'

export default function TopCard() {
    return (
        <div className="portofolio-topCard">
            <div className="portofolio-left">
                <InfiniteScroll className="infinite-scroll-portofolio" />
            </div>
            <div className="portofolio-right">
                <img src={imgurl} alt="myPict" />
            </div>
        </div>
    )
}
