import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './Header';
import { CustomDate } from './CustomDate';
import { FruitLoops } from './FruitLoops';

ReactDOM.render(
    <div>
        <Header text="Satisfied as text type"/>
        <CustomDate />
        <FruitLoops />
        <p>this is a paragraph!!</p>
        <a href="#">Click me</a>
    </div>,
    document.querySelector('#root')
)