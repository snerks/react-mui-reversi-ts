import * as React from 'react';
import GameBoardList, { initialGameBoard } from './GameBoardList';

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
