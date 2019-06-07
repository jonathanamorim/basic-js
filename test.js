// this function checks to see if the letter 'a' key has been pressed
function checkKeyPress(key) {
	if (key.keyCode == "65") {
	key.preventDefault();
	// 65 is the keycode that is returned when the 'a' letter key is pressed
	// if you use keypress event instead of keydown/up then you must use ASCII code instead of keycode
 	}
}