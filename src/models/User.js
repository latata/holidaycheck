class User {
	static build(data) {
		if (!data) {
			return;
		}

		const user = new User();

		// assign all data properties to object's properties
		Object.assign(user, data);

		return user;
	}
}

export default User;
