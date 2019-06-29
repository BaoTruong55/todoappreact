import React, { Component } from 'react';
import './TodoItem.css';
import classNames from 'classnames';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/success.svg';

export default class TodoItem extends Component{
    render(){
        const {item, onClick} = this.props;

        let url = checkImg;
        if(item.isComplete){
            url = checkCompleteImg;
        }

        return(
            <div 
            className={classNames('TodoItem', 
                {'TodoItem-complete': item.isComplete})}>
                    <img
                    onClick={onClick} 
                    src={url} width={32} height={32}
                    alt="check"/>
                    <p>{this.props.item.title}</p>
            </div>
        )
    }
}
