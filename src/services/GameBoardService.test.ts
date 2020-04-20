import React from "react";
import { render } from "@testing-library/react";
import * as GameBoardService from "./GameBoardService";

test("with input of zero returns correct result", () => {
  const sut = GameBoardService;

  const actual = sut.getRowColumnIndicesFromCellIndex(0);

  expect(actual).not.toBeNull();
  expect(actual.rowIndex).toBe(0);
  expect(actual.columnIndex).toBe(0);
});

test("with input of 1 returns correct result", () => {
  const sut = GameBoardService;

  const actual = sut.getRowColumnIndicesFromCellIndex(1);

  expect(actual).not.toBeNull();
  expect(actual.rowIndex).toBe(0);
  expect(actual.columnIndex).toBe(1);
});

test("with input of 63 returns correct result", () => {
  const sut = GameBoardService;

  const actual = sut.getRowColumnIndicesFromCellIndex(63);

  expect(actual).not.toBeNull();
  expect(actual.rowIndex).toBe(7);
  expect(actual.columnIndex).toBe(7);
});

test("Test description", () => {
  const sut = GameBoardService;

  const action = () => sut.getRowColumnIndicesFromCellIndex(-1);

  expect(action).toThrow(Error);
});
