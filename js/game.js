

//   Här väljer datorn ut vilket vapen den ska använda, det är slumpmässigt.
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "sten";
    case 1:
      return "sax";
    case 2:
      return "påse";
  }
};
//   Här har vi en variabel som tar emot datorns val!
const computerChoice = getComputerChoice();




// Här ser vi till att h2 får en variabel som vi kan använda oss av i javascripten. Med den så kommer vi att kunna printa text till html-en, beroende på vilket svar vårt spelande får.
const h2 = document.querySelector("h2");


// Den här kontrollerar sten-knappen. Jag hämtar den med id, och all kod körs vid registrering av klicket på knappen. (addEventListener-click)
const rock = document.getElementById("rock");
rock.addEventListener("click", () => {
  userChoice = "sten";
  console.log("Du klickade på sten");
  console.log(`Datorn klickade på ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
  // Här med append så loggar vi följade text direkt i html-en.
  h2.append(
    `Du valde sten, datorn valde ${computerChoice}. ${determineWinner(
      userChoice,
      computerChoice
    )}`
  );
  // Med desssa disable så gör vi att knapparna inte är klickbara efter att sten-knappen har klickats. Denna kod är med i de övriga två valen. Vill en spela igen så får man klicka på spela igen-knappen.
  scissor.disabled = true;
  paper.disabled = true;
  rock.disabled = true;
});

const scissor = document.getElementById("scissor");
scissor.addEventListener("click", () => {
  userChoice = "sax";
  console.log("Du klickade på sax");
  console.log(`Datorn klickade på ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
  h2.append(
    `Du valde sax, datorn valde ${computerChoice}. ${determineWinner(
      userChoice,
      computerChoice
    )}`
  );
  scissor.disabled = true;
  paper.disabled = true;
  rock.disabled = true;
});

const paper = document.getElementById("paper");
paper.addEventListener("click", () => {
  userChoice = "påse";
  console.log("Du klickade på påse");
  console.log(`Datorn klickade på ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
  h2.append(
    `Du valde påse, datorn valde ${computerChoice}. ${determineWinner(
      userChoice,
      computerChoice
    )}`
  );
  scissor.disabled = true;
  paper.disabled = true;
  rock.disabled = true;
});



// Här skapar vi en global variabel som tar emot valet av spelaren.
let userChoice;
// Här så jämför vi valet mellan spelaren och datorn, och returnerar därefter svaret som passar.
// Detta kallar vi i h2.append och loggar direkt till html-en så att spelaren kan se vem som spelade vad, och vem som vann utan att behöva rota i konsollen.
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Det blev oavgjort!";
  }
  if (userChoice === "sten") {
    if (computerChoice === "påse") {
      return "Datorn vann :(";
    } else {
      return "Grattis! Du vann!";
    }
  }
  if (userChoice === "påse") {
    if (computerChoice === "sax") {
      return "Datorn vann :(";
    } else {
      return "Grattis! Du vann!";
    }
  }
  if (userChoice === "sax") {
    if (computerChoice === "sten") {
      return "Datorn vann :(";
    } else {
      return "Grattis! Du vann!";
    }
  }
};
