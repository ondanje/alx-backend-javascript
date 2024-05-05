function calculateNumber(type, a, b) {
	if (type === 'SUM') {
		return Math.round(a) + Math.round(b);
	}

	if (type === 'SUBTRACT') {
		return Math.round(a) - Math.round(b);
	}

	if (type === 'DIVIDE') {
		return Math.round(b) ===0 ? 'Error: division by zero' : Math.round(a) / Math.round(b)
	}
	return 0;

  };

  module.exports = calculateNumber;
