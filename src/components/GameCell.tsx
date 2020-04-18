import * as React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export interface GameCellProps {
    row: number;
    column: number;

    isWhite?: boolean;

    isValid: boolean;

    handleClick: (row: number, column: number) => void;

    currentPlayerIsWhite: boolean;
}

class GameCell extends React.Component<GameCellProps, {}> {
    render() {
        const { row, column, isWhite, handleClick, isValid, currentPlayerIsWhite } = this.props;

        const isOccupied = isWhite !== undefined;

        let discColor = isOccupied ? isWhite ? 'white' : 'black' : undefined;

        let emptyCellText = '\u00a0';

        if (!isOccupied && isValid) {
            emptyCellText = '\u2713';

            discColor = currentPlayerIsWhite ? 'white' : 'black';
        }

        const emptyCellContent = <span style={{ fontSize: '28px', color: discColor }}>{emptyCellText}</span>;

        // const discContent = isOccupied ? '🌑' : emptyCellContent;
        const discContent = isOccupied ? (
            // <i className="glyphicon glyphicon-certificate" aria-hidden="true" />
            // <span
            //     style={{
            //         display: 'inline-block',
            //         width: '2em',
            //         height: '2em',
            //         borderRadius: '1em',
            //         margin: '0.25em',
            //         backgroundColor: discColor ? discColor : undefined
            //     }}
            // />
            <FiberManualRecordIcon /* className={classes.token} */ style={{ color: discColor }} />

        ) : emptyCellContent;

        // const content = <span style={{ fontSize: '10px', color: discColor }}>{discContent}</span>;
        const content = discContent;

        return (
            <div
                // tslint:disable-next-line:no-empty
                onClick={isOccupied ? () => { } : () => handleClick(row, column)}
                style={{ cursor: isValid ? 'pointer' : 'not-allowed' }}
            >
                {content}
            </div>
        );
    }
}

export default GameCell;
