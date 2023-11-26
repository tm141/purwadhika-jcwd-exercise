import './InfiniteScroll.css';
// Belajar dari https://www.youtube.com/watch?v=iLmBy-HKIAw&t=1727s
export default function InfiniteScroll({className}) {
    return (
        <div className={`infiniteScrollContainer ${className}`}>
            <div className= "infiniteScrollCenter">
                <h1 className="infiniteScrollJudul">Andre Timoti Mahadika S.T.</h1>
                <div className="infiniteScrollScroller">
                    <ul className="infiniteScrollTag-list infiniteScrollScroller__inner">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>PHP</li>
                        <li>Java Script</li>
                        <li>Java</li>
                        <li>Java Spring</li>
                        <li>Ruby</li>
                        <li>Ruby on Rails</li>
                        <li>ReactJS</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>PHP</li>
                        <li>Java Script</li>
                        <li>Java</li>
                        <li>Java Spring</li>
                        <li>Ruby</li>
                        <li>Ruby on Rails</li>
                        <li>ReactJS</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

// < !--
//     PROGRESSIVELY ENHANCED
//    If a user has`prefers-reduced-motion: reduced`, there will be no animation
//    and the items will wrap, instead of being hidden.
//    If they have not opted for reduced motion, the items will be duplicated with JS
//    and the duplicated content will have `aria-hidden="true"` to prevent duplicate content
// for screen readers.
//    If a user has JS disabled or it fails for whatever reason, they will get the same
// experience as a user with `prefers-reduced-motion: reduced`, so no content is hidden,
//     and there is no animation.
   
//    === OPTIONS ===
//         CONTROL SPEED 
//    If you don't assign anything, it will use a default speed.
//    To change the speed, on the`.scroller`
//    you can use `data-speed="fast"` or`data-speed="slow"

//    CONTROL DIRECTION 
//    By default, it will scroll from right to left.
//    To change the direction, on the `.scroller`
//    you can use `data - direction="right"` (`data - direction="left" also works, but it is the default)
// -->

