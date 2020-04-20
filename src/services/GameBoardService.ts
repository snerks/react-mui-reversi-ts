import { CellStatusAndIndex, CellLine } from "../components/GameBoardList";
import { GameCellIsWhiteStatus } from "../types/CustomTypes";

interface RowColumnIndices {
  rowIndex: number;
  columnIndex: number;
}

export const getRowColumnIndicesFromCellIndex = (
  cellIndex: number
): RowColumnIndices => {
  if (cellIndex < 0) {
    throw new Error("cellIndex must be greater than or equal to zero");
  }

  if (cellIndex > 63) {
    throw new Error("cellIndex must be less than or equal to 63");
  }

  const rowIndex = Math.floor(cellIndex / 8);
  const columnIndex = cellIndex % 8;

  return {
    rowIndex: rowIndex,
    columnIndex: columnIndex,
  };
};

const getBoardCellIndex = (rowIndex: number, columnIndex: number): number => {
  if (!Number.isInteger(rowIndex)) {
    throw new Error("rowIndex must be a whole number");
  }

  if (!Number.isInteger(columnIndex)) {
    throw new Error("columnIndex must be a whole number");
  }

  if (rowIndex < 0) {
    throw new Error("rowIndex must be greater than or equal to zero");
  }

  if (rowIndex > 7) {
    throw new Error("rowIndex must be less than or equal to 7");
  }

  if (columnIndex < 0) {
    throw new Error("columnIndex must be greater than or equal to zero");
  }

  if (columnIndex > 7) {
    throw new Error("columnIndex must be less than or equal to 7");
  }

  return rowIndex * 8 + columnIndex;
};

const getAdjacentCellStatusAndIndex = (
  boardState: GameCellIsWhiteStatus[],
  rowIndex: number,
  columnIndex: number,
  rowOffest: number,
  columnOffset: number
): CellStatusAndIndex | null => {
  const candidateCellLineItemRowIndex = rowIndex + rowOffest;
  const candidateCellLineItemColumnIndex = columnIndex + columnOffset;

  const candidateCellLineItemRowIndexIsInRange =
    candidateCellLineItemRowIndex > -1 && candidateCellLineItemRowIndex < 8;

  const candidateCellLineItemColumnIndexIsInRange =
    candidateCellLineItemColumnIndex > -1 &&
    candidateCellLineItemColumnIndex < 8;

  const candidateCellLineItemCoordsInRange =
    candidateCellLineItemRowIndexIsInRange &&
    candidateCellLineItemColumnIndexIsInRange;

  if (!candidateCellLineItemCoordsInRange) {
    return null;
  }

  const candidateCellLineItemIndex = getBoardCellIndex(
    candidateCellLineItemRowIndex,
    candidateCellLineItemColumnIndex
  );

  const candidateCellLineItemIsWhiteStatus =
    boardState[candidateCellLineItemIndex];

  return {
    status: candidateCellLineItemIsWhiteStatus,
    index: candidateCellLineItemIndex,
  };
};

const getAdjacentCellLine = (
  boardState: GameCellIsWhiteStatus[],
  rowIndex: number,
  columnIndex: number,
  rowOffest: number,
  columnOffset: number
): CellLine => {
  const result: CellLine = {
    items: [],
  };

  let currentRowIndex = rowIndex;
  let currentColumnIndex = columnIndex;

  let adjacentCellStatusAndIndex: CellStatusAndIndex | null;

  do {
    adjacentCellStatusAndIndex = getAdjacentCellStatusAndIndex(
      boardState,
      currentRowIndex,
      currentColumnIndex,
      rowOffest,
      columnOffset
    );

    if (adjacentCellStatusAndIndex) {
      result.items.push(adjacentCellStatusAndIndex);

      currentRowIndex += rowOffest;
      currentColumnIndex += columnOffset;
    }
  } while (!!adjacentCellStatusAndIndex);

  return result;
};

const getAdjacentCellLines = (
  boardState: GameCellIsWhiteStatus[],
  rowIndex: number,
  columnIndex: number
): CellLine[] => {
  const results: CellLine[] = [];

  // start at 12 o'clock
  // North
  results.push(getAdjacentCellLine(boardState, rowIndex, columnIndex, -1, 0));
  // NE
  results.push(getAdjacentCellLine(boardState, rowIndex, columnIndex, -1, 1));
  // East
  results.push(getAdjacentCellLine(boardState, rowIndex, columnIndex, 0, 1));
  // SE
  results.push(getAdjacentCellLine(boardState, rowIndex, columnIndex, 1, 1));
  // South
  results.push(getAdjacentCellLine(boardState, rowIndex, columnIndex, 1, 0));
  // SW
  results.push(getAdjacentCellLine(boardState, rowIndex, columnIndex, 1, -1));
  // West
  results.push(getAdjacentCellLine(boardState, rowIndex, columnIndex, 0, -1));
  // NW
  results.push(getAdjacentCellLine(boardState, rowIndex, columnIndex, -1, -1));

  return results;
};

export const getCapturedCellIndices = (
  boardState: GameCellIsWhiteStatus[],
  currentPlayerIsWhite: boolean,
  boardCellIndex: number
): number[] => {
  let results: number[] = [];

  const columnIndex = boardCellIndex % 8;
  const rowIndex = (boardCellIndex - columnIndex) / 8;

  const adjacentCellLines = getAdjacentCellLines(
    boardState,
    rowIndex,
    columnIndex
  );

  for (let adjacentCellLine of adjacentCellLines) {
    if (adjacentCellLine.items.length) {
      let adjacentOpponentCellCount = 0;
      const adjacentOppentCellIndices: number[] = [];

      for (let i = 0; i < adjacentCellLine.items.length; i++) {
        let currentAdjacentCellStatusAndIndex = adjacentCellLine.items[i];

        let adjacentCellIsWhiteStatus =
          currentAdjacentCellStatusAndIndex.status;
        let adjacentCellIsPopulated = adjacentCellIsWhiteStatus !== undefined;

        if (!adjacentCellIsPopulated) {
          break;
        }

        let adjacentCellIsOpponentCell = currentPlayerIsWhite
          ? !adjacentCellIsWhiteStatus
          : adjacentCellIsWhiteStatus;

        if (adjacentCellIsOpponentCell) {
          adjacentOpponentCellCount++;
          adjacentOppentCellIndices.push(
            currentAdjacentCellStatusAndIndex.index
          );
        } else {
          // Is current player's cell
          // Stop iteration
          // Add captured sell indices to results
          if (adjacentOpponentCellCount > 0) {
            results = [...results, ...adjacentOppentCellIndices];
          }

          break;
        }
      }
    }
  }

  return results;
};
