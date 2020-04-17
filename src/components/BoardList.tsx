import React from "react";
import { Paper, Grid, GridList, GridListTile, makeStyles, createStyles } from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            backgroundColor: "black",
            height: "50%"
        },
        cell: {
            display: "flex",
            justifyContent: "center",
            backgroundColor: "green",
            height: "100%",
            alignItems: "center"
        },
        token: {
            padding: theme.spacing(1),
            [theme.breakpoints.up('xs')]: {
                fontSize: 40,
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: 70,
            },
            [theme.breakpoints.up('md')]: {
                fontSize: 40,
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: 100,
            },
        }
    }),
);

const BoardList: React.FC<{}> = (props) => {
    const classes = useStyles();
    const cellNumbers = Array.from(Array(64)).map((e, i) => i);

    console.log(cellNumbers);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <div className={classes.root}>

            <GridList style={{ border: "1px solid black" }} cols={8}>
                {cellNumbers.map((cellNumber) => {
                    const rowNumber = Math.floor(cellNumber / 8);
                    const rowCellNumber = cellNumber % 8
                    const cellColor = rowCellNumber % 2 === 0 ? "black" : "white";

                    return (
                        <GridListTile key={cellNumber} cols={1}>
                            <div className={classes.cell}>
                                <FiberManualRecordIcon className={classes.token} style={{ color: cellColor }} />
                            </div>
                        </GridListTile>
                    );
                })}
            </GridList>

        </div>
    );
}

export default BoardList;