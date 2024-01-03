import {selectLanguage} from "../src/features/language/languageSlice";
import store from "./store";
import french from "../src/features/language/french.translations.json";

export default function i18n(message) {
    const language = selectLanguage(store.getState());

    if (language === "english") return parse(message, arguments);
    if (language === "french") {
        const frenchMsg = french[message];
        if (!frenchMsg) throw new Error('Missing translation for message: ' + message);
        return parse(frenchMsg ? frenchMsg : message, arguments);
    }
}

export function parse(message, args) {
    for (let i = 1; i < args.length ; i++) {
        message = message.replaceAll(`{${i-1}}`, args[i]);
    }
    return message;
}