import React from 'react';

const ReviewThumb = ({ thumbUp }) => {
	const containerClassNames = ['review__thumb'];
	const iconClassNames = ['fas'];

	if (thumbUp) {
		iconClassNames.push('fa-thumbs-up');
	} else {
		containerClassNames.push('is-thumb-down');
		iconClassNames.push('fa-thumbs-down');
	}

	return (
		<div className={containerClassNames.join(' ')}>
			<i className={iconClassNames.join(' ')} />
		</div>
	);
};

export default ReviewThumb;
