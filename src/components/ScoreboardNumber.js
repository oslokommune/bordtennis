export function SetNumber(target, newNumber) {
	switch(newNumber) {
		case 0:
			target.top = true;
			target.upperLeft = true;
			target.upperRight = true;
			target.middle = false;
			target.lowerLeft = true;
			target.lowerRight = true;
			target.bottom = true;
			break;
		case 1:
			target.top = false;
			target.upperLeft = false;
			target.upperRight = true;
			target.middle = false;
			target.lowerLeft = false;
			target.lowerRight = true;
			target.bottom = false;
			break;
		case 2:
			target.top = true;
			target.upperLeft = false;
			target.upperRight = true;
			target.middle = true;
			target.lowerLeft = true;
			target.lowerRight = false;
			target.bottom = true;
			break;
		case 3:
			target.top = true;
			target.upperLeft = false;
			target.upperRight = true;
			target.middle = true;
			target.lowerLeft = false;
			target.lowerRight = true;
			target.bottom = true;
			break;
		case 4:
			target.top = false;
			target.upperLeft = true;
			target.upperRight = true;
			target.middle = true;
			target.lowerLeft = false;
			target.lowerRight = true;
			target.bottom = false;
			break;
		case 5:
			target.top = true;
			target.upperLeft = true;
			target.upperRight = false;
			target.middle = true;
			target.lowerLeft = false;
			target.lowerRight = true;
			target.bottom = true;
			break;
		case 6:
			target.top = true;
			target.upperLeft = true;
			target.upperRight = false;
			target.middle = true;
			target.lowerLeft = true;
			target.lowerRight = true;
			target.bottom = true;
			break;
		case 7:
			target.top = true;
			target.upperLeft = false;
			target.upperRight = true;
			target.middle = false;
			target.lowerLeft = false;
			target.lowerRight = true;
			target.bottom = false;
			break;
		case 8:
			target.top = true;
			target.upperLeft = true;
			target.upperRight = true;
			target.middle = true;
			target.lowerLeft = true;
			target.lowerRight = true;
			target.bottom = true;
			break;
		case 9:
			target.top = true;
			target.upperLeft = true;
			target.upperRight = true;
			target.middle = true;
			target.lowerLeft = false;
			target.lowerRight = true;
			target.bottom = true;
			break;
	}
}
