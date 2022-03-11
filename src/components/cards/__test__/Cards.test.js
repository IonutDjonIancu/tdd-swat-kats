import { render, screen } from '@testing-library/react';
import kats from '../../../mocks/Kats.json';
import Cards from '../Cards';


describe('Cards tests suite', () => {

    test('should render 3 Card components', () => {
        
        render(<Cards kats={kats}/>);
        expect(screen.getAllByRole('article').length).toBe(3);
    });

});











