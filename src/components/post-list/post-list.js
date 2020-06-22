import React from 'react';
import {ListGroup} from 'reactstrap';
import './post-list.css';

import PostListItem from '../post-list-item';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {

        if (typeof item === 'object' && isEmpty(item)) {
            const {id, ...itemProps} = item;
            return (
                <li key={id} className='list-group-item'>
                    <PostListItem {...itemProps}/> 
                </li>
            )
        }
    })

    function isEmpty(obj) {
        for (let key in obj) {
            return true;
        }
        return false;
    }

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;