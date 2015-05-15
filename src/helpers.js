function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function makeStateString(str) {
	return str.toLowerCase().replace(/[^a-z0-9]+/g,'-');
}

function clone (src) {
	return JSON.parse(JSON.stringify(src));
}
