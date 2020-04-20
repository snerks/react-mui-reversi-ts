import { GameCellIsWhiteStatus } from "../types/CustomTypes";

// https://stackoverflow.com/questions/40166357/python-reversi-othello-ai-working-under-1-second
const boardCellScores = [
  99, -8, 8, 6, 6, 8, -8, 99,
  -8, -24, -4, -3, -3, -4, -24, -8,
  8, -4, 7, 4, 4, 7, -4, 8,
  6, -3, 4, 0, 0, 4, -3, 6,
  6, -3, 4, 0, 0, 4, -3, 6,
  8, -4, 7, 4, 4, 7, -4, 8,
  -8, -24, -4, -3, -3, -4, -24, -8,
  99, -8, 8, 6, 6, 8, -8, 99
];

const getHeuristicValue = (
  boardState: GameCellIsWhiteStatus[],
  currentPlayerIsWhite: boolean): number => {

  const currentPlayerCellIndices = boardState.map((item, index) => {
    if (item === undefined) {
      return -1;
    }

    const isCurrentPlayerCell = (item === currentPlayerIsWhite);

    if (!isCurrentPlayerCell) {
      return index;
    }

    return -1;
  });

  const currentPlayerPopulatedCellIndices = currentPlayerCellIndices.filter(itemIndex => itemIndex > -1);

  const reducer = (accumulator: number, currentValue: number): number => {
    return accumulator + boardCellScores[currentValue];
  }

  const result = currentPlayerPopulatedCellIndices.reduce(reducer, 0);

  return result;
}

// https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning
export const alphabeta = (
  boardState: GameCellIsWhiteStatus[],
  depth: number,
  alpha: number,
  beta: number,
  currentPlayerIsWhite: boolean): number => {

  const validCellIndices = getValidCellIndices(boardState, currentPlayerIsWhite);
  const haveNoValidMoves = validCellIndices.length === 0;

  if (depth === 0 || haveNoValidMoves) {
    return getHeuristicValue(boardState, currentPlayerIsWhite);
  }

  let heuristicValue = 0;

  if (currentPlayerIsWhite) {
    heuristicValue = -Infinity;

    for (let validCellIndex of validCellIndices) {
      const nextBoardState = getNextBoardState(boardState, currentPlayerIsWhite, validCellIndex);
      heuristicValue = getHeuristicValue(boardState, currentPlayerIsWhite);

      heuristicValue =
        Math.max(
          heuristicValue,
          alphabeta(nextBoardState, depth - 1, alpha, beta, false));

      const nextAlpha = Math.max(alpha, heuristicValue);

      if (nextAlpha >= beta) {
        break; // (* β cut - off *)
      }
    }

    return heuristicValue;
  } else {
    heuristicValue = Infinity;

    // for each child of node do
    //   value:= min(value, alphabeta(child, depth − 1, alpha, beta, TRUE))
    //       beta := min(beta, value)
    // if alpha ≥ beta then
    // break (* alpha cut - off *)
    // return value

    for (let validCellIndex of validCellIndices) {
      const nextBoardState = getNextBoardState(boardState, currentPlayerIsWhite, validCellIndex);
      heuristicValue = getHeuristicValue(boardState, currentPlayerIsWhite);

      heuristicValue =
        Math.min(
          heuristicValue,
          alphabeta(nextBoardState, depth - 1, alpha, beta, true));

      const nextBeta = Math.min(beta, heuristicValue);

      if (alpha >= nextBeta) {
        break; // (* alpha cut - off *)
      }
    }

    return heuristicValue;
  }
}

export const getNextBoardState = (
  boardState: GameCellIsWhiteStatus[],
  currentPlayerIsWhite: boolean,
  boardPlacedCellIndex: number
): GameCellIsWhiteStatus[] => {

  // console.log("getNextBoardState : Start");
  // console.log("getNextBoardState : boardState", boardState);
  // console.log("getNextBoardState : currentPlayerIsWhite", currentPlayerIsWhite);
  // console.log("getNextBoardState : boardPlacedCellIndex", boardPlacedCellIndex);

  const capturedCellIndices =
    getCapturedCellIndices(boardState, currentPlayerIsWhite, boardPlacedCellIndex);

  const nextBoard: GameCellIsWhiteStatus[] = [];

  for (let i = 0; i < boardState.length; i++) {
    if (i === boardPlacedCellIndex) {
      nextBoard.push(currentPlayerIsWhite);
    } else {
      const currentGameCellIsWhiteStatus = boardState[i];

      if (capturedCellIndices.indexOf(i) > -1) {
        nextBoard.push(currentPlayerIsWhite);
      } else {
        nextBoard.push(currentGameCellIsWhiteStatus);
      }
    }
  }

  // console.log("handleCellClick : End : boardPlacedCellIndex", boardPlacedCellIndex);

  return nextBoard;
}

const cellIndexRankMap = new Map<number, number>();

// Corner
cellIndexRankMap.set(0, 6);
cellIndexRankMap.set(7, 6);
cellIndexRankMap.set(56, 6);
cellIndexRankMap.set(63, 6);

