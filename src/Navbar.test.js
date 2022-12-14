import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe("Check if there is a nav bar", () => {
    it("has a logo", () => {
      render(<Navbar />);
      const displayLogo = screen.getByTestId("logo");
      expect(displayLogo).toBeInTheDocument();

      //if logo is an image
      // const displayLogo = document.querySelector("img");
      // expect(displayLogo.src).toContain("logo");
    });

    //this test cannot search yet, only input
    it("has a search bar", () => {
      render(<Navbar />);
      const search = screen.getByTestId("inputBox");
      expect(search).toBeInTheDocument();
    });

    it("has a container of the links", () => {
      render(<Navbar />);
      const container = screen.getByTestId('links');
      expect(container).toBeInTheDocument();
    });

    it("has a home button", () => {
      render(<Navbar />);
      const home = screen.getByText('home').closest('span').closest('a');
      expect(home).toBeInTheDocument();
    });

    it("has a contact us button", () => {
      render(<Navbar />);
      const contact_us = screen.getByText('contact_page').closest('span').closest('a');
      expect(contact_us).toBeInTheDocument();
    });

    it("has a profile button", () => {
      render(<Navbar />);
      const profile = screen.getByText('account_circle').closest('span').closest('a');
      expect(profile).toBeInTheDocument();
    });

    it("has an add to card", () => {
      render(<Navbar />);
      const cart = screen.getByText('shopping_cart').closest('span').closest('a');
      expect(cart).toBeInTheDocument();
    });

    // it("has an add to cart button", () => {
    //   const add_cart = screen.getByTestId("add-to-cart");
    //   expect(add_cart).toBeInTheDocument();
    // });
});