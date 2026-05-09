let xp = 0;
let level = 1;
let gameMinutes = 0;

const clinicalCases = [

  {
    description:
    "Paciente com ptose leve de sobrancelha e rugas dinâmicas na testa.",

    correct: "botox",

    protocol: `
      <h3>Toxina Botulínica</h3>

      <p>
      Aplicação sugerida em músculos frontais
      com avaliação individual.
      </p>

      <p>
      Ângulo sugerido: 45°
      </p>

      <p>
      Objetivo:
      suavizar contração muscular excessiva.
      </p>

      <p>
      Importante avaliar simetria facial
      e anatomia.
      </p>
    `
  },

  {
    description:
    "Paciente com cicatrizes de acne e textura irregular.",

    correct: "microagulhamento",

    protocol: `
      <h3>Microagulhamento</h3>

      <p>
      Estimulação de colágeno
      com drug delivery.
      </p>

      <p>
      Profundidade varia conforme região.
      </p>

      <p>
      Indicado para textura
      e cicatrizes.
      </p>
    `
  },

  {
    description:
    "Paciente com sulco nasogeniano profundo e perda de volume facial.",

    correct: "acido",

    protocol: `
      <h3>Ácido Hialurônico</h3>

      <p>
      Reposição volumétrica estratégica.
      </p>

      <p>
      Avaliar plano anatômico correto.
      </p>

      <p>
      Cuidado com vasos faciais.
      </p>
    `
  }

];

let currentCase = 0;

function startGame(){

  const clinicName =
    document.getElementById("clinicName").value;

  const doctorGender =
    document.getElementById("doctorGender").value;

  document
    .getElementById("loginScreen")
    .classList.add("hidden");

  document
    .getElementById("gameScreen")
    .classList.remove("hidden");

  document
    .getElementById("clinicTitle")
    .innerText = clinicName;

  document
    .getElementById("doctorTitle")
    .innerText =
      doctorGender === "dra"
      ? "Dra. Esteta"
      : "Dr. Esteta";

  loadCase();
}

function loadCase(){

  const caseData = clinicalCases[currentCase];

  document
    .getElementById("caseDescription")
    .innerHTML = `
      <p>${caseData.description}</p>
    `;

  document
    .getElementById("feedback")
    .innerHTML = "";

  document
    .getElementById("scientificInfo")
    .innerHTML =
      "Escolha um procedimento.";
}

function chooseTreatment(choice){

  const caseData = clinicalCases[currentCase];

  document
    .getElementById("scientificInfo")
    .innerHTML = caseData.protocol;

  if(choice === caseData.correct){

    xp += 20;

    if(xp >= level * 50){
      level++;
    }

    document
      .getElementById("feedback")
      .innerHTML =
      "✅ Conduta correta!";

  }else{

    document
      .getElementById("feedback")
      .innerHTML =
      "❌ Reveja anatomia e protocolo.";
  }

  document
    .getElementById("xp")
    .innerText = xp;

  document
    .getElementById("level")
    .innerText = level;
}

function nextCase(){

  currentCase++;

  if(currentCase >= clinicalCases.length){
    currentCase = 0;
  }

  loadCase();
}

setInterval(()=>{

  const now = new Date();

  document
    .getElementById("clock")
    .innerText =
    now.toLocaleTimeString("pt-BR");

  document
    .getElementById("date")
    .innerText =
    now.toLocaleDateString("pt-BR");

},1000);

setInterval(()=>{

  gameMinutes++;

  document
    .getElementById("gameTime")
    .innerText = gameMinutes;

},60000);