import React from 'react';
import { push as Menu } from 'react-burger-menu';

function SidePanel(props) {
    const { list, menu, setMenu, handleLabelChange, handlePlaceholderChange, handleFontSizeChange, handleFontColorChange, handleBackgroundColorChange } = props;
    return (
        <Menu
            width={'280px'}
            right
            pageWrapId={'page-wrap'}
            outerContainerId={'outer-container'}
            isOpen={menu}
            onClose={() => setMenu(!menu)}
        >
            <div className="form-group">
                <label>Edit label:</label>
                <input type="text" className="form-control" onChange={handleLabelChange} />
            </div>
            <div className="form-group">
                <label>Edit placeholder:</label>
                <input type="text" className="form-control" onChange={handlePlaceholderChange} />
            </div>
            <div className="form-group">
                <label>Choose font size:</label>
                <select value={list.fontSize} onChange={handleFontSizeChange} className="form-control">
                    <option value="fs14">14</option>
                    <option value="fs16">16</option>
                    <option value="fs18">18</option>
                    <option value="fs20">20</option>
                </select>
            </div>
            <div className="form-group">
                <label>Choose font color:</label>
                <select value={list.fontColor} onChange={handleFontColorChange} className="form-control">
                    <option value="text-dark">black</option>
                    <option value="text-red">red</option>
                    <option value="text-orange">orange</option>
                    <option value="text-yellow">yellow</option>
                    <option value="text-green">green</option>
                    <option value="text-blue">blue</option>
                </select>
            </div>
            <div className="form-group">
                <label>Choose background color:</label>
                <select value={list.backgroundColor} onChange={handleBackgroundColorChange} className="form-control">
                    <option value="bg-white">white</option>
                    <option value="bg-red">red</option>
                    <option value="bg-orange">orange</option>
                    <option value="bg-yellow">yellow</option>
                    <option value="bg-green">green</option>
                    <option value="bg-blue">blue</option>
                </select>
            </div>
        </Menu>
    );
}

export default SidePanel;