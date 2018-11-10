import React from 'react';
import Comment from '../../models/Comment';

class CommentForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
		};

		this.textRef = React.createRef();
		this.onChange = this.onChange.bind(this);
		this.save = this.save.bind(this);
		this.cancel = this.cancel.bind(this);
	}

	componentDidMount() {
		this.textRef.current.focus();
	}

	onChange({ target: { value } }) {
		this.setState({
			text: value,
		});
	}

	cancel() {
		this.props.onCancel();
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
		const { text } = this.state;

		return (
			<div className="review__comment-form">
				<textarea className="review__comment-textarea" value={text} onChange={this.onChange} ref={this.textRef} />
				<div className="review__comment-form-buttons">
					<button className="review__comment-cancel review__comment-btn" onClick={this.cancel}>Cancel</button>
					<button className="review__comment-save review__comment-btn" disabled={!text} onClick={this.save}>Save</button>
				</div>
			</div>
		);
	}
}

export default CommentForm;
