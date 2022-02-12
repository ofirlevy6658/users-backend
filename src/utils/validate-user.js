const israelMobileRegex = /^\+?(972|0)(-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/;
const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}/;

module.exports = (user) => {
	if (
		!user.name ||
		user.id.length !== 9 ||
		!israelMobileRegex.test(user.phone) ||
		!ipRegex.test(user.ip)
	) {
		return false;
	}
	return true;
};
