import WinButton from "./WinButton";
import WinBorder from "./WinBorder";

export default class MacFactory {
	static create(type: 'button' | 'border') {
	    return type === 'button' ? new WinButton() : new WinBorder();
	}
}