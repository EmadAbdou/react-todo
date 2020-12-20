import React, { Component } from 'react';
import FlipMove from 'react-flip-move';


export class TodoItems extends Component {

    createTasks = (item) => {
        return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
    }

    delete(key) {
        this.props.delete(key)
    }

    render() {

        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="list">
                <FlipMove duration="250" easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        )
    }
}

export default TodoItems
