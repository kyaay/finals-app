import { render, screen } from '@testing-library/react';
import App from './App';

// import { App } from "./Utils";

describe("Check if there is a nav bar", () => {
    it("has a logo", () => {
      render(<App />);
      const displayLogo = document.querySelector("img");
      expect(displayLogo.src).toContain("logo");
    });

    //this test cannot search yet, only input
    // it("has a search bar", () => {
    //   render(<App />);
    //   const search = screen.getByLabelText("search");
    //   expect(search).toBeInTheDocument();
    // });

    // it("has a profile button", () => {
    //   const profile_btn = screen.getByTestId("profile-btn");
    //   expect(profile_btn).toBeInTheDocument();
    // });

    // it("has an add to cart button", () => {
    //   const add_cart = screen.getByTestId("add-to-cart");
    //   expect(add_cart).toBeInTheDocument();
    // });
});