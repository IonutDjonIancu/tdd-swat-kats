import { useState } from 'react';
import emptyHeart from '../../svgs/emptyHeart.svg';
import filledHeart from '../../svgs/filledHeart.svg';
import './Card.css'

const Card = ({ name, phone, email, image, isFavoured }) => {

    const [isFav, setIsFav] = useState(isFavoured);

    const toggleHeart = () => {
        setIsFav(!isFav);
    }
    console.log('-----------------------------------------------------------------------');
    console.log(image);
    console.log('-----------------------------------------------------------------------');

    return(


        <article className='card'>
            <div className='card-header'>
                <img src={image.url} alt={image.alt} className='card-img' />
                <button 
                    className='heart'
                    onClick={toggleHeart}
                >
                    {isFav ? (
                        <img src={filledHeart} alt='filled heart'/>
                    ) : (
                        <img src={emptyHeart} alt='empty heart'/>
                    )}
                </button>
            </div>
            <div className='card-content text-black'>
                <h3>{name}</h3>
                <p className='font-weight-light'>{phone}</p>
                <p>{email}</p> 
            </div>   
        </article>
    );
}

export default Card;
