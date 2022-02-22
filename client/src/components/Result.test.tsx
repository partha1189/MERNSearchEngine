import React from "react";
import { render, screen } from "@testing-library/react";
import Result from "./Result";

test("renders Home", () => {
  render(
    <Result
      match={{
        params: undefined,
        location: undefined,
      }}
    />
  );
  //
});
