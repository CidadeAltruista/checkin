let linguaAtual = "pt";

function selecionarLingua(lang) {
  linguaAtual = lang;
  atualizarTraducoes();
  atualizarBotoes();
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
    "label-email": t.email
  };
  for (const id in ids) {
    const el = document.getElementById(id);
    if (el) el.textContent = ids[id];
  }
  document.querySelector("#checkinForm button[type='submit']").textContent = t.enviar;
  document.getElementById("cabecalho-info").innerHTML = traducoes[linguaAtual].cabecalho;


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
  if (idres) {
    document.getElementById("id-reserva").value = idres;
    document.getElementById("id-reserva-texto").textContent = "ID Reserva: " + idres;
  }
}


function initForm() {
  selecionarLingua(linguaAtual);
  preencherIdReserva();
  ["nacionalidade-input", "country-document-input", "country-residence-input"]
  .forEach(preencherSelect);
}

function preencherSelect(id) {
  const select = document.getElementById(id);
  select.innerHTML = ""; // limpa opções existentes

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
function validarFormulario(e) {
  e.preventDefault();

  const form = document.getElementById("checkinForm");
  const data = new FormData(form);

  // Adiciona o token de validação
  data.append("token", "CHECKIN2024");

  const actionUrl = "https://script.google.com/macros/s/AKfycbwzPuRVxdr2_dPM51EOknFIL1_dONpyWSJL0yKMBCi2gCCchxCFc3cmLt0ub2LFgA09/exec"; // substitui aqui

  fetch(actionUrl, {
    method: "POST",
    body: data
  })
  .then(response => response.text())
  .then(result => {
    if (result.includes("Sucesso")) {
      alert("Check-in enviado com sucesso!");
      form.reset();
    } else {
      alert("Erro ao enviar: " + result);
    }
  })
  .catch(error => {
    alert("Erro ao enviar. Tente novamente.");
    console.error("Erro:", error);
  });

  return false;
}

