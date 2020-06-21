import React from 'react';

import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

const App = () => {

    const data = [
        {label: 'Начал изучать и знакомиться с React', important: true, id: 'wee'},
        {label: 'Процесс запущен', important: false, id: 'qsss'},
        {label: 'Все будет...', important: false, id: 'sqs'}
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;