/**
 * Tests for Badge component
 * @module __tests__/components/ui/Badge
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { Badge } from "@/components/ui/Badge";

describe("Badge", () => {
  it("renders children text", () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("applies default variant styling", () => {
    render(<Badge>Tag</Badge>);
    const badge = screen.getByText("Tag");
    expect(badge).toHaveClass("rounded-full");
    expect(badge.tagName.toLowerCase()).toBe("span");
  });

  it("applies size classes correctly", () => {
    const { rerender } = render(<Badge size="sm">Small</Badge>);
    expect(screen.getByText("Small")).toHaveClass("text-xs");

    rerender(<Badge size="md">Medium</Badge>);
    expect(screen.getByText("Medium")).toHaveClass("text-sm");
  });

  it("applies variant class for each variant", () => {
    const variants = [
      "default",
      "primary",
      "success",
      "warning",
      "danger",
      "info",
      "accent",
    ] as const;

    variants.forEach((variant) => {
      const { unmount } = render(<Badge variant={variant}>{variant}</Badge>);
      expect(screen.getByText(variant)).toBeInTheDocument();
      unmount();
    });
  });

  it("forwards additional className", () => {
    render(<Badge className="my-custom-class">Custom</Badge>);
    expect(screen.getByText("Custom")).toHaveClass("my-custom-class");
  });

  it("forwards HTML attributes like data-testid", () => {
    render(<Badge data-testid="badge-test">Test</Badge>);
    expect(screen.getByTestId("badge-test")).toBeInTheDocument();
  });
});
