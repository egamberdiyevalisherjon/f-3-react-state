import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      todos: [
        {
          id: 1,
          name: "Musur tokish",
        },
        {
          id: 2,
          name: "Xarajat qilish",
        },
      ],
    };
  }
  render() {
    const { todos } = this.state;

    const yengisIsh = (e) => {
      e.preventDefault();
      this.setState({
        todos: [
          ...todos,
          {
            name: this.state.inputValue,
          },
        ],
        inputValue: "",
      });
    };

    return (
      <>
        <form onSubmit={yengisIsh}>
          <input
            type="text"
            value={this.state.inputValue}
            placeholder="yengi ish"
            onChange={(e) => {
              this.setState({
                inputValue: e.target.value,
              });
            }}
          />
          <button type="submit">Qoshish</button>
        </form>
        <ul>
          {todos.map((todo) => {
            return <li>{todo.name}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default Todo;
