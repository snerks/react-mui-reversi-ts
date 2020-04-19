import React, {
    useState,
    useEffect
} from "react";
import {
    GridList,
    GridListTile,
    makeStyles,
    createStyles,
    Grid,
    BottomNavigation,
    BottomNavigationAction,
    Badge
} from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import RestoreIcon from '@material-ui/icons/Restore';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import { GameCellIsWhiteStatus } from "../types/CustomTypes";
import GameCell from "./GameCell";
import GameFinishedSnackbar from "./GameFinishedSnackBar";

const useStyles = makeStyles((theme) => {

    const bgColor =
        theme.palette.type === "light" ?
            theme.palette.primary.main :
            undefined;

    return createStyles({
        root: {
            margin: "15px 0"
        },
        cell: {
            display: "flex",
            justifyContent: "center",
            backgroundColor: "green",
            height: "100%",
            alignItems: "center"
        },
        token: {
            // padding: theme.spacing(1),
            [theme.breakpoints.up('xs')]: {
                fontSize: 30,
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: 30,
            },
            [theme.breakpoints.up('md')]: {
                fontSize: 40,
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: 60,
            }
        },
        currentCountContainer: {
            padding: "20px 0 10px 0",
            backgroundColor: bgColor
        }
    });
}
);

export const initialGameBoard: GameCellIsWhiteStatus[] = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, true, false, undefined, undefined, undefined,
    undefined, undefined, undefined, false, true, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
];

interface CellStatusAndIndex {
    status: GameCellIsWhiteStatus;
    index: number;
}

interface CellLine {
    items: CellStatusAndIndex[];
}

interface GameBoardListProps {
    initialBoard: GameCellIsWhiteStatus[];
}

