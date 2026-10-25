import {languageCode,languages,translate,countryOptions,localizeTripText,localizeNotice} from '../../lib/i18n.mjs';
export {languages,countryOptions,localizeTripText,localizeNotice};
export let language='ar';
try{language=languageCode(localStorage.getItem('quds-language'));}catch{}
export const t=text=>translate(text,language);
export function applyLanguage(value){language=languageCode(value);document.documentElement.lang=language;document.documentElement.dir=languages.find(l=>l.code===language).dir;try{localStorage.setItem('quds-language',language);}catch{}for(const el of document.querySelectorAll('[data-i18n]'))el.textContent=t(el.dataset.i18n);for(const el of document.querySelectorAll('[data-placeholder]'))el.placeholder=t(el.dataset.placeholder);const nationality=document.querySelector('[name=nationalityCode]');const previous=nationality.value;nationality.replaceChildren(new Option(t('اختر الجنسية'),''),...countryOptions(language).map(c=>new Option(c.label,c.code)));nationality.value=previous;}
