import WinButton from "./WinButton";
import WinBorder from "./WinBorder";
import Type from "./Type";
export default class MacFactory {
	public static create(type: Type): JSX.Element {
		const obj = type === Type.BUTTON ? new WinButton() : new WinBorder();
	    return obj.view();
	}
}
