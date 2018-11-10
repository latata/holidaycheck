import React from 'react';

const CommentUser = ({ user }) => (
	<div className="review__comment-user">
		<img className="review__comment-avatar" src={user.avatar} alt={user.name} />
		<div className="review__comment-full-name">{user.name}</div>
		<div className="review__comment-role">{user.role}</div>
	</div>
);

export default CommentUser;
