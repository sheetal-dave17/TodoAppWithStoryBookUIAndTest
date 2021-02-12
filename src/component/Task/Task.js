import React from 'react';
import './task.css'

export default function Task({ task: { id, name }}) {
    return (
        <div className="list-item">
            <input type="text" value={name} readOnly={true} />
        </div>
    );
}