import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './TodoItem.css';
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

TodoItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        isComplete: PropTypes.bool.isRequired
    }),
    onClick: PropTypes.func.isRequired
}
