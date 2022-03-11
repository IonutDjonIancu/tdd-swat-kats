import { render, screen } from '@testing-library/react';
import Card from '../Card';
import Validator from 'validator';
import userEvent from '@testing-library/user-event';


describe('Card test suite', () => {

    const cardProps = {
        name: 'Sydney',
        phone: '1111',
        email: 'test@gmail.com',
        image: {url:'https://upload.wikimedia.org/wikipedia/en/f/fb/SwatKatsseason2.jpg', alt:'sk-logo'},
        isFavoured: false
    }

    test('cat should have a name', () => {
        render(<Card {...cardProps}/>);

        expect(screen.getByRole('heading', {
            name: cardProps.name
        })).toBeInTheDocument();
    });

    test('cat should have phone', () => {
        render(<Card {...cardProps}/>);

        expect(screen.getByText(cardProps.phone)).toBeInTheDocument();
    });

    test('cat should have email', () => {
        render(<Card {...cardProps}/>);

        expect(screen.getByText(cardProps.email)).toBeInTheDocument();
    });

    test('cat should have image', () => {
        render(<Card {...cardProps}/>);

        const image = screen.getByAltText(cardProps.image.alt);

        expect(image.src).toBe(cardProps.image.url);
    });


    test('card should have empty heart', () => {
        render(<Card {...cardProps}/>);
        
        expect(screen.getByAltText(/empty heart/i)).toBeInTheDocument();
    });
    
    test('card should have filled heart', () => {
        render(<Card {...cardProps} isFavoured={true}/>);
        
        expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
    });
    
    test('cars should toggle between hearts', () => {
        render(<Card {...cardProps}/>);
        
        userEvent.click(screen.getByRole('button'));
        
        expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
        
        userEvent.click(screen.getByRole('button'));
        
        expect(screen.getByAltText(/empty heart/i)).toBeInTheDocument();
    });
    




    
});