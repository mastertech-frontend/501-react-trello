import React, { Component } from 'react';
import './List.css';
import Card from '../card/Card';

class List extends Component {
    componentWillMount = () =>{
        this.setState({cards: []});
    }

    handleClick = () => {
        let newCards = this.state.cards;
        newCards.push(this.text);
        this.text = '';

        this.setState({cards: newCards});
    }

    onTextChange = (event) => {
        this.text = event.target.value;
    }

    render = () => {
        let cardsHTML = [];
        let i = 0;

        for(let cardText of this.state.cards){
            cardsHTML.push(<Card text={cardText} key={i}/>)
            i++;
        }

        return (
            <div className="List">
                <ul>
                    {cardsHTML} 
                </ul>

                <div>
                    <input type="text" onChange={this.onTextChange}/>
                    <button onClick={this.handleClick}>Ok</button>
                </div>
            </div>
        );
    }
}

export default List;
