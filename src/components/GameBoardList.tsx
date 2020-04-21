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
    Badge,
    CircularProgress,
    LinearProgress,
    Hidden,
    Paper
} from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import RestoreIcon from '@material-ui/icons/Restore';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import RestorePageIcon from '@material-ui/icons/RestorePage';
import UndoIcon from '@material-ui/icons/Undo';

import { GameCellIsWhiteStatus } from "../types/CustomTypes";
import GameCell from "./GameCell";
import GameFinishedSnackbar from "./GameFinishedSnackBar";
import { getCapturedCellIndices, getBoardCellIndex, getValidCellIndices, getCellRank, getNextBoardState, alphabeta, GameMove, getReplayedBoardState } from "../services/GameBoardService";

const useStyles = makeStyles((theme) => {

    const bgColor =
        theme.palette.type === "light" ?
            theme.palette.primary.main :
            undefined;

    return createStyles({
        root: {
            [theme.breakpoints.up('xs')]: {
                margin: "3px 0 0 0"
            },
            [theme.breakpoints.up('sm')]: {
                margin: "15px 0 0 0"
            },
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
            [theme.breakpoints.up('xl')]: {
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

interface GameBoardListProps {
    initialBoard: GameCellIsWhiteStatus[];
}

const GameBoardList: React.FC<GameBoardListProps> = ({ initialBoard }) => {
    const classes = useStyles();

    const [cellNumbers] = useState(Array.from(initialBoard).map((e, i) => i));
    const [boardState, setBoardState] = useState(initialBoard);
    const [currentPlayerIsWhite, setCurrentPlayerIsWhite] = useState(false);
    const [passCount, setPassCount] = useState(0);

    const [gameMoves, setGameMoves] = useState<GameMove[]>([]);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    console.log("currentPlayerIsWhite", currentPlayerIsWhite);

    // const selectComputedValidCell = () => {
    //     const validCellOrNull = getComputedValidCellIndex();
    //     if (validCellOrNull === null) {
    //         pass();
    //         return;
    //     }

    //     const { row, column } = getBoardCellCoords(validCellOrNull);

    //     handleCellClick(row, column);
    // }

    //     possible_moves = self.get_available_moves(board,self.my_color,self.opponent_color)
    // for [x, y] in possible_moves:
    //     new_board = self.make_board_copy(board)
    //     new_board[x][y] = self.my_color
    //     new_alpha = self.minmax(new_board,1,alpha,beta)
    //     if new_alpha > alpha:
    //         alpha = new_alpha
    //         best_move = [x,y]

    const selectComputedValidCell = () => {
        const validCellIndices = getValidCellIndices(boardState, currentPlayerIsWhite);
        if (validCellIndices.length === 0) {
            pass();
            return;
        }

        let alpha = -Infinity;
        const beta = Infinity;

        let validCellIndexOrNull: number | null = null;

        for (let validCellIndex of validCellIndices) {
            const nextBoardState = getNextBoardState(boardState, currentPlayerIsWhite, validCellIndex);

            // console.table(nextBoardState);

            const nextAlpha = alphabeta(nextBoardState, 2, alpha, beta, false);

            if (nextAlpha > alpha) {
                alpha = nextAlpha;

                validCellIndexOrNull = validCellIndex;
            }
        }

        if (validCellIndexOrNull === null) {
            pass();
            return;
        }

        const { row, column } = getBoardCellCoords(validCellIndexOrNull);

        handleCellClick(row, column);
    }

    useEffect(() => {
        console.log("useEffect : currentPlayerIsWhite : ", currentPlayerIsWhite);

        // Computer plays as white
        if (currentPlayerIsWhite) {
            selectComputedValidCell();
            return;
        }

    }, [currentPlayerIsWhite]);

    const handleCellClick = (row: number, column: number) => {
        console.log("handleCellClick : Start", row, column);

        const boardPlacedCellIndex = getBoardCellIndex(row, column);

        console.log("handleCellClick : boardPlacedCellIndex", boardPlacedCellIndex);

        console.log("handleCellClick : currentPlayerIsWhite", currentPlayerIsWhite);

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

        setBoardState(nextBoard);
        setCurrentPlayerIsWhite(!currentPlayerIsWhite);
        setPassCount(0);

        const nextGameMoves = [...gameMoves, { currentPlayerIsWhite, boardPlacedCellIndex }];
        setGameMoves(nextGameMoves);
        console.table(nextGameMoves);

        console.log("handleCellClick : End", row, column);
    }

    const restart = () => {
        setBoardState(initialGameBoard);
        setGameMoves([]);
        setCurrentPlayerIsWhite(false);
        setPassCount(0);
    }

    const pass = () => {
        setCurrentPlayerIsWhite(!currentPlayerIsWhite);
        setPassCount(passCount + 1);
    }

    const undoLastMove = () => {
        if (gameMoves.length === 0) {
            return;
        }

        const nextGameMoves = [...gameMoves];

        let lastGameMove: GameMove | null = null;
        let isUndoComplete = false;

        do {
            lastGameMove = nextGameMoves[nextGameMoves.length - 1];

            nextGameMoves.pop();

            if (!lastGameMove.currentPlayerIsWhite) {
                isUndoComplete = true;
            }
        } while (!isUndoComplete && nextGameMoves.length > 0)

        console.table(nextGameMoves);

        const nextBoardState = getReplayedBoardState(initialBoard, nextGameMoves);
        setBoardState(nextBoardState);
        setGameMoves(nextGameMoves);
        setCurrentPlayerIsWhite(currentPlayerIsWhite);
    }

    const getBoardCellCoords = (index: number): { row: number, column: number } => {
        const column = index % 8;
        const row = (index - column) / 8;

        return { row, column };
    }

    const getComputedValidCellIndex = (): number | null => {
        const validCells = getValidCellIndices(boardState, currentPlayerIsWhite);
        if (validCells.length === 0) {
            return null;
        }

        const cellRankAndIndices = validCells.map(cellIndex => getCellRank(cellIndex));

        cellRankAndIndices.sort((itemA, itemB) => itemA.rank - itemB.rank);
        console.log("getComputedValidCellIndex", cellRankAndIndices);

        const randomValidCellAndIndex = cellRankAndIndices[cellRankAndIndices.length - 1];

        console.log("getComputedValidCellIndex : result = ", randomValidCellAndIndex);

        return randomValidCellAndIndex.index;
    }

    const getRandomValidCellIndex = (): number | null => {
        const validCells = getValidCellIndices(boardState, currentPlayerIsWhite);
        if (validCells.length === 0) {
            return null;
        }

        const randomValidCellIndex = validCells[0];

        return randomValidCellIndex;
    }

    const selectRandomValidCell = () => {
        const validCellOrNull = getRandomValidCellIndex();
        if (validCellOrNull === null) {
            pass();
            return;
        }

        const { row, column } = getBoardCellCoords(validCellOrNull);

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
                <Grid item xs={2} />
                <Grid item xs={3} container>
                    <Grid item container justify="center">
                        <Badge color="secondary" showZero overlap="circle" badgeContent={whitePlayerCells.length}>
                            <FiberManualRecordIcon className={classes.token} style={{ color: "white" }} />
                        </Badge>
                    </Grid>
                </Grid>
                <Grid item xs={2} container>
                    {
                        currentPlayerIsWhite &&

                        <Grid item container alignItems="center" alignContent="space-between">
                            <Grid item xs={1} sm={2} />
                            <Grid item xs={10} sm={8} container>
                                <Grid container justify="center">
                                    <CircularProgress color="secondary" size={20} />
                                </Grid>
                            </Grid>
                            <Grid item xs={1} sm={2} />
                        </Grid>
                    }
                </Grid>
                <Grid item xs={3} container>
                    <Grid item container justify="center">
                        <Badge color="secondary" showZero overlap="circle" badgeContent={blackPlayerCells.length}>
                            <FiberManualRecordIcon className={classes.token} style={{ color: "black" }} />
                        </Badge>
                    </Grid>
                </Grid>
                <Grid item xs={2} />
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
                        <GridListTile key={cellNumber} cols={1} style={{ cursor: isValidCell ? 'pointer' : 'not-allowed' }}>
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

                    if (newValue === "Restart") {
                        restart();
                        return;
                    }

                    if (newValue === "Random") {
                        // selectRandomValidCell();
                        selectComputedValidCell();
                        return;
                    }

                    if (newValue === "Pass") {
                        pass();
                        return;
                    }

                    if (newValue === "UndoLastMove") {
                        undoLastMove();
                        return;
                    }
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction
                    label="Restart"
                    value="Restart"
                    icon={<RestorePageIcon />} />

                {
                    !isGameFinished &&
                    validCells.length > 0 &&
                    <BottomNavigationAction
                        label="Random"
                        value="Random"
                        icon={<ShuffleIcon />}
                    />
                }

                {
                    !isGameFinished &&
                    gameMoves.length > 0 &&
                    <BottomNavigationAction
                        label="Undo"
                        value="UndoLastMove"
                        icon={<UndoIcon />}
                    />
                }

                {
                    // Must play, if valid cells are present
                    !isGameFinished &&
                    (validCells.length === 0) &&
                    <BottomNavigationAction
                        label="Must Pass!"
                        value="Pass"
                        icon={<SentimentVeryDissatisfiedIcon />} />
                }
            </BottomNavigation>

            {/* <div>
                <Hidden xsUp>
                    <Paper>xsUp</Paper>
                </Hidden>
                <Hidden smUp>
                    <Paper>smUp</Paper>
                </Hidden>
                <Hidden mdUp>
                    <Paper>mdUp</Paper>
                </Hidden>
                <Hidden lgUp>
                    <Paper>lgUp</Paper>
                </Hidden>
                <Hidden xlUp>
                    <Paper>xlUp</Paper>
                </Hidden>
            </div> */}

            {
                isGameFinished &&
                <GameFinishedSnackbar message={`Winner is ${winnerName}!`} />
            }

            {
                !isGameFinished &&
                !currentPlayerIsWhite &&
                passCount > 0 &&
                <GameFinishedSnackbar message={`Computer has passed!`} />
            }
        </div>
    );
}

export default GameBoardList;