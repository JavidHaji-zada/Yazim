import { Language } from "@customTypes/index";
import { AZ, EN } from "@localization/index";

const LANGUAGE_MAP = {
	[Language.EN]: EN,
	[Language.AZ]: AZ,
};

const translate = (lang: Language, key: string): string => {
	return LANGUAGE_MAP[lang][key];
};

export default translate;
