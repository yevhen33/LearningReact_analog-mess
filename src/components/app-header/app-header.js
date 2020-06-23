import React from 'react';

import './app-header.css';

const AppHeader = ({allPosts, liked, importanted}) => {
    return (
        <div className="app-header d-flex">
            <h1>Yevhen Kolesnikov</h1>
            <h2>Всего записей {allPosts}, из них понравилось {liked}, важных {importanted}</h2>
        </div>
    )
}

export default AppHeader;