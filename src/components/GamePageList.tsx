import * as React from 'react';

// import { GameCellIsWhiteStatus } from '../types/CustomTypes';
// import GameBoard from './GameBoard';
import GameBoardList, { initialGameBoard } from './GameBoardList';

// export const initialGameBoard: GameCellIsWhiteStatus[] = [
//     undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
//     undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
//     undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
//     undefined, undefined, undefined, true, false, undefined, undefined, undefined,
//     undefined, undefined, undefined, false, true, undefined, undefined, undefined,
//     undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
//     undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
//     undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
// ];

export interface GamePageListProps {
}

class GamePageList extends React.Component<GamePageListProps, {}> {
    render(): JSX.Element {
        return (
            <GameBoardList initialBoard={initialGameBoard} />
        );
    }
}

export default GamePageList;
