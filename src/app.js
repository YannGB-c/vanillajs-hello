function ExcusesGenerator() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let randomwhos = who[Math.floor(Math.random() * who.length)];
  let randomverbs = action[Math.floor(Math.random() * action.length)];
  let randomwhats = what[Math.floor(Math.random() * what.length)];
  let randomtiming = when[Math.floor(Math.random() * when.length)];

  let excuse = `${randomwhos} ${randomverbs} ${randomwhats} ${randomtiming}`;

  document.getElementById("excuse").innerHTML = excuse;

  console.log(randomwhos, randomverbs, randomwhats, randomtiming);
};


document
  .getElementById("generate-button")
  .addEventListener("click", ExcusesGenerator);

// Llamar a la función
ExcusesGenerator();
