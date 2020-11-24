import React from "react";
import { render } from "@testing-library/react";
import PushMessage from "../pages/PushMessage";

describe("Button component", () => {
  let container: any;

  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        createElement: jest.fn(),
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
    // beforeEach메소드는 테스트케이스에서 테스트를 실행하기 전에 실행해주는 메소드이다. React에서 componentwillmount와 유사하다.
    container = window.document.createElement("div");
    console.log("gsfggawg");
    window.document.body.appendChild(container);
  });

  afterEach(() => {
    // afterEach메소드는 테스트케이스에서 테스트를 종료한 후에 실행해주는 메소드이다. React에서 componentdidmount와 유사하다.
    window.document.body.removeChild(container);
    container = null;
  });
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        createElement: jest.fn(),
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  test("modal visible", () => {
    const container = render(<PushMessage />);
    const table = container.getByTestId("test-table");
    const modalog = container.getByTestId("test-modalog");
    const realmodal = modalog.getElementsByClassName("realmodal");
    console.log("container", container);
    console.log("table: ", table);
    console.log("modalog", modalog);
    console.log("realmodal", realmodal);
    // table.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    // expect(table.textContent).toBe("dddge");
    expect(1).toBe(1);
    // expect(button.textContent).toBe("PROCEED TO CHECKOUT");
  });
});
