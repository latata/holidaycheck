import React from 'react';
import CommentUser from './CommentUser';

import './Comment.scss'

const Comment = ({ children, user }) => (
	<div className="review__comment">
		<h3>Comment</h3>
		{children}
		<CommentUser user={user} />
	</div>
);

export default Comment;
