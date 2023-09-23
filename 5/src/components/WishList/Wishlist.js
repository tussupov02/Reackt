export default function Wishlist({heart, heartButton}){
    return(
        <div className="wishlist" onClick={heartButton}>
            <img src={heart? "./img/heart-red.png" : "./img/heart.png"} alt="" />
        </div>
    )
}