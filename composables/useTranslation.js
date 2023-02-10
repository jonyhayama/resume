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
    'Coffee': 'Café',
    'Work Experience': 'Experiência Profissional',
    'Aug/2020 ~ Current': 'Ago/2020 ~ Atual',
    'Developer at': 'Desenvolvedor na',
    'External Client: TeraKeet, mainly workwing with': 'Cliente Externo: TeraKeet, trabalhando principalmente com',
    'Jan/2016 ~ Current': 'Jan/2016 ~ Atual',
    'Freelance PHP Developer': 'Programador PHP Freelancer',
    'Website creation using': 'Criação de Sites em',
    'Apr/2019 ~ Aug/2020': 'Abr/2019 ~ Ago/2020',
    'São Paulo-SP, BRA': 'São Paulo-SP',
    'Ruby on Rails Developer at': 'Programador Ruby on Rails na',
    'Startup Accelerator': 'Aceleradora de Startups',
    'Engaged in: Doutor Direto, Influenciae, 99 Fórmulas, YouShow, Distrito': 'Envolvido em: Doutor Direto, Influenciae, 99 Fórmulas, YouShow, Distrito',
    'Dec/2018 ~ Mar/2019': 'Dez/2018 ~ Mar/2019',
    'Curitiba-PR, BRA': 'Curitiba-PR',
    'PHP Developer at': 'Programador PHP em',
    'Payment Process Startup': 'Startup de Processamento de Pagamentos',
    'Dev Finance Team': 'Equipe: Dev Finance',
    'Sep/2015 ~ Dec/2015': 'Set/2015 ~ Dez/2015',
    'Rio do Sul-SC, BRA': 'Rio do Sul-SC',
    'Software House': 'Fábrica de Software',
    'Sector: Fiscal Web': 'Setor: Fiscal Web',
    'Apr/2014 ~ Sep/2015': 'Abr/2014 ~ Set/2015',
    'Varginha-MG, BRA': 'Varginha-MG',
    'Professor at': 'Professor no',
    'University': 'Centro Universitário',
    'Subjects: Object Oriented Programming I and II, Algorithms and Programming Logic, Computing applied to logistics': 'Disciplinas já lecionadas: Programação Orientada a Objetos I e II, Algoritmos e Lógica de Programação, Informática Aplicada a Logística',
    'Oct/2012 ~ Ago/2015': 'Out/2012 ~ Ago/2015',
    'Digital Agency': 'Agência Digital',
    'Engaged in: americapizza.com.br, texhyundai.com.br, aciv.com.br, lojastal.com.br, reidoseletronicos.com.br, among others.': 'Envolvido em: americapizza.com.br, texhyundai.com.br, aciv.com.br, lojastal.com.br, reidoseletronicos.com.br, entre outros.',
    'Mar/2011 ~ Oct/2012': 'Mar/2011 ~ Out/2012',
    'Ad Agency': 'Agência de Publicidade',
    'Engaged in: componente3.com.br, borgesefonseca.com.br, among others.': 'Envolvido em: componente3.com.br, borgesefonseca.com.br, entre outros.',
    'Mar/2011 ~ Ago/2011': 'Mar/2011 ~ Ago/2011',
    'Engaged in: paroquiadodivino.com.br, topcarlavras.com.br, among others.': 'Envolvido em: paroquiadodivino.com.br, topcarlavras.com.br, entre outros.',
    'Apr/2007 ~ Mar/2012': 'Abr/2007 ~ Mar/2012',
    'Program Assistant at': 'Agente de Intercambios na',
    'Travel Agency': 'Agência de Intercambios',
    'Duties: Gather and revise documents, send documents to Visa Sponsors, help participants to schedule their visa appointments and fill out the required documents.': 'Atribuições: Processar documentação junto a parceiros estrangeiros, orientar e auxiliar participantes na obtenção de visto e vendas.',
    'Mar/2004 ~ Dez/2006': 'Mar/2004 ~ Dez/2006',
    'Abr/2007 ~ Set/2007': 'Abr/2007 ~ Set/2007',
    'Teacher at': 'Instrutor na',
    'Computing School': 'Escola de Informática',
    'Subjects: Windows, MS Office, CorelDraw, Photoshop, Webdesign': 'Disciplinas Lecionadas: Windows, MS Office, CorelDraw, Photoshop, Webdesign'
  };

  return (string) => {
    if (lang === 'en_us') {
      return string;
    }

    return messages[lang]?.[string] || string;
  }
}
