import './App.css';
import Card from './components/card/Card';


const cardProps = {
  name: 'Sydney',
  phone: '1111',
  email: 'test@gmail.com',
  image: {url:'https://upload.wikimedia.org/wikipedia/en/f/fb/SwatKatsseason2.jpg', alt:'sk-logo'},
  isFavoured: false
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Card 
          name={cardProps.name}
          phone={cardProps.phone}
          email={cardProps.email}
          image={cardProps.image}
          isFavoured={cardProps.isFavoured}
        /> */}
        
        <Card {...cardProps}/>
      </header>
    </div>
  );
}

export default App;
