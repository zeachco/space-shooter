import Gamepad from 'class/utils/gamepad';

var gamepad = new Gamepad();
// shooter configuration
gamepad.alias('up', 38);
gamepad.alias('down', 40);
gamepad.alias('right', 39);
gamepad.alias('left', 37);
gamepad.alias('shoot', 32);

export default gamepad;
