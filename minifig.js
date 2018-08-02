module.exports = (function () {
	var minifigById = {};

	var minifig = function () {
	};

	minifig.prototype.byId = function (id) {
		return minifigById[id] || null;
	};

	var add = function (name, id) {
		if (name === 'byId') {
			return;
		}
		var figure = {
			id: id,
			name: name
		};
		minifig.prototype[name] = figure;
		minifigById[id] = figure;
	};


	// Figure definitions

	add('WILDSTYLE', '4b 2b ea 0b 40 81');
	add('BATMAN', '24 51 ba 0d 40 81');
	add('GANDALF', '60 62 6a 08 40 80');
	add('BATMOBILE', '66 d2 9a 70 40 80');

	return minifig;
})();

