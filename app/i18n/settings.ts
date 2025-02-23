export const fallbackLng = 'en';
export const languages = [fallbackLng, 'fr'];
export const defaultNS = 'home';
export const cookieName = 'i18next';

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS
) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
