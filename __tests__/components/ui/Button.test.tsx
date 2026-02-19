/**
 * Tests for Button component
 * @module __tests__/components/ui/Button
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "@/components/ui/Button";

describe("Button", () => {
  it("renders children text", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: /click me/i }),
    ).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Press</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("is disabled when loading is true", () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("shows a spinner SVG when loading", () => {
    render(<Button loading>Saving</Button>);
    const button = screen.getByRole("button");
    const svg = button.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass("animate-spin");
  });

  it("applies size classes", () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole("button")).toHaveClass("text-sm");

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole("button")).toHaveClass("text-lg");
  });

  it("applies variant classes for primary (default)", () => {
    render(<Button>Primary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-primary");
  });

  it("applies variant classes for danger", () => {
    render(<Button variant="danger">Delete</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-danger");
  });

  it("applies variant classes for outline", () => {
    render(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole("button")).toHaveClass("border-2");
  });

  it("forwards additional className", () => {
    render(<Button className="extra-class">Styled</Button>);
    expect(screen.getByRole("button")).toHaveClass("extra-class");
  });

  it("forwards native button attributes", () => {
    render(
      <Button type="submit" aria-label="Submit form">
        Go
      </Button>,
    );
    const btn = screen.getByRole("button");
    expect(btn).toHaveAttribute("type", "submit");
    expect(btn).toHaveAttribute("aria-label", "Submit form");
  });
});
