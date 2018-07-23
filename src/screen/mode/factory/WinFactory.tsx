import WinButton from "./WinButton";
import WinBorder from "./WinBorder";

export default class MacFactory {
	static createButton(): WinButton {
	    return new WinButton();
	}
	static createBorder(): WinBorder {
	    return new WinBorder();
	}
}