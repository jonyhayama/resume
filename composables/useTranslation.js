export const useTranslation = (lang = 'en_us') => {
  const messages = {}

  messages['pt-br'] = {
    'Print': 'Imprimir',
    'Age:': 'Idade:',
    'Marital Status:': 'Estado Civil:',
    'Married':  'Casado',
    'Contact': 'Contato',
    'Varginha - MG, BRA': 'Varginha - MG',
    'Interests': 'Interesses',
    'Art': 'Arte',
    'Reading': 'Leitura',
    'Coffee': 'Café'
  };

  return (string) => {
    if (lang === 'en_us') {
      return string;
    }

    return messages[lang]?.[string] || string;
  }
}
