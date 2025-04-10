let linguaAtual = "pt";

function selecionarLingua(lang) {
  linguaAtual = lang;
  atualizarTraducoes();
  atualizarBotoes();
  preencherIdReserva();
}

function atualizarTraducoes() {
  const t = traducoes[linguaAtual];
  const ids = {
    "label-primeiro-nome": t.primeiroNome,
    "label-ultimo-nome": t.ultimoNome,
    "label-local-nascimento": t.localNascimento,
    "label-data-nascimento": t.dataNascimento,
    "label-nacionalidade": t.nacionalidade,
    "label-id-number": t.idNumber,
    "label-country-document": t.countryDocument,
    "label-id-type": t.idType,
    "label-country-residence": t.countryResidence,
    "label-place-residence": t.placeResidence,
    "label-arrival-time": t.arrivalTime,
    "label-email": t.email,
    "label-fatura-checkbox": t.faturaCheckbox,
    "label-nome-fatura": t.nomeFatura,
    "label-nif-fatura": t.nifFatura,
    "label-morada-fatura": t.moradaFatura,
    "label-codpostal-fatura": t.codpostalFatura,
    "label-cidade-fatura": t.cidadeFatura,
    "label-pais-fatura": t.paisFatura,
    "label-email-fatura": t.emailFatura
  };
  for (const id in ids) {
    const el = document.getElementById(id);
    if (el) el.textContent = ids[id];
  }
  document.querySelector("#checkinForm button[type='submit']").textContent = t.enviar;
  document.getElementById("cabecalho-info").innerHTML = traducoes[linguaAtual].cabecalho;
  document.getElementById("label-fatura-checkbox").textContent = t.faturaCheckbox;
  document.getElementById("btn-fatura-sim").textContent = t.faturaSim;
  document.getElementById("btn-fatura-nao").textContent = t.faturaNao;



}

function atualizarBotoes() {
  ["pt", "en", "fr", "es"].forEach(l => {
    document.getElementById("btn-" + l).classList.remove("selected");
  });
  document.getElementById("btn-" + linguaAtual).classList.add("selected");
}

function validarFormulario(e) {
  const email = document.getElementById("email-input").value;
  if (email && !/^\S+@\S+\.\S+$/.test(email)) {
    alert("Email inválido.");
    e.preventDefault();
    return false;
  }
  return true;
}

function preencherIdReserva() {
  const params = new URLSearchParams(window.location.search);
  const idres = params.get("idres") || params.get("idReserva");
  const input = document.getElementById("id-reserva");
  const textoId = document.getElementById("id-reserva-texto");
  const erroDiv = document.getElementById("erro-idreserva");
  const formulario = document.getElementById("checkinForm");

  const idValido = idres && /^\d{8,9}$/.test(idres);

  if (idValido) {
    input.value = idres;
    if (textoId) textoId.textContent = "ID Reserva: " + idres;
    if (formulario) formulario.style.display = "block";
    if (erroDiv) erroDiv.style.display = "none";
  } else {
    if (formulario) formulario.style.display = "none";
    if (erroDiv) {
      erroDiv.textContent = traducoes[linguaAtual]?.erroIdReserva || "ID da Reserva não identificado. Volte a abrir o link enviado ou contacte o anfitrião. Obrigado.";
      erroDiv.style.display = "block";
    }
  }
}




function initForm() {
  selecionarLingua(linguaAtual);
  preencherIdReserva();
  ["nacionalidade-input", "country-document-input", "country-residence-input", "pais-fatura"]
  .forEach(preencherSelect);
}

function preencherSelect(id) {
  const select = document.getElementById(id);
  if (!select) return;

  select.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "--";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  select.appendChild(defaultOption);

  countryList.forEach(pais => {
    const option = document.createElement("option");
    option.value = pais;
    option.textContent = pais;
    select.appendChild(option);
  });
}



function selecionarFatura(querFatura) {
  const simBtn = document.getElementById("btn-fatura-sim");
  const naoBtn = document.getElementById("btn-fatura-nao");
  const secaoFatura = document.getElementById("secao-fatura");

  if (querFatura) {
    simBtn.classList.add("selected");
    naoBtn.classList.remove("selected");
    secaoFatura.style.display = "block";
  } else {
    simBtn.classList.remove("selected");
    naoBtn.classList.add("selected");
    secaoFatura.style.display = "none";
  }

  // Guardar valor internamente
  document.getElementById("fatura-opcao").setAttribute("data-quer-fatura", querFatura ? "sim" : "nao");
}


function validarFormulario(e) {
  e.preventDefault();

  const form = document.getElementById("checkinForm");
  const data = new FormData(form);
  const t = traducoes[linguaAtual];

  // Verificação da data de nascimento
  const dataNascimentoInput = document.getElementById("data-nascimento-input");
  const dataNascimento = new Date(dataNascimentoInput.value);
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0); // Ignora horas para comparar só datas

  if (dataNascimento > hoje) {
    alert(t.erroDataNascimento || "A data de nascimento não pode ser no futuro.");
    dataNascimentoInput.focus();
    return false;
  }

  // Validação extra se quiser fatura
  const querFatura = document.getElementById("fatura-opcao").getAttribute("data-quer-fatura") === "sim";
  if (querFatura) {
    const nif = document.getElementById("nif-fatura").value.trim();
    const pais = document.getElementById("pais-fatura").value.trim();
    const emailFatura = document.getElementById("email-fatura").value.trim();

    if (!nif || !pais || !emailFatura) {
      alert(t.erroFatura || "Por favor preencha os campos obrigatórios para a fatura.");
      return false;
    }

    data.append("desejaFatura", "Sim");
  } else {
    data.append("desejaFatura", "Não");
  }

  // Adiciona token de segurança
  data.append("token", "CHECKIN2024");

  const actionUrl = "https://script.google.com/macros/s/AKfycbxkSoOm0QntjZrC1ukYhGmBkY4eMhCB8c-APF3CMZpT9Vczm0xbYw3mr87PUfZVe5ZV/exec";

  fetch(actionUrl, {
    method: "POST",
    body: data
  })
    .then(response => response.text())
    .then(result => {
      if (result.includes("Sucesso")) {
        alert(t.sucesso || "Check-in enviado com sucesso!");

        const langAntesReset = linguaAtual;
        form.reset();
        selecionarLingua(langAntesReset);

        ["nacionalidade-input", "country-document-input", "country-residence-input", "pais-fatura"].forEach(id => {
          const select = document.getElementById(id);
          if (select) select.selectedIndex = 0;
        });

        const idText = document.getElementById("id-reserva-texto");
        if (idText) idText.textContent = "";

        mostrarCamposFatura(); // esconde secção de fatura
      } else {
        alert(t.erroEnvio || "Erro ao enviar o formulário.");
      }
    })
    .catch(error => {
      alert(t.erroFetch || "Erro de rede.");
      console.error("Erro:", error);
    });

  return false;
}



document.addEventListener("DOMContentLoaded", () => {
  preencherIdReserva();
  ["nacionalidade-input", "country-document-input", "country-residence-input", "pais-fatura"].forEach(preencherSelect);
});
