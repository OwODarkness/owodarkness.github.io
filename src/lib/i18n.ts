export type Locale = 'zh' | 'en';

/** A piece of copy that exists in both languages. */
export type Tx = { zh: string; en: string };

export const LOCALES: Locale[] = ['zh', 'en'];

export const DEFAULT_LOCALE: Locale = 'zh';

const STORAGE_KEY = 'owodarkness.locale';

const isLocale = (value: unknown): value is Locale => value === 'zh' || value === 'en';

export const getLocale = (): Locale => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // storage unavailable (private mode / file protocol) — fall back to default
  }
  return DEFAULT_LOCALE;
};

export const setLocale = (locale: Locale): void => {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // ignore: switching still works for this session
  }
};

export const toggleLocale = (locale: Locale): Locale => (locale === 'zh' ? 'en' : 'zh');

/** Resolve a bilingual value for the active locale. */
export const tx = (value: Tx, locale: Locale): string => value[locale];

/**
 * Mark copy as language-independent: it renders identically in every locale.
 * Used for entries that deliberately mix Chinese and English and should not be translated.
 */
export const fixed = (value: string): Tx => ({ zh: value, en: value });

export const applyDocumentLocale = (locale: Locale): void => {
  document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
};
