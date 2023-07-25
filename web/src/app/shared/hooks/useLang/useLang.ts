import { langJSON } from '../../../shared/lang/';
import Cookies from 'js-cookie';
import { LanguageKeyType } from './useLang.types';
import { useEffect, useState } from 'react';

export function useLang() {
  const lang = langJSON;
  const [currentLang, setCurrentLang] = useState(
    (Cookies.get('language') as LanguageKeyType) ?? 'pt'
  );

  const changeLanguage = (key: LanguageKeyType) => {
    setCurrentLang(key);

    Cookies.remove('language')
    Cookies.set('language', currentLang);
  };

  return {
    lang,
    currentLang,
    onChangeLanguage: changeLanguage
  };
}
