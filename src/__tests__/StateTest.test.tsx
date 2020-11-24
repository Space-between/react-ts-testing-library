import React from "react";
import { fireEvent, render } from "@testing-library/react";
import StateTest from "../StateTest";

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
    const container = render(<StateTest />);
    const button = container.getByRole("button");
    console.log("gagag", button);

    fireEvent.click(button);
    // expect(container.getByRole("true")).toBe(true);

    // console.log("length", stateless.children.length);
    // console.log("button select", stateless.children.item(1));
    // console.log("button attr", stateless.children.item(1)?.getAttributeNames());
    // const button = stateless.getElementsByTagName("button");
  });
});