const GameBoardList: React.FC<GameBoardListProps> = ({ initialBoard }) => {
    const classes = useStyles();

    const [cellNumbers] = useState(Array.from(initialBoard).map((e, i) => i));
    const [boardState, setBoardState] = useState(initialBoard);
    const [currentPlayerIsWhite, setCurrentPlayerIsWhite] = useState(false);
    const [passCount, setPassCount] = useState(0);

    console.log("currentPlayerIsWhite", currentPlayerIsWhite);

    useEffect(() => {
        console.log("useEffect : currentPlayerIsWhite : ", currentPlayerIsWhite);

        // Computer plays as white
        if (currentPlayerIsWhite) {
            selectRandomValidCell();
            return;
        }

    }, [currentPlayerIsWhite]);

    const getCapturedCellIndices = (currentPlayerIsWhite: boolean, boardCellIndex: number): number[] => {
        let result: number[] = [];

        const column = boardCellIndex % 8;
        const row = (boardCellIndex - column) / 8;

        const adjacentCellLines = getAdjacentCellLines(row, column);

        for (let adjacentCellLine of adjacentCellLines) {
            if (adjacentCellLine.items.length) {

                let adjacentOpponentCellCount = 0;
                const adjacentOppentCellIndices: number[] = [];

                for (let i = 0; i < adjacentCellLine.items.length; i++) {
                    let currentAdjacentCellStatusAndIndex = adjacentCellLine.items[i];

                    let adjacentCellIsWhiteStatus = currentAdjacentCellStatusAndIndex.status;
                    let adjacentCellIsPopulated = adjacentCellIsWhiteStatus !== undefined;

                    if (!adjacentCellIsPopulated) {
                        break;
                    }

                    let adjacentCellIsOpponentCell = (
                        adjacentCellIsPopulated &&
                            currentPlayerIsWhite ?
                            !adjacentCellIsWhiteStatus : adjacentCellIsWhiteStatus
                    );

                    if (adjacentCellIsOpponentCell) {
                        adjacentOpponentCellCount++;
                        adjacentOppentCellIndices.push(currentAdjacentCellStatusAndIndex.index);
                    } else {
                        // Is current player's cell
                        if (adjacentOpponentCellCount > 0) {
                            result = [
                                ...result,
                                ...adjacentOppentCellIndices
                            ];
                        }

                        break;
                    }
                }
            }
        }

        return result;
    }

    const getBoardCellIndex = (row: number, column: number): number => {
        return row * 8 + column;
    }

    const getAdjacentCellStatusAndIndex = (
        row: number,
        column: number,
        rowOffest: number,
        columnOffset: number
    ): CellStatusAndIndex | null => {

        const candidateCellLineItemRowIndex = row + rowOffest;
        const candidateCellLineItemColumnIndex = column + columnOffset;

        const candidateCellLineItemRowIndexIsInRange =
            candidateCellLineItemRowIndex > -1 &&
            candidateCellLineItemRowIndex < 8;

        const candidateCellLineItemColumnIndexIsInRange =
            candidateCellLineItemColumnIndex > -1 &&
            candidateCellLineItemColumnIndex < 8;

        const candidateCellLineItemCoordsInRange =
            candidateCellLineItemRowIndexIsInRange &&
            candidateCellLineItemColumnIndexIsInRange;

        if (!candidateCellLineItemCoordsInRange) {
            return null;
        }

        const candidateCellLineItemIndex =
            getBoardCellIndex(candidateCellLineItemRowIndex, candidateCellLineItemColumnIndex);

        const candidateCellLineItemIsWhiteStatus = boardState[candidateCellLineItemIndex];

        return {
            status: candidateCellLineItemIsWhiteStatus,
            index: candidateCellLineItemIndex
        };
    }

    const getAdjacentCellLines = (row: number, column: number): CellLine[] => {

        const result: CellLine[] = [];

        // start at 12 o'clock
        result.push(getAdjacentCellLine(row, column, -1, 0));
        result.push(getAdjacentCellLine(row, column, -1, 1));
        result.push(getAdjacentCellLine(row, column, 0, 1));
        result.push(getAdjacentCellLine(row, column, 1, 1));
        result.push(getAdjacentCellLine(row, column, 1, 0));
        result.push(getAdjacentCellLine(row, column, 1, -1));
        result.push(getAdjacentCellLine(row, column, 0, -1));
        result.push(getAdjacentCellLine(row, column, -1, -1));

        return result;
    }

    const getAdjacentCellLine = (
        row: number,
        column: number,
        rowOffest: number,
        columnOffset: number): CellLine => {

        const result: CellLine = {
            items: []
        };

        let currentRowIndex = row;
        let currentColumnIndex = column;

        let adjacentCellStatusAndIndex: CellStatusAndIndex | null;

        do {
            adjacentCellStatusAndIndex =
                getAdjacentCellStatusAndIndex(
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
    }

    const getValidCellIndices = (board: GameCellIsWhiteStatus[], currentPlayerIsWhite: boolean): number[] => {

        const cellStatusAndIndexItems = board.map(
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

            const adjacentCellLines = getAdjacentCellLines(row, column);

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

    const handleCellClick = (row: number, column: number) => {
        console.log("handleCellClick : Start", row, column);

        const boardCellIndex = getBoardCellIndex(row, column);

        console.log("handleCellClick : currentPlayerIsWhite", currentPlayerIsWhite);

        const capturedCellIndices =
            getCapturedCellIndices(currentPlayerIsWhite, boardCellIndex);

        const nextBoard: GameCellIsWhiteStatus[] = [];

        for (let i = 0; i < boardState.length; i++) {
            if (i === boardCellIndex) {
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

        setBoardState(nextBoard);
        setCurrentPlayerIsWhite(!currentPlayerIsWhite);
        setPassCount(0);

        console.log("handleCellClick : End", row, column);
    }

    const restart = () => {
        setBoardState(initialGameBoard);
        setCurrentPlayerIsWhite(false);
        setPassCount(0);
    }

    const pass = () => {
        setCurrentPlayerIsWhite(!currentPlayerIsWhite);
        setPassCount(passCount + 1);
    }

    const getBoardCellCoords = (index: number): { row: number, column: number } => {
        const column = index % 8;
        const row = (index - column) / 8;

        return { row, column };
    }

    const selectRandomValidCell = () => {
        const validCells = getValidCellIndices(boardState, currentPlayerIsWhite);
        if (validCells.length === 0) {
            pass();
            return;
        }

        const randomValidCellIndex = validCells[0];

        const { row, column } = getBoardCellCoords(randomValidCellIndex);

        handleCellClick(row, column);
    }

    const emptyCells = boardState.filter(item => item === undefined);
    const whitePlayerCells = boardState.filter(item => item !== undefined && item);
    const blackPlayerCells = boardState.filter(item => item !== undefined && !item);

    const isGameFinished = (emptyCells.length === 0) || (passCount > 1);

    let winnerName: string = '';

    if (isGameFinished) {
        const whitePlayerCellCount = whitePlayerCells.length;
        const blackPlayerCellCount = blackPlayerCells.length;

        if (whitePlayerCellCount === blackPlayerCellCount) {
            winnerName = 'Neither: It was a Draw.';
        } else {
            winnerName = whitePlayerCellCount > blackPlayerCellCount ? 'White' : 'Black';
        }
    }

    const validCells = getValidCellIndices(boardState, currentPlayerIsWhite);
    console.log("currentPlayerIsWhite", currentPlayerIsWhite);
    console.log("validCells", validCells);

    const currentPlayerContent = (
        <div className={classes.currentCountContainer} /* role="alert" */ /* style={{ background: "green", padding: 15 }} */>
            <Grid item container alignItems="center" alignContent="space-between">
                <Grid item xs={3} />
                <Grid item xs={3} container>
                    <Grid item container justify="center">
                        <Badge color="secondary" showZero overlap="circle" badgeContent={whitePlayerCells.length}>
                            <FiberManualRecordIcon className={classes.token} style={{ color: "white" }} />
                        </Badge>
                    </Grid>
                </Grid>
                <Grid item xs={3} container>
                    <Grid item container justify="center">
                        <Badge color="secondary" showZero overlap="circle" badgeContent={blackPlayerCells.length}>
                            <FiberManualRecordIcon className={classes.token} style={{ color: "black" }} />
                        </Badge>
                    </Grid>
                </Grid>
                <Grid item xs={3} />
            </Grid>

            {
                isGameFinished &&
                <Grid item container alignItems="center" alignContent="space-between">
                    <Grid item xs={1} sm={2} />
                    <Grid item xs={10} sm={8} container>
                        <Grid container justify="center">
                            <div style={{ fontSize: '14px' }}>
                                <span>Winner is {winnerName}!</span>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} sm={2} />
                </Grid>
            }
            {
                isGameFinished && passCount > 1 &&
                <Grid item container>
                    <Grid item xs={1} sm={2} />
                    <Grid item xs={10} sm={8} alignItems="center" alignContent="space-between" container>
                        <Grid container justify="center">
                            <div style={{ fontSize: '14px' }}>
                                <span>Both players have passed - game finished early</span>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} sm={2} />
                </Grid>
            }
        </div>
    );

    return (
        <div className={classes.root}>

            <GridList cols={8} cellHeight="auto">
                {cellNumbers.map((cellNumber) => {
                    const rowNumber = Math.floor(cellNumber / 8);
                    const rowCellNumber = cellNumber % 8

                    const isValidCell = validCells.indexOf(cellNumber) > -1;

                    const noOp = () => { };
                    const handleClickFunction = (row: number, column: number) => handleCellClick(row, column);

                    return (
                        <GridListTile key={cellNumber} cols={1}>
                            <div className={classes.cell}>
                                {/* <FiberManualRecordIcon className={classes.token} style={{ color: cellColor }} /> */}
                                <GameCell
                                    row={rowNumber}
                                    column={rowCellNumber}
                                    isWhite={boardState[cellNumber]}
                                    handleClick={isValidCell ? handleClickFunction : noOp}
                                    isValid={isValidCell}
                                    currentPlayerIsWhite={currentPlayerIsWhite}
                                />
                            </div>
                        </GridListTile>
                    );
                })}
            </GridList>

            {/* <h1>currentPlayerIsWhite = [{currentPlayerIsWhite ? "Yes" : "No"}]</h1> */}

            <br />
            {currentPlayerContent}

            <BottomNavigation
                value={null}
                onChange={(event, newValue) => {
                    // setValue(newValue);
                    console.log(newValue);

                    if (newValue === 0) {
                        restart();
                        return;
                    }

                    if (newValue === 1) {
                        selectRandomValidCell();
                        return;
                    }

                    if (newValue === 2) {
                        pass();
                        return;
                    }
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Restart" icon={<RestoreIcon />} />

                {
                    !isGameFinished &&
                    validCells.length > 0 &&
                    <BottomNavigationAction
                        label="Random"
                        icon={<ShuffleIcon />}
                    />
                }

                {
                    !isGameFinished &&
                    <BottomNavigationAction
                        label={validCells.length === 0 ? "Must Pass!" : "Pass"}
                        icon={<SentimentVeryDissatisfiedIcon />} />
                }
            </BottomNavigation>

            {
                isGameFinished &&
                <GameFinishedSnackbar message={`Winner is ${winnerName}!`} />
            }
        </div>
    );
}

export default GameBoardList;