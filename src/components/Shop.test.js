// Shop.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Shop from "./Shop";

describe("Item Input", () => {
  it("stores the input of item 1 correctly", () => {
    const onChangeMock = jest.fn();
    render(<Shop onChange={onChangeMock} />);
    const input = screen.getByRole('spinbutton', {name: 'Quantity:'});
    const submitButtons = screen.getAllByText(/add to cart/i);
    const submitButton = submitButtons[0];

    userEvent.type(input, "4");

    userEvent.click(submitButton);

    expect(input).toHaveValue(4);
  });

  it("stores the input of item 2 correctly", () => {
    const onChangeMock = jest.fn();
    render(<Shop onChange={onChangeMock} />);
    const input = screen.getByRole('spinbutton', {name: 'Quantity:'});
    const submitButtons = screen.getAllByText(/add to cart/i);
    const submitButton = submitButtons[1];

    userEvent.type(input, "2");

    userEvent.click(submitButton);

    expect(input).toHaveValue(2);
  });

  it("renders shopping cart", () => {
    const onChangeMock = jest.fn();
    render(<Shop onChange={onChangeMock} />);

    const cart = screen.getByTestId('custom-element');
    expect(cart).toBeInTheDocument();
  });

});