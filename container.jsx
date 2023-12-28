import React from 'react';
import Board from './board/Board';
import './style.css';

class Container extends React.Component
{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="container">
                <div className="color-picker-container">
                    <input type="color" />
                </div>

                <div className="board-container">
                    <Board></Board>
                </div>
            </div>
        )
    }
    
}

export default Container