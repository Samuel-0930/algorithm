function solution(wallpaper) {
	let rdx, rdy, lux, luy;
	const lengthOfColumns = wallpaper.length;
	const lengthOfRows = wallpaper[0].length;

	for (let i = 0; i < lengthOfColumns; i++) {
		for (let j = 0; j < lengthOfRows; j++) {
			if (wallpaper[i][j] === '#') {
				if (rdx === undefined) {
					rdx = j;
					rdy = i;
					lux = j;
					luy = i;
					continue;
				} else {
					if (j < rdx) rdx = j;
					if (j > lux) lux = j;
					if (i < rdy) rdy = i;
					if (i > luy) luy = i;
				}
			}
		}
	}

	return [rdy, rdx, luy + 1, lux + 1];
}
