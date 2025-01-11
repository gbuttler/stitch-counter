import { render, screen } from '@testing-library/react'
import Counter from '../components/Counter'

describe('Counter', () => {
    it('renders the Counter component', () => {
        render(<Counter />)

        // screen.debug(); 
    })
})