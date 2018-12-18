window.onload = function () {
	initColorPicker();
};

function initColorPicker () {
	let colorBox = document.getElementById("color-box");
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue"),
	};
	let colorPickers = document.getElementsByClassName("picker");
	setColorPickerEventListeners(colorBox, rgb, colorPickers);
}

function setColorPickerEventListeners(colorBox, colors, pickerElements) {
	let pickerArrayLength = pickerElements.length;
	for(let i = 0; i < pickerArrayLength; i++) {
		pickerElements[i].addEventListener('change', () => {
			let red = colors.red.value;
			let green = colors.green.value;
			let blue = colors.blue.value;
			setBoxBGColor(colorBox, red, green, blue);
			setDisplayValues(red, green, blue);
		});
	}
}
	/* REFACTOR AS ABOVE WITH CONDITIONAL --^
	rgb.red.addEventListener('change', () => {
		console.log("Red Value: ", rgb.red.value);
		setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
	});

	rgb.green.addEventListener('change', () => {
		console.log("Green Value: ", rgb.green.value);
		setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
	});

	rgb.blue.addEventListener('change', () => {
		console.log("Blue Value: ", rgb.blue.value);
		setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
	});
}
*/

function setBoxBGColor(colorBox, red, green, blue) {
	let rgbVal = [red, green, blue].join(", ");
	colorBox.style.backgroundColor = "rgb(" + rgbVal + ")";
}
function setDisplayValues  (red, green, blue) {
	let redVal = document.getElementById("redVal");
	let greenVal = document.getElementById("greenVal");
	let blueVal = document.getElementById("blueVal");

	redVal.innerText = red;
	greenVal.innerText = green;
	blueVal.innerText = blue;
}