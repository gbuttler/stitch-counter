import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Counter from '../components/Counter'

describe('Counter', () => {

    test('renders the Counter component', () => {
        render(<Counter />)

        // screen.debug(); 
    })

    test('should render three buttons with correct text inside the counter component', () => {
        render(<Counter />)

        const buttons = screen.getAllByRole('button')

        expect(buttons[0]).toHaveTextContent('+')
        expect(buttons[1]).toHaveTextContent('-')
        expect(buttons[2]).toHaveTextContent('Reset')

    })

    test('+ button should add one to the counter', () => {
        //render the component and get the bits you need for the test
        render(<Counter />)
        const incrementButton = screen.getByRole('button', { name: '+' })
        const countDisplay = document.getElementById('count-display')

        // simulate a click
        fireEvent.click(incrementButton)

        // what you are expecting
        expect(countDisplay.textContent).toBe('1')
    })


    test('should + multiple times when clicked multiple times', () => {
        // Arrange
        render(<Counter />)
        const incrementButton = screen.getByRole('button', { name: '+' })
        const countDisplay = document.getElementById('count-display')


        // Act
        fireEvent.click(incrementButton)
        fireEvent.click(incrementButton)
        fireEvent.click(incrementButton)

        // Expect
        expect(countDisplay.textContent).toBe('3')
    })


    test('- button should subtract one from the counter', () => {
        render(<Counter/>)
        const decrementButton = screen.getByRole('button', { name: '-' })
        const countDisplay = document.getElementById('count-display')

        fireEvent.click(decrementButton)

        expect(countDisplay.textContent).toBe('-1')

    })

    test('should - multiple times when clicked multiple times', () => {
        
        render(<Counter />)
        const decrementButton = screen.getByRole('button', { name: '-' })
        const countDisplay = document.getElementById('count-display')

        fireEvent.click(decrementButton)
        fireEvent.click(decrementButton)
        fireEvent.click(decrementButton)

        
        expect(countDisplay.textContent).toBe('-3')
    })


    test('reset button should set counter to zero', () => {
        render(<Counter/>)
        const resetButton = screen.getByRole('button', { name: 'Reset' })
        const countDisplay = document.getElementById('count-display')

        fireEvent.click(resetButton)

        expect(countDisplay.textContent).toBe('0')
    })
})

