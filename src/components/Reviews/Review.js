import React from 'react';
import { observer, inject } from 'mobx-react';

import './Review.scss';
import Comment from '../Comment/Comment';
import CommentForm from '../Comment/CommentForm';
import ReviewThumb from './ReviewThumb';
import ReviewRating from './ReviewRating';
import ExpandableText from '../ExpandableText';

class Review extends React.Component {
	state = {
		addComment: false,
	};

	constructor(props) {
		super(props);

		this.addComment = this.addComment.bind(this);
		this.saveComment = this.saveComment.bind(this);
		this.cancelComment = this.cancelComment.bind(this);
	}


	addComment() {
		this.setState({
			addComment: true,
		});
	}

	saveComment(comment) {
		this.setState({
			addComment: false,
		});
		this.props.review.saveComment(comment);
	}

	cancelComment() {
		this.setState({
			addComment: false,
		});
	}

	renderComment() {
		const { review, currentUser } = this.props;
		const { addComment } = this.state;

		if (review.comment) {
			return (
				<Comment user={review.comment.user}>
					<ExpandableText
						text={review.comment.body}
						isComment={true} />
				</Comment>
			);
		}

		if (addComment) {
			return (
				<Comment user={currentUser}>
					<CommentForm onSave={this.saveComment} onCancel={this.cancelComment} currentUser={currentUser} />
				</Comment>
			);
		}
	}

	renderAddCommentButton() {
		const { review } = this.props;
		const { addComment } = this.state;

		if (!addComment && !review.comment) {
			return (
				<button type="button" className="review__add-comment" onClick={this.addComment}>
					Add comment
				</button>
			);
		}
	}

	render() {
		const { review } = this.props;

		return (
			<article className="review">
				<img className="review__avatar" src={review.user.avatar} alt={review.user.name} />
				<div className="review__details">
					<div className="review__full-name">{review.user.name}</div>
					<div className="review__date">{review.formattedCreationDate}</div>
				</div>
				<h2 className="review__title">{review.title}</h2>
				<div className="review__rating">
					<ReviewThumb thumbUp={review.thumbUp} />
					<ReviewRating rating={review.rating} />
				</div>
				<ExpandableText text={review.body} />

				{this.renderComment()}
				{this.renderAddCommentButton()}
			</article>
		);
	}
}

export default inject(({ store: { currentUser } }) => ({ currentUser }))(observer(Review));
