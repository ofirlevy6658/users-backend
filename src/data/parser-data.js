module.exports = (text) => {
	const textArr = text.replaceAll("\n", ",").replaceAll('"', "").split(",");
	const result = [];
	for (let i = 0; i < textArr.length; i += 4) {
		result.push({
			name: textArr[i],
			id: textArr[i + 1],
			ip: textArr[i + 2],
			phone: textArr[i + 3],
		});
	}
	return result;
};
