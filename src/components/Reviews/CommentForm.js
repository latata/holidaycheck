import React from 'react';
import Comment from '../../models/Comment';

class CommentForm extends React.Component {
	constructor(props) {
		super(props);

		this.textRef = React.createRef();
		this.save = this.save.bind(this);
	}

	componentDidMount() {
		this.textRef.current.focus();
	}

	save() {
		this.props.onSave(
			Comment.build({
				body: this.textRef.current.value,
				user: this.props.currentUser,
			})
		);
	}

	render() {
		return (
			<div className="review__comment-form">
				<textarea className="review__comment-textarea" ref={this.textRef} />
				<button className="review__comment-save" onClick={this.save}>Save</button>
			</div>
		);
	}
}

export default CommentForm;
