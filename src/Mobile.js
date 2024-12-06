import './Mobile.css';
export default function showMobile(props){

    return(
        <>
        <div className="mainframe">
            <div className="image">
                <img src={props.src} alt="images" />
            </div>
            <div className="name">
                <h2>{props.name}</h2>
                <ul>
                    <li>4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</li>
                    <li>17.04 cm (6.71 inch) HD+ Display</li>
                    <li>8MP Rear Camera | 5MP Front Camera</li>
                    <li>5000 mAh Battery</li>
                    <li>Helio G36 Processor</li>
                </ul>
            </div>
            <div className="price">
                <h3>₹{props.price}</h3>
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png" alt="flipkart" />
            </div>
        </div>
        </>

    );

}