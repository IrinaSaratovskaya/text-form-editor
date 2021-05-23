import React from 'react';

function TextBlock({ row, i, handleDeleteClick, toggleMenu, handleValueChange }) {

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8">
                <div className={`form-group ${row.fontSize} ${row.fontColor} ${row.backgroundColor}`}>
                    <div className="label-wrapper d-flex justify-content-between">
                        <label>{row.label}</label>
                        <div>
                            <span
                                className="icon block-settings"
                                onClick={() => toggleMenu(i)}
                            >
                                <i className="fas fa-pencil-alt" />
                            </span>
                            <span
                                className="icon delete-block"
                                onClick={() => handleDeleteClick(i)}
                            >
                                <i className="fas fa-trash-alt" />
                            </span>
                        </div>
                    </div>
                    <textarea
                        className={`form-control ${row.fontSize} ${row.fontColor}`}
                        placeholder={row.placeholder}
                        rows="3"
                        value={row.value}
                        onChange={(e) => handleValueChange(e, i)}
                    />
                </div>
            </div>
        </div>
    );
}

export default TextBlock;