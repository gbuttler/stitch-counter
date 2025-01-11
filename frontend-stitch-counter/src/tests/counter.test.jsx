import { render, screen } from '@testing-library/react'
import Counter from '../components/Counter'

describe('Counter', () => {
    it('renders the Counter component', () => {
        render(<Counter />)

        // screen.debug(); 
    })

    it('should render three buttons with correct text inside the counter component', () => {
        render(<Counter />)

        const buttons = screen.getAllByRole('button')

        expect(buttons[0]).toHaveTextContent('+')
        expect(buttons[1]).toHaveTextContent('-')
        expect(buttons[2]).toHaveTextContent('Reset')

    })

    
    test.todo('+ button should add one to the counter')
    test.todo('- button should subtract one from the counter')
    test.todo('reset button should set counter to zero')
})

