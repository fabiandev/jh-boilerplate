function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function clone (src) {
	return JSON.parse(JSON.stringify(src));
}
