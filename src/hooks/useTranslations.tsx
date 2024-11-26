import { I18n } from "i18n-js";
import translations from "../constants/translations";
import { useCallback, useEffect, useMemo } from "react";
import useSelectors from "./useSelectors";
import useDispatches from "./useDispatches";

export function useTranslations() {
  const { locale } = useSelectors();
  const { enableEN, enableGE } = useDispatches();
  const i18n = useMemo(() => new I18n(translations), []);

  i18n.locale = locale;
  i18n.translations = translations;

  const t = useCallback(
    (scope: string, options?: object) => {
      const translation = i18n.t(scope, { ...options, locale });

      if (translation === scope) {
        console.error(
          `No translation found for key: "${scope}" in locale: "${locale}"`
        );
        return "No translation available";
      }

      return translation;
    },
    [i18n, locale]
  );

  useEffect(() => {
    if (locale === "en") {
      enableEN();
    } else {
      enableGE();
    }
  }, [enableEN, enableGE, locale]);

  return {
    t,
  };
}
