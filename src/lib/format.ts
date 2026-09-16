import { ui } from '../data/ui';
import { tx, type Locale } from './i18n';

export const formatHours = (count: number, locale: Locale): string => tx(ui.library.hours, locale).replace('{n}', String(count));
