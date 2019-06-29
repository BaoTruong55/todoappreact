import React from "react";
import "./App.css";
import TodoItem from "./component/TodoItem";
import tick from "./img/tick.svg";
// import TrafficLight from './component/TrafficLight';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      currentFilter: 'all', //'all', 'active', 'completed'
      todoItems: [
        { title: "Mua bim bim", isComplete: true },
        { title: "Di da bong", isComplete: true },
        { title: "Di choi", isComplete: true }
      ]
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    // ? why use this?
  }
  onItemClicked(item) {
    const { todoItems } = this.state;
    this.setState({
      todoItems: todoItems.map(i => {
        if (i.title === item.title) 
        i.isComplete = !i.isComplete;
        return i;
      })
    });
  }

  onKeyUp(event) {
    
    if (event.keyCode === 13) {
      let text = event.target.value;
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }

      this.setState({
        newItem: '',
        todoItems: [{ 
          title: text, 
          isComplete: false }, 
          ...this.state.todoItems
        ]
      });
    }
  }

  onChange(event){
    this.setState({
      newItem: event.target.value
    })
  }

  render() {
    const { todoItems, newItem } = this.state;
    if (todoItems.length) {
      return (
        <div className="App">
          <div className="Header">
            <img src={tick} width={32} height={32} />
            <input
              type="text"
              value = {newItem}
              onChange = {this.onChange}
              placeholder="What need to be done?"
              onKeyUp={this.onKeyUp}
            />
          </div>
          {todoItems.length &&
            todoItems.map((item, index) => (
              <TodoItem
                key={index}
                item={item}
                onClick={() => this.onItemClicked(item)}
              />
            ))}
          {/* <TrafficLight /> */}
        </div>
      );
    } else {
      return <div className="App">Nothing Here</div>;
    }
  }
}
