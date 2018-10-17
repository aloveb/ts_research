import MacButton from "./MacButton";
import MacBorder from "./MacBorder";
import Type from "./Type";

export default class MacFactory {
	public static create(type: Type): JSX.Element {
		const obj = type === Type.BUTTON ? new MacButton() : new MacBorder();
	    return obj.view();
	}
}
