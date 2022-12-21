import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe("this is a footer", () => {
    it('has a list of brands', () => {
        render(<Footer />);
        const list = screen.getByTestId("list-brands");
        expect(list).toBeInTheDocument();
    });
    it('has a list of supports', () => {
        render(<Footer />);
        const support = screen.getByTestId("support");
        expect(support).toBeInTheDocument();
    });
    it('has a list of accounts', () => {
        render(<Footer />);
        const account = screen.getByTestId("account");
        expect(account).toBeInTheDocument();
    });
    it('has a list of social medias', () => {
        render(<Footer />);
        const social = screen.getByTestId("social");
        expect(social).toBeInTheDocument();
    });
    
});