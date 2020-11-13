import React from 'react';
import PropTypes from 'prop-types';

Postlist.propTypes = {
    posts: PropTypes.array,
};

Postlist.defaultProps = {
    posts: [],
}

function Postlist(props) {
    const { posts } = props
    return (
        <div>
            <ul className="post-list">
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Postlist;