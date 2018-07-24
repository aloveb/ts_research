import MacButton from "./MacButton";
import MacBorder from "./MacBorder";

export default class MacFactory {
	static create(type: 'button' | 'border') {
	    return type === 'button' ? new MacButton() : new MacBorder();
	}
}