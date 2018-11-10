import User from './User';

class Comment {
	static build(data) {
		if (!data) {
			return;
		}

		const comment = new Comment();

		// assign all data properties to object's properties
		Object.assign(comment, data);

		comment.user = data.user && User.build(data.user);

		return comment;
	}
}

export default Comment;