// Inner Edges
cellIndexRankMap.set(2, 5);
cellIndexRankMap.set(3, 5);
cellIndexRankMap.set(4, 5);
cellIndexRankMap.set(5, 5);

cellIndexRankMap.set(16, 5);
cellIndexRankMap.set(24, 5);
cellIndexRankMap.set(32, 5);
cellIndexRankMap.set(40, 5);

cellIndexRankMap.set(23, 5);
cellIndexRankMap.set(31, 5);
cellIndexRankMap.set(39, 5);
cellIndexRankMap.set(47, 5);

cellIndexRankMap.set(57, 5);
cellIndexRankMap.set(58, 5);
cellIndexRankMap.set(59, 5);
cellIndexRankMap.set(60, 5);

// Inner corners
cellIndexRankMap.set(18, 4);
cellIndexRankMap.set(21, 4);
cellIndexRankMap.set(42, 4);
cellIndexRankMap.set(45, 4);

// Others
// Rank === 3

// C Cells
cellIndexRankMap.set(1, 2);
cellIndexRankMap.set(6, 2);
cellIndexRankMap.set(8, 2);
cellIndexRankMap.set(15, 2);

cellIndexRankMap.set(48, 2);
cellIndexRankMap.set(55, 2);
cellIndexRankMap.set(57, 2);
cellIndexRankMap.set(62, 2);

// X Cells
cellIndexRankMap.set(9, 1);
cellIndexRankMap.set(14, 1);
cellIndexRankMap.set(49, 1);
cellIndexRankMap.set(54, 1);

export interface CellRankAndIndex {
  index: number;
  rank: number;
}

export const getCellRank = (cellIndex: number): CellRankAndIndex => {
  if (cellIndexRankMap.has(cellIndex)) {
    const rank = cellIndexRankMap.get(cellIndex);

    if (rank === undefined) {
      return {
        index: cellIndex,
        rank: 3
      };
    }

    return {
      index: cellIndex,
      rank
    };
  }

  return {
    index: cellIndex,
    rank: 3
  };
}

export interface CellStatusAndIndex {
  index: number;
  status: GameCellIsWhiteStatus;
}

export interface CellLine {
  items: CellStatusAndIndex[];
}

interface RowColumnIndices {
  rowIndex: number;
  columnIndex: number;
}

export const getRowColumnIndicesFromCellIndex = (
  cellIndex: number
): RowColumnIndices => {
  if (!Number.isInteger(cellIndex)) {
    throw new Error("cellIndex must be a whole number");
  }

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

export const getBoardCellIndex = (rowIndex: number, columnIndex: number): number => {
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

export const getAdjacentCellLines = (
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

export const getValidCellIndices = (boardState: GameCellIsWhiteStatus[], currentPlayerIsWhite: boolean): number[] => {

  const cellStatusAndIndexItems = boardState.map(
    (gameCellIsWhiteStatus: GameCellIsWhiteStatus, index: number): CellStatusAndIndex => {
      const isEmptyCell = gameCellIsWhiteStatus === undefined;

      if (isEmptyCell) {
        return {
          status: gameCellIsWhiteStatus,
          index
        };
      }

      return {
        status: gameCellIsWhiteStatus,
        index: -1
      };
    });

  const emptyCellStatusAndIndexItems = cellStatusAndIndexItems.filter(emptyCell => emptyCell.index > -1);

  const emptyCellsWithAdjacentOpponentCell: CellStatusAndIndex[] = [];

  for (let emptyCellStatusAndIndexItem of emptyCellStatusAndIndexItems) {
    const column = emptyCellStatusAndIndexItem.index % 8;
    const row = (emptyCellStatusAndIndexItem.index - column) / 8;

    const adjacentCellLines = getAdjacentCellLines(boardState, row, column);

    for (let adjacentCellLine of adjacentCellLines) {
      if (adjacentCellLine.items.length) {

        let adjacentOpponentCellCount = 0;

        for (let i = 0; i < adjacentCellLine.items.length; i++) {
          const currentAdjacentCellStatusAndIndex = adjacentCellLine.items[i];

          const adjacentCellIsWhiteStatus = currentAdjacentCellStatusAndIndex.status;
          const adjacentCellIsPopulated = adjacentCellIsWhiteStatus !== undefined;

          if (!adjacentCellIsPopulated) {
            break;
          }

          const adjacentCellIsOpponentCell = (
            adjacentCellIsPopulated &&
              currentPlayerIsWhite ?
              !adjacentCellIsWhiteStatus : adjacentCellIsWhiteStatus
          );

          if (adjacentCellIsOpponentCell) {
            adjacentOpponentCellCount++;
          } else {
            // Is current player's cell
            if (adjacentOpponentCellCount > 0) {
              emptyCellsWithAdjacentOpponentCell.push(emptyCellStatusAndIndexItem);
            }

            break;
          }
        }
      }
    }
  }

  return emptyCellsWithAdjacentOpponentCell.map(emptyCell => emptyCell.index);
}
