import React from 'react';
import './CardTable.css';


const CardTable = (props) => {
    const cardList = props.cards.map((card, index) => 
            <tr key={index}>
                <td>{card[0]} </td>
                <td>{card[1]}</td>
                <td><button onClick={() => props.handleDeleteClick(index)}>Delete</button></td>
            </tr>
            ); 
    return (
            <table>
                <thead>
                    <tr>
                        <th>Front</th>
                        <th>Back</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cardList}
                </tbody>
            </table>
        );
}

export default CardTable;