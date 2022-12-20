import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe("Check if there is a nav bar", () => {
    it("has a logo", () => {
      render(<Navbar />);
      const displayLogo = screen.getByTestId("logo");
      expect(displayLogo).toBeInTheDocument();

      // if logo is an image
      // const displayLogo = document.querySelector("img");
      // expect(displayLogo.src).toContain("logo");
    });

    //this test cannot search yet, only input
    it("has a search bar", () => {
      render(<Navbar />);
      const search = screen.getByTestId("inputBox");
      expect(search).toBeInTheDocument();
    });

    it("has a home button", () => {
      render(<Navbar />);
      //const home = screen.queryAllByTestId('home');
      const home = screen.getByTestId('home').closest('i').closest('a');
      expect(home).toBeInTheDocument();
    });

    it("has a contact us button", () => {
      render(<Navbar />);
      const contact_us = screen.getByTestId('contact').closest('i').closest('a');
      expect(contact_us).toBeInTheDocument();
    });

    it("has a profile button", () => {
      render(<Navbar />);
      const profile = screen.getByTestId('profile').closest('i').closest('a');
      expect(profile).toBeInTheDocument();
    });

    it("has an add to card", () => {
      render(<Navbar />);
      const cart = screen.getByTestId('cart').closest('i').closest('a');
      expect(cart).toBeInTheDocument();
    });

});