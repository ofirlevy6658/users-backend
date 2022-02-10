const rawData = require("./raw-data");

const parser = (text) => {
	const textArr = text.replaceAll("\n", ",").replaceAll('"', "").split(",");
	console.log(textArr);
	const result = [];
	for (let i = 0; i < textArr.length; i += 4) {
		result.push({
			name: textArr[i],
			id: parseInt(textArr[i + 1]),
			ip: textArr[i + 2],
			phone: textArr[i + 3],
		});
	}
	return result;
};
