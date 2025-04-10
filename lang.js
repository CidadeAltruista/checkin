const traducoes = {
  pt: {
    primeiroNome: "Primeiro Nome",
    ultimoNome: "Último Nome",
    localNascimento: "Local de Nascimento",
    dataNascimento: "Data de Nascimento",
    nacionalidade: "Nacionalidade",
    idNumber: "Número de Identificação",
    countryDocument: "País do Documento",
    idType: "Tipo de Documento",
    countryResidence: "País de Residência",
    placeResidence: "Morada de Residência",
    arrivalTime: "Hora de Chegada",
    email: "Deixe o seu email se quiser manter contacto:",
    enviar: "Enviar",
    sucesso: "Check-in enviado com sucesso!",
    erroEnvio: "Erro ao enviar o formulário. Tente novamente.",
    erroFetch: "Erro de rede. Tente novamente.",
    erroFatura: "Por favor preencha os campos obrigatórios para a fatura.",
    faturaCheckbox: "Deseja fatura com contribuinte?",
    faturaSim: "Sim",
    faturaNao: "Não",
    nomeFatura: "Nome",
    nifFatura: "NIF *",
    moradaFatura: "Morada",
    codpostalFatura: "Código Postal",
    cidadeFatura: "Cidade",
    paisFatura: "País *",
    emailFatura: "Email para envio da fatura *",
    erroIdReserva: "ID da Reserva não identificado. Volte a abrir o link enviado ou contacte o anfitrião. Obrigado.",
    cabecalho: `
      <h2>Boletim de Alojamento</h2>
      <p>Em Portugal, assim como na maioria dos países europeus, todos os estabelecimentos de alojamento pago devem registar a estadia e recolher dados de identificação de todos os cidadãos, sejam eles de Estados-Membros da União Europeia ou de Países Terceiros, para comunicar ao Serviço de Estrangeiros e Fronteiras no prazo de três dias.</p>
      <p>Todos os dados pessoais fornecidos serão tratados em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD - UE 2016/679).</p>
      <p><strong><a href="https://alojamento-ninho.pt/Terms-Policies" target="_blank">Termos e Condições</a></strong></p>
    `
  },
  en: {
    primeiroNome: "First Name",
    ultimoNome: "Last Name",
    localNascimento: "Place of Birth",
    dataNascimento: "Date of Birth",
    nacionalidade: "Nationality",
    idNumber: "ID Number",
    countryDocument: "Country of Document",
    idType: "ID Type",
    countryResidence: "Country of Residence",
    placeResidence: "Place of Residence",
    arrivalTime: "Arrival Time",
    email: "Leave your email if you want to stay in touch!",
    enviar: "Submit",
    sucesso: "Check-in submitted successfully!",
    erroEnvio: "Error submitting the form. Please try again.",
    erroFetch: "Network error. Please try again.",
    erroFatura: "Please fill in the required invoice fields.",
    faturaCheckbox: "Would you like an invoice with tax ID?",
    faturaSim: "Yes",
    faturaNao: "No",
    nomeFatura: "Name",
    nifFatura: "Tax ID *",
    moradaFatura: "Address",
    codpostalFatura: "Postal Code",
    cidadeFatura: "City",
    paisFatura: "Country *",
    emailFatura: "Invoice email *",
    erroIdReserva: "Reservation ID not identified. Please reopen the link sent or contact the host. Thank you.",
    cabecalho: `
      <h2>Accommodation Bulletin</h2>
      <p>In Portugal, as well as in most European countries, all paid accommodation establishments need to record the stay and collect identification details from all citizens, whether they are from Member States of the European Union or Third Country Nationals, in order to communicate them within three days to the Immigration and Borders Service.</p>
      <p>Any personal data provided will be processed in accordance with the General Data Protection Regulation (GDPR - EU 2016/679).</p>
      <p><strong><a href="https://alojamento-ninho.pt/Terms-Policies" target="_blank">Terms and Conditions</a></strong></p>
    `
  },
  fr: {
    primeiroNome: "Prénom",
    ultimoNome: "Nom de famille",
    localNascimento: "Lieu de naissance",
    dataNascimento: "Date de naissance",
    nacionalidade: "Nationalité",
    idNumber: "Numéro d'identité",
    countryDocument: "Pays du document",
    idType: "Type de document",
    countryResidence: "Pays de résidence",
    placeResidence: "Lieu de résidence",
    arrivalTime: "Heure d'arrivée",
    email: "Laissez votre e-mail si vous souhaitez rester en contact !",
    enviar: "Envoyer",
    sucesso: "Formulaire envoyé avec succès !",
    erroEnvio: "Erreur lors de l'envoi du formulaire. Veuillez réessayer.",
    erroFetch: "Erreur de réseau. Veuillez réessayer.",
    erroFatura: "Veuillez remplir les champs obligatoires pour la facture.",
    faturaCheckbox: "Souhaitez-vous une facture avec numéro fiscal ?",
    faturaSim: "Oui",
    faturaNao: "Non",
    nomeFatura: "Nom",
    nifFatura: "Numéro fiscal *",
    moradaFatura: "Adresse",
    codpostalFatura: "Code Postal",
    cidadeFatura: "Ville",
    paisFatura: "Pays *",
    emailFatura: "Email pour l'envoi de la facture *",
    erroIdReserva: "Identifiant de réservation non identifié. Veuillez rouvrir le lien envoyé ou contacter l’hôte. Merci.",
    cabecalho: `
      <h2>Bulletin d'Hébergement</h2>
      <p>Au Portugal, comme dans la plupart des pays européens, tous les établissements d'hébergement payants doivent enregistrer le séjour et collecter les informations d'identification de tous les citoyens, qu'ils soient ressortissants de l'Union européenne ou de pays tiers, afin de les communiquer dans un délai de trois jours au Service de l'immigration et des frontières.</p>
      <p>Toutes les données personnelles fournies seront traitées conformément au Règlement Général sur la Protection des Données (RGPD - UE 2016/679).</p>
      <p><strong><a href="https://alojamento-ninho.pt/Terms-Policies" target="_blank">Conditions générales</a></strong></p>
    `
  },
  es: {
    primeiroNome: "Nombre",
    ultimoNome: "Apellido",
    localNascimento: "Lugar de nacimiento",
    dataNascimento: "Fecha de nacimiento",
    nacionalidade: "Nacionalidad",
    idNumber: "Número de Identificación",
    countryDocument: "País del documento",
    idType: "Tipo de documento",
    countryResidence: "País de residencia",
    placeResidence: "Lugar de residencia",
    arrivalTime: "Hora de llegada",
    email: "¡Deja tu correo si quieres mantener el contacto!",
    enviar: "Enviar",
    sucesso: "¡Formulario enviado correctamente!",
    erroEnvio: "Error al enviar el formulario. Inténtalo de nuevo.",
    erroFetch: "Error de red. Inténtalo de nuevo.",
    erroFatura: "Por favor, rellene los campos obligatorios para la factura.",
    faturaCheckbox: "¿Desea factura con NIF?",
    faturaSim: "Sí",
    faturaNao: "No",
    nomeFatura: "Nombre",
    nifFatura: "NIF *",
    moradaFatura: "Dirección",
    codpostalFatura: "Código Postal",
    cidadeFatura: "Ciudad",
    paisFatura: "País *",
    emailFatura: "Correo para envío de la factura *",
    erroIdReserva: "ID de reserva no identificado. Vuelva a abrir el enlace enviado o contacte con el anfitrión. Gracias.",
    cabecalho: `
      <h2>Boletín de Alojamiento</h2>
      <p>En Portugal, al igual que en la mayoría de los países europeos, todos los alojamientos de pago deben registrar la estancia y recopilar los datos de identificación de todos los ciudadanos, ya sean de Estados miembros de la Unión Europea o de países terceros, con el fin de comunicarlos en un plazo de tres días al Servicio de Inmigración y Fronteras.</p>
      <p>Todos los datos personales proporcionados serán tratados de acuerdo con el Reglamento General de Protección de Datos (RGPD - UE 2016/679).</p>
      <p><strong><a href="https://alojamento-ninho.pt/Terms-Policies" target="_blank">Términos y Condiciones</a></strong></p>
    `
  }
};
