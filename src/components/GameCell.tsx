import * as React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles, createStyles } from '@material-ui/core';

export interface GameCellProps {
    row: number;
    column: number;

    isWhite?: boolean;

    isValid: boolean;

    handleClick: (row: number, column: number) => void;

    currentPlayerIsWhite: boolean;
}

const useStyles = makeStyles((theme) =>
    createStyles({
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
                fontSize: 25,
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: 35,
            },
            [theme.breakpoints.up('md')]: {
                fontSize: 40,
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: 50,
            },
            [theme.breakpoints.up('xl')]: {
                fontSize: 60,
            }
        },
        validCellMarker: {
            // padding: theme.spacing(1),
            [theme.breakpoints.up('xs')]: {
                fontSize: 25,
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: 35,
            },
            [theme.breakpoints.up('md')]: {
                fontSize: 40,
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: 50,
            },
            [theme.breakpoints.up('xl')]: {
                fontSize: 60,
            }
        }
    })
);

const GameCell: React.FC<GameCellProps> = (props) => {

    const classes = useStyles();

    const { row, column, isWhite, handleClick, isValid, currentPlayerIsWhite } = props;

    const isOccupied = isWhite !== undefined;

    let discColor = isOccupied ? isWhite ? 'white' : 'black' : undefined;

    // &nbsp;
    let emptyCellText = '\u00a0';

    let emptyCellContent =
        <span className={classes.validCellMarker} style={{ color: discColor, cursor: 'not-allowed' }}>{emptyCellText}</span>;

    if (!isOccupied && isValid) {
        // emptyCellText = '\u2713';

        discColor = currentPlayerIsWhite ? 'white' : 'black';

        emptyCellContent =
            <CheckIcon className={classes.validCellMarker} style={{ color: discColor }} />;
    }

    const discContent = isOccupied ? (
        <FiberManualRecordIcon className={classes.token} style={{ color: discColor }} />
    ) : emptyCellContent;

    const content = discContent;

    return (
        <div
            onClick={isOccupied ? () => { } : () => handleClick(row, column)}
            style={{ cursor: isValid ? 'pointer' : 'not-allowed' }}
        >
            {content}
        </div>
    );
}

export default GameCell;
