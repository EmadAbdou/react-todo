import React, { Component } from 'react'
import TodoItems from './TodoItems';
import './TodoList.css';

export class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }

    addItem = e => {
        e.preventDefault();
        console.log(e);
        if (this._inputElement.value !== '') {

            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState(prevState => {
                return {
                    items: [...prevState.items, newItem]
                    // items: prevState.items.concat(newItem)
                }
            });
            // console.log(this.state.items);
        }
        this._inputElement.value = '';
    }

    deleteItem = (key) => {
        var filteredItems = this.state.items.filter(item => item.key !== key );
        this.setState({
            items: filteredItems
        })
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input type="text" ref={(a) => this._inputElement = a} placeholder="Enter Task" />
                        <button type="submit">ADD</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} delete={this.deleteItem}></TodoItems>
            </div>
        )
    }
}

export default TodoList
