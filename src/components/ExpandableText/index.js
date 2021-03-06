import React from 'react';

import './styles.scss';

class ExpandableText extends React.Component {
	state = {
		isTextExpandable: false,
		isTextExpanded: false,
	};

	constructor(props) {
		super(props);

		this.expandText = this.expandText.bind(this);

		this.reviewTextRef = React.createRef();
		this.reviewTextSpanRef = React.createRef();
	}

	componentDidMount() {
		if (this.reviewTextSpanRef.current.offsetHeight > this.reviewTextRef.current.offsetHeight) {
			this.setState({
				isTextExpandable: true,
			});
		}
	}

	expandText() {
		this.setState({
			isTextExpanded: true,
		});
	}

	render() {
		const { text } = this.props;
		const { isTextExpandable, isTextExpanded } = this.state;
		const classNames = ['expandable-text'];
		let onClick;

		if (isTextExpanded) {
			classNames.push('is-expanded');
		} else if (isTextExpandable) {
			onClick = this.expandText;
			classNames.push('is-expandable');
		}

		return (
			<div className={classNames.join(' ')} ref={this.reviewTextRef} onClick={onClick}>
					<span ref={this.reviewTextSpanRef}>
						{text}
					</span>
			</div>
		);
	}
}

export default ExpandableText;
