import React, { useState } from 'react';
import { cloneDeep } from 'lodash';

import TextBlock from './components/TextBlock';
import SidePanel from './components/SidePanel';

import './App.css';

function App() {
    const [menu, setMenu] = useState();
    const [list, setList] = useState([
        {
            label: 'Label',
            placeholder: 'Type text here...',
            fontSize: 'fs16',
            fontColor: 'black',
            backgroundColor: 'white',
            value: '',
        }
    ]);
    const [indexToEdit, setIndexToEdit] = useState(0);


    const toggleMenu = (i) => {
        setIndexToEdit(i);
        setMenu(!menu);
    };

    const handleAddClick = () => {
        setList([
            ...list,
            {
                label: 'Label',
                placeholder: 'Type text here...',
                fontSize: 'fs16',
                fontColor: 'black',
                backgroundColor: 'white',
                value: '',
            }
        ]);
    };

    const handleDeleteClick = (i) => {
        const updatedList = cloneDeep(list);
        updatedList.splice(i, 1);
        setList(updatedList);
    };

    const handleLabelChange = (e) => {
        const updatedList = cloneDeep(list);
        updatedList[indexToEdit].label = e.target.value;
        setList(updatedList);
    };

    const handlePlaceholderChange = (e) => {
        const updatedList = cloneDeep(list);
        updatedList[indexToEdit].placeholder = e.target.value;
        setList(updatedList);
    };

    const handleFontSizeChange = (e) => {
        const updatedList = cloneDeep(list);
        updatedList[indexToEdit].fontSize = e.target.value;
        setList(updatedList);
    };

    const handleFontColorChange = (e) => {
        const updatedList = cloneDeep(list);
        updatedList[indexToEdit].fontColor = e.target.value;
        setList(updatedList);
    };

    const handleBackgroundColorChange = (e) => {
        const updatedList = cloneDeep(list);
        updatedList[indexToEdit].backgroundColor = e.target.value;
        setList(updatedList);
    };

    const handleValueChange = (e, i) => {
        const updatedList = cloneDeep(list);
        updatedList[i].value = e.target.value;
        setList(updatedList);
    };

    return (
        <div className="app" id="outer-container">
            <SidePanel
                list={list}
                menu={menu}
                setMenu={setMenu}
                handleLabelChange={handleLabelChange}
                handlePlaceholderChange={handlePlaceholderChange}
                handleFontSizeChange={handleFontSizeChange}
                handleFontColorChange={handleFontColorChange}
                handleBackgroundColorChange={handleBackgroundColorChange}
            />
            <nav className="navbar fixed-top">
                <div className="container">
                    <div className="title">Form Editor</div>
                    <button className="btn btn-sm btn-dark" onClick={handleAddClick}>Add block</button>
                </div>
            </nav>
            <main className="main" id="page-wrap">
                <form>
                    <div className="container">
                        {list.map((row, i) => (
                            <TextBlock
                                row={row}
                                i={i}
                                handleDeleteClick={handleDeleteClick}
                                toggleMenu={toggleMenu}
                                handleValueChange={handleValueChange}
                            />
                        ))}
                    </div>
                </form>
            </main>
        </div>
    );
}

export default App;
