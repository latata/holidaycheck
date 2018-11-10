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
	}

	componentDidMount() {
		this.textRef.current.focus();
	}

	onChange({ target: { value } }) {
		this.setState({
			text: value,
		});
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
				<button className="review__comment-save" disabled={!text} onClick={this.save}>Save</button>
			</div>
		);
	}
}

export default CommentForm;
