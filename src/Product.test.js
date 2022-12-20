import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';

describe("shows the list of products", () => {
    it("container of all the products", () => {
        render(<ProductList />);
        const container = screen.getByTestId("product-list");
        expect(container).toBeInTheDocument();

        
    });

    it("has a container of the picture", () => {
        render(<ProductList />);
        const imgContainer = screen.findByTestId("overlaycontainer");
        expect(imgContainer).toBeInTheDocument();
    });

    // it("contains the product image", () => {
    //     render(<ProductList />);
    //     const imgcontainer = screen.getByTestId("overlaycontainer").closest('img').closest('div');
    //     expect(imgcontainer).toBeInTheDocument();
    // });

    // it("contains picture of the product", () => {
    //     render(<ProductList />);
    //     const displayPic = screen.getAllByAltText("image1");
    //     expect(displayPic).toContain("image1");
    // })
});