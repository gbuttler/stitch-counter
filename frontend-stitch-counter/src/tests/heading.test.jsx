import { render, screen } from '@testing-library/react'
import Heading from '../components/Heading'

describe('Heading', () => {
    it('renders the Heading component', () => {
        render(<Heading />)

        // screen.debug(); // prints out the jsx in the App component onto the command line
    })
})