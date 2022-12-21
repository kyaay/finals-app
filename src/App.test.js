import { waitFor, render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Login from './login';
// import axios from "axios";

// jest.mock("axios");

// const mockToken = "QpwL5tke4Pnpja7X4";

// const validUser = {
//   'email': 'eve.holt@reqres.in',
//   'password': 'cityslicka'
// }

describe("Check if there is a nav bar", () => {
    it("has a logo", () => {
      render(<Navbar />);
      const displayLogo = screen.getByTestId("logo");
      () => expect(displayLogo).toBeInTheDocument();

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
      const home = screen.getByTestId('home').closest('i').closest('a');
      expect(home).toBeInTheDocument();
    });

    it("has a contact us button", () => {
      render(<Navbar />);
      const contact_us = screen.getByTestId('contact').closest('i').closest('a');
      expect(contact_us).toBeInTheDocument();
    });

    // it("has a profile button", () => {
    //   render(<Navbar />);
    //   const profile = screen.getByTestId('profile').closest('i').closest('a');
    //   expect(profile).toBeInTheDocument();
    // });

    // it("has an add to card", () => {
    //   render(<Navbar />);
    //   const cart = screen.getByTestId('cart').closest('i').closest('a');
    //   expect(cart).toBeInTheDocument();
    // });

});

describe("shows the list of products", () => {
    it("container of all the products", () => {
        render(<ProductList />);
        const container = screen.getByTestId("product-list");
        expect(container).toBeInTheDocument();
    });

    it("contains picture of the product", () => {
        render(<ProductList />);
        const displayPic = screen.queryByAltText("image1");
        waitFor(() => expect(displayPic).toBeTruthy());
    });

    it("contains the product title", () => {
        render(<ProductList />);
        const title = screen.queryByTestId("prodtitle");
        waitFor(() => expect(title).toBeInTheDocument());
    });

    it("contains the price", () => {
        render(<ProductList />);
        const price = screen.queryByTestId("price");
        waitFor(() => expect(price).toBeInTheDocument());
    });
    it("contains a button", () => {
        render(<ProductList />);
        const button = screen.queryByTestId("prodbutton");
        waitFor(() => expect(button).toBeInTheDocument());
    })
});

describe("Login Page", () => {
    it("has an input for email", () => {
        render(<Login />);
        const email = screen.getByTestId("email");
        expect(email).toBeInTheDocument();
    });
    it("has an input for password", () => {
        render(<Login />);
        const password = screen.getByTestId("password");
        expect(password).toBeInTheDocument();
    });
    it("has a submit button", () => {
        render(<Login />);
        const btn = screen.getByTestId("sbutton");
        expect(btn).toBeInTheDocument();
    });
});

// describe("Checks if the user is valid", () => {
//     it("returns a token", async () => {
//         axios.post.mockResolvedValue(mockToken);
//     })
//     it("user is valid", async () => {
//         axios.post.mockResolvedValueOnce(validUser);
//     })
// });