import { render } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Component", () => {
  it("should be able to render the Counter component", () => {
    const { getByTestId } = render(<Counter></Counter>);
    expect(getByTestId("counter")).toBeInTheDocument();
  });
});