import './Cards.css'
import Card from '../card/Card';

const Cards = ({ kats }) => {
    return(<div className='pet-cards-container'>
        {kats.map((kat) => {
            return <Card 
                key={kat.id}
                name={kat.name}
                phone={kat.phone}
                email={kat.email}
                image={kat.image}
                isFavoured={kat.isFavoured}
            />
        })}

    </div>);
}

export default Cards;