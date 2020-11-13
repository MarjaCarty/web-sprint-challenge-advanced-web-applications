import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

import { fetchColors as mockFetchColors } from "../api/fetchColors";
jest.mock("../api/fetchColors");

test("Fetches data and renders the bubbles", async () => {
  mockFetchColors.mockResolvedValueOnce({
    data: [
      { code: { hex: "#000000" }, color: "black", id: 1 },
      { code: { hex: "#ffffff" }, color: "white", id: 2 },
    ],
  });

  render(<BubblePage />);

  await waitFor(() => {
    const colors = screen.getAllByTestId("color");
    expect(colors).toHaveLength(2);
  });
});
