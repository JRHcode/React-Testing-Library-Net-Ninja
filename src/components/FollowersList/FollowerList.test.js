import { render, screen } from '@testing-library/react';
import FollwersList from './FollowersList'
import { BrowserRouter } from 'react-router-dom';


const MockFollowersList = () => {
    return (
    <BrowserRouter>
        <FollwersList />
    </BrowserRouter>
    )
    
}

describe("Followers List", () => {

    beforeEach(() => {
        console.log("Running before each")
    })

    beforeAll(()=> {
        console.log("Running once before all")
    })

    afterEach(() => {
        console.log("Running after each")
    })

    afterAll(() => {
        console.log("Running once after all")
    })

    it('should render follower items', async () => {
        render(<MockFollowersList />);
        const followerDivElement = screen.findByTestId("follower-item-0");
        screen.debug()
        expect(followerDivElement).toBeInTheDocument();
      });

    it('should render follower items', async () => {
        render(<MockFollowersList />);
        const followerDivElement = screen.findByTestId("follower-item-0");
        screen.debug()
        expect(followerDivElement).toBeInTheDocument();
      });

    it('should render multiple follower items', async () => {
        render(<MockFollowersList />);
        const followerDivElement = await screen.findAllByTestId(/follower-item/i);
        expect(followerDivElement.length).toBe(5);
      });


})