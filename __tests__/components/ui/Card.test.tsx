/**
 * Tests for Card component
 * @module __tests__/components/ui/Card
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "@/components/ui/Card";

describe("Card", () => {
  it("renders children content", () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("renders as a div element", () => {
    render(<Card data-testid="card">Content</Card>);
    expect(screen.getByTestId("card").tagName.toLowerCase()).toBe("div");
  });

  it("applies default variant styles", () => {
    render(<Card data-testid="card">Default</Card>);
    const card = screen.getByTestId("card");
    expect(card).toHaveClass("bg-card");
    expect(card).toHaveClass("shadow-sm");
  });

  it("applies elevated variant styles", () => {
    render(
      <Card variant="elevated" data-testid="card">
        Elevated
      </Card>,
    );
    expect(screen.getByTestId("card")).toHaveClass("shadow-lg");
  });

  it("applies outlined variant styles", () => {
    render(
      <Card variant="outlined" data-testid="card">
        Outlined
      </Card>,
    );
    expect(screen.getByTestId("card")).toHaveClass("border-2");
  });

  it("applies flat variant styles", () => {
    render(
      <Card variant="flat" data-testid="card">
        Flat
      </Card>,
    );
    expect(screen.getByTestId("card")).toHaveClass("bg-background-secondary");
  });

  it("applies glass variant styles", () => {
    render(
      <Card variant="glass" data-testid="card">
        Glass
      </Card>,
    );
    expect(screen.getByTestId("card")).toHaveClass("backdrop-blur-xl");
  });

  it("adds hover classes when hoverable is true", () => {
    render(
      <Card hoverable data-testid="card">
        Hoverable
      </Card>,
    );
    expect(screen.getByTestId("card")).toHaveClass("hover:shadow-xl");
  });

  it("forwards additional className", () => {
    render(
      <Card className="custom-class" data-testid="card">
        Custom
      </Card>,
    );
    expect(screen.getByTestId("card")).toHaveClass("custom-class");
  });

  it("forwards HTML attributes", () => {
    render(
      <Card role="article" aria-label="Feature card">
        Info
      </Card>,
    );
    expect(screen.getByRole("article")).toHaveAttribute(
      "aria-label",
      "Feature card",
    );
  });

  it("always applies base styles", () => {
    render(<Card data-testid="card">Base</Card>);
    const card = screen.getByTestId("card");
    expect(card).toHaveClass("rounded-lg", "p-6");
  });
});
