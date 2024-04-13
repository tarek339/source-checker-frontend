import { I18n } from "i18n-js";
import translations from "../constants/translations";
import useSelectors from "./useSelectors";
import useDispatches from "./useDispatches";
import { useCallback, useEffect } from "react";

export function useTranslations() {
  const { locale } = useSelectors();
  const { enableEN, enableGE } = useDispatches();
  const i18n = new I18n(translations);

  i18n.locale = locale;
  i18n.translations = translations;

  const t = useCallback(
    (scope: string, options?: Object) => {
      const translation = i18n.t(scope, { ...options, locale });

      if (translation === scope) {
        console.error(
          `No translation found for key: "${scope}" in locale: "${locale}"`
        );
        return "No translation available";
      }

      return translation;
    },
    [locale]
  );

  useEffect(() => {
    if (locale === "en") {
      enableEN();
    } else {
      enableGE();
    }
  }, [locale]);

  return {
    t,
  };
}
