﻿import React from 'react';
import { render } from 'react-dom';
import s from './MyPosts.module.css';
import Post from './Post/Post';

class MyPosts extends React.Component {
    render() {
    let newPostElement = React.createRef();
    let postsElements = this.props.posts.map (p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

    let onAddPost = () => {
        this.props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        this.props.updateNewPostText(text);
    }
    return (<div className={ s.postsBlock }>
        <h3>My post</h3>
        <div >
            <div>
                <textarea onChange={ onPostChange }
                        ref={newPostElement}
                        value={this.props.newPostText} />
            </div>
            <div>
                <button onClick={ onAddPost }>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            { postsElements }
        </div>
    </div> )
}
}
export default MyPosts;
