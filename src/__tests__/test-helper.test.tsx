import { NextUIProvider } from "@nextui-org/react";
import "@testing-library/jest-dom";
import { render, RenderOptions } from "@testing-library/react";
import React from "react";
import { SWRConfig } from "swr";
// import Home from "../pages/courses";
import "whatwg-fetch";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        dedupingInterval: 0,
        provider: () => new Map(),
        fetcher: async (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <NextUIProvider>{children}</NextUIProvider>
    </SWRConfig>
  );
};

export const customRender = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });
