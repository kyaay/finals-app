import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe("Check if there is a nav bar", () => {
    // it("has a logo", () => {
    //   render(<Navbar />);
    //   const displayLogo = document.querySelector("img");
    //   expect(displayLogo.src).toContain("logo");
    // });

    //this test cannot search yet, only input
    it("has a search bar", () => {
      render(<Navbar />);
      const search = screen.getByTestId("inputdiv");
      expect(search).toBeInTheDocument();
    });

    it("has a profile button", () => {
        render(<Navbar />);
      const homeLink = screen.getByRole("link");
      expect(screen.getByRole("link")).toBeInTheDocument();
    //   const profile_btn = screen.getByTestId("links");
    //   expect(profile_btn).toBeInTheDocument();
    });

    // it("has an add to cart button", () => {
    //   const add_cart = screen.getByTestId("add-to-cart");
    //   expect(add_cart).toBeInTheDocument();
    // });
});