import MacButton from "./MacButton";
import MacBorder from "./MacBorder";

export default class MacFactory {
	static createButton(): MacButton {
	    return new MacButton();
	}
	static createBorder(): MacBorder {
	    return new MacBorder();
	}
}