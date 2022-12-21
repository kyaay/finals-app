import { fireEvent, render, screen } from '@testing-library/react';
import ProductList from './ProductList';

describe("Check if there is a product list", () => {

    it("has a buy now button", () => {
		render(<ProductList />); 
		const btn = screen.getByRole('btn Buy')
		expect(btn).toBeInTheDocument();
	});

    // it("has an add to cart button", () => {
    //   const add_cart = screen.getByTestId("add-to-cart");
    //   expect(add_cart).toBeInTheDocument();
    // });
});