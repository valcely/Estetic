let xp = 0;

let level = 1;

let coins = 100;

const cases = [

{

  patient:"Ana Paula",

  age:"36 anos",

  issue:"Rugas frontais e flacidez",

  image:
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",

  correct:"botox",

  science:`

  <h3>Toxina Botulínica</h3>

  <p>
  Objetivo:
  suavização de rugas dinâmicas.
  </p>

  <p>
  Aplicação intramuscular superficial.
  </p>

  <p>
  Ângulo sugerido:
  45°.
  </p>

  <p>
  Avaliar:
  simetria e anatomia facial.
  </p>

  `
},

{

  patient:"Lucas Martins",

  age:"29 anos",

  issue:"Cicatrizes atróficas",

  image:
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",

  correct:"micro",

  science:`

  <h3>Microagulhamento</h3>

  <p>
  Estímulo de colágeno.
  </p>

  <p>
  Indicado para:
  textura irregular.
  </p>

  <p>
  Técnica:
  múltiplas punturas controladas.
  </p>

  `
}

];

let currentCase = 0;

function playClick(){

  document
  .getElementById("clickSound")
  .play();

}

function startGame(){

  playClick();

  const doctor =
  document
  .getElementById("doctorName")
  .value;

  const profession =
  document
  .getElementById("profession")
  .value;

  const clinic =
  document
  .getElementById("clinicName")
  .value;

  document
  .getElementById("loginScreen")
  .classList.add("hidden");

  document
  .getElementById("gameScreen")
  .classList.remove("hidden");

  document
  .getElementById("doctorDisplay")
  .innerText =
  `Dra. ${doctor}`;

  document
  .getElementById("doctorCardName")
  .innerText =
  `Dra. ${doctor}`;

  document
  .getElementById("professionDisplay")
  .innerText =
  profession;

  document
  .getElementById("doctorCardProfession")
  .innerText =
  profession;

  document
  .getElementById("clinicDisplay")
  .innerText =
  clinic;

  loadCase();

}

function loadCase(){

  const data =
  cases[currentCase];

  document
  .getElementById("patientName")
  .innerText =
  data.patient;

  document
  .getElementById("patientAge")
  .innerText =
  `${data.age} • Fototipo III`;

  document
  .getElementById("patientIssue")
  .innerText =
  data.issue;

  document
  .getElementById("patientImage")
  .src =
  data.image;

  document
  .getElementById("zoomFace")
  .src =
  data.image;

  document
  .getElementById("scienceContent")
  .innerHTML =
  `
  <p>
  Selecione um procedimento.
  </p>
  `;

}

function chooseProcedure(choice){

  playClick();

  const data =
  cases[currentCase];

  document
  .getElementById("scienceContent")
  .innerHTML =
  data.science;

  if(choice === data.correct){

    xp += 30;

    coins += 20;

    if(xp >= level * 100){

      level++;

    }

    document
    .getElementById("feedback")
    .innerText =
    "✅ Procedimento executado com sucesso.";

  }else{

    document
    .getElementById("feedback")
    .innerText =
    "❌ Técnica incorreta para este caso.";

  }

  document
  .getElementById("xp")
  .innerText =
  xp;

  document
  .getElementById("coins")
  .innerText =
  coins;

  document
  .getElementById("level")
  .innerText =
  level;

  setTimeout(()=>{

    currentCase++;

    if(currentCase >= cases.length){

      currentCase = 0;

    }

    loadCase();

  },4000);

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