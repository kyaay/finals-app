import { render, screem } from '@testing-library/react';
import Login from './login';

describe("For logging in", () => {
    it("contains a box for the form", () => {
        render(<Login/>);
        const container = screen.getbyTestID("box");
        expect(container).toBeInTheDocument();
    })
});