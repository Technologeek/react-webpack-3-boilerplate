import React from 'react'
import renderer from 'react-test-renderer'
import { NavBar } from './components/Navbar/NavBar'
import { MemoryRouter } from 'react-router'


describe('Navbar Component renders nav correctly', () => {
    it('renders nav elements correctly', () => {
        const rendered = renderer.create(
            <MemoryRouter>
			<NavBar/>
			</MemoryRouter>
        ).toJSON()
        expect(rendered).toMatchSnapshot()
    })
})