export const useTranslation = (lang = 'en_us') => {
  const messages = {}

  messages['pt-br'] = {
    'Print': 'Imprimir'
  };

  return (string) => {
    if (lang === 'en_us') {
      return string;
    }

    return messages[lang]?.[string] || string;
  }
}
