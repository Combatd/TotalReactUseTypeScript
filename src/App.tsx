import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './Header';

ReactDOM.render(
    <div>
        <Header text="This is the props.text"/>
        <p>this is a paragraph!!</p>
        <a href="#">Click me</a>
    </div>,
    document.querySelector('#root')
)