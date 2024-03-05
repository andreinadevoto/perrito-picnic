import "./App.css";
import { useState, useEffect } from "react";

const preguntas = [
  {
    id: 0,
    pregunta: "¿Los perros pueden comer chocolate?",
    opcion1: "Si",
    opcion2: "No",
    respuesta: "No",
    explicacion:
      "Los perros no pueden comer chocolate porque contiene teobromina, que es tóxica para ellos.",
  },
  {
    id: 1,
    pregunta: "¿Los perros pueden comer uvas?",
    opcion1: "Si",
    opcion2: "No",
    respuesta: "No",
    explicacion:
      "Los perros no pueden comer uvas porque pueden causar insuficiencia renal en algunos perros.",
  },
  {
    id: 2,
    pregunta: "¿Los perros pueden comer pollo?",
    opcion1: "Si",
    opcion2: "No",
    respuesta: "Si",
    explicacion: "Los perros si pueden comer pollo, cocido y sin huesos.",
  },
  {
    id: 3,
    pregunta: "¿Los perros pueden comer carne?",
    opcion1: "Si",
    opcion2: "No",
    respuesta: "Si",
    explicacion: "Los perros pueden comer carne magra, cocida y sin huesos",
  },
  {
    id: 4,
    pregunta: "¿Los perros pueden comer palta?",
    opcion1: "Si",
    opcion2: "No",
    respuesta: "No",
    explicacion:
      "Los perros no pueden comer palta porque contiene una sustancia llamada persin que puede ser perjudicial.",
  },
  {
    id: 5,
    pregunta: "¿Los perros pueden comer zanahoria?",
    opcion1: "Si",
    opcion2: "No",
    respuesta: "Si",
    explicacion:
      "Los perros pueden comer vegetales, zanahorias, guisantes, judías verdes, calabazas, etc. Cocidos o crudos en trozos pequeños.",
  },
  {
    id: 6,
    pregunta: "¿Los perros pueden comer ajo y cebolla?",
    opcion1: "Si",
    opcion2: "No",
    respuesta: "No",
    explicacion:
      "Los perros no pueden comer ajo ni cebolla porque pueden causar daño a los glóbulos rojos.",
  },
  {
    id: 7,
    pregunta: "¿Los perros pueden comer arroz y pastas?",
    opcion1: "Si",
    opcion2: "No",
    respuesta: "Si",
    explicacion:
      "Los perros pueden comer arroz y pastas, cocidos y sin aliños.",
  },
  {
    id: 8,
    pregunta: "¿Los perros pueden comer huesos cocidos?",
    opcion1: "Si",
    opcion2: "No",
    respuesta: "No",
    explicacion:
      "Los perros no pueden comer huesos porque pueden astillarse y causar obstrucciones o daño intestinal.",
  },
  {
    id: 9,
    pregunta: "¿Los perros pueden comer pescado?",
    opcion1: "Si",
    opcion2: "No",
    respuesta: "Si",
    explicacion: "Los perros pueden comer pescado cocido y sin espinas.",
  },
  {
    id: 10,
    pregunta: "¿Los perros pueden comer chocolate blanco?",
    opcion1: "Si",
    opcion2: "No",
    respuesta: "No",
    explicacion:
      "Aunque el chocolate blanco contiene menos teobromina que otros tipos de chocolate, aún puede ser peligroso para los perros y es mejor evitarlo.",
  },
  {
    id: 11,
    pregunta: "¿Los perros pueden comer pan?",
    opcion1: "Si",
    opcion2: "No",
    respuesta: "Si",
    explicacion:
      "Los perros pueden comer pan en pequeñas cantidades como un tratamiento ocasional, pero no debe ser una parte regular de su dieta.",
  },
  {
    id: 12,
    pregunta: "¿Los perros pueden comer alimentos picantes?",
    opcion1: "Si",
    opcion2: "No",
    respuesta: "No",
    explicacion:
      "Los alimentos picantes pueden irritar el estómago del perro, causando malestar y problemas digestivos.",
  },
  {
    id: 13,
    pregunta: "¿Los perros pueden comer lácteos como el queso?",
    opcion1: "Si",
    opcion2: "No",
    respuesta: "Si",
    explicacion:
      "Algunos perros pueden tolerar pequeñas cantidades de lácteos como el queso, pero otros pueden ser intolerantes a la lactosa.",
  },
  {
    id: 14,
    pregunta: "¿Los perros pueden comer huevo?",
    opcion1: "Si",
    opcion2: "No",
    respuesta: "Si",
    explicacion:
      "Los perros pueden comer huevo cocido, ya que es una excelente fuente de proteínas y nutrientes esenciales. Sin embargo, los huevos crudos pueden ser perjudiciales debido al riesgo de salmonela.",
  },
  {
    id: 15,
    pregunta: "¿Los perros pueden comer manzanas?",
    opcion1: "Si",
    opcion2: "No",
    respuesta: "Si",
    explicacion:
      "Las manzanas son seguras y saludables para los perros, siempre que se les retiren las semillas y el corazón, ya que pueden contener trazas de cianuro.",
  },
  {
    id: 16,
    pregunta: "¿Los perros pueden comer comida para gatos?",
    opcion1: "Si",
    opcion2: "No",
    respuesta: "No",
    explicacion:
      "La comida para gatos está formulada específicamente para las necesidades nutricionales de los gatos, que son diferentes a las de los perros.",
  },
  {
    id: 17,
    pregunta: "¿Los perros pueden comer alimentos con cafeína?",
    opcion1: "Si",
    opcion2: "No",
    respuesta: "No",
    explicacion:
      "La cafeína es peligrosa para los perros y puede causar problemas nerviosos, cardiacos y hasta la muerte.",
  },
  {
    id: 18,
    pregunta: "¿Los perros pueden comer papas crudas?",
    opcion1: "Si",
    opcion2: "No",
    respuesta: "No",
    explicacion:
      "Las papas crudas pueden ser difíciles de digerir para los perros y contienen solanina, una sustancia que puede ser tóxica en grandes cantidades.",
  },
  {
    id: 19,
    pregunta: "¿Los perros pueden tener una dieta vegana?",
    opcion1: "Si",
    opcion2: "No",
    respuesta: "No",
    explicacion:
      "Los perros necesitan proteínas animales y otros nutrientes que no se encuentran en una dieta vegana para mantenerse saludables. Es importante consultar a un veterinario antes de hacer cambios significativos en la dieta de un perro.",
  },
];

var arrayAleatorio = [];

function generarNumerosAleatorios() {
  var numeros = [];

  while (numeros.length < 10) {
    var numeroAleatorio = Math.floor(Math.random() * 19); // Genera un número aleatorio entre 0 y 25

    // Verifica si el número aleatorio no está en el array
    if (numeros.indexOf(numeroAleatorio) === -1) {
      numeros.push(numeroAleatorio); // Agrega el número aleatorio al array
    }
  }

  return numeros;
}

arrayAleatorio = generarNumerosAleatorios();
console.log(arrayAleatorio);

function App() {
  const [iteracion, setIteracion] = useState(0);
  const [numPregunta, setNumPregunta] = useState(arrayAleatorio[0]);
  const [displayQuestion, setDisplayQuestion] = useState(true);
  const [displayOptions, setDisplayOptions] = useState(true);
  const [displayResult, setDisplayResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  const handleSubmit = (event) => {
    console.log("respuesta", iteracion);
    event.preventDefault();
    setIteracion((it) => it + 1);
    localStorage.setItem(numPregunta, event.target.value);
    setNumPregunta(() => arrayAleatorio[iteracion + 1]);
  };

  function handleSubmitTest() {
    console.log("enviado");
    const answers = [];
    for (let i = 0; i < 10; i++) {
      // console.log(localStorage.getItem(i));
      answers.push(localStorage.getItem(arrayAleatorio[i]));
      console.log(answers[i], preguntas[arrayAleatorio[i]].respuesta);
      if (answers[i] === preguntas[arrayAleatorio[i]].respuesta) {
        setCorrectAnswers((corAnsw) => corAnsw + 1);
      } else if (answers[i] !== preguntas[arrayAleatorio[i]].respuesta) {
        setIncorrectAnswers((inc) => [...inc, arrayAleatorio[i]]);
      }
    }

    console.log("respuetas", answers);
    console.log("numero de respuestas correctas", correctAnswers);
    setDisplayQuestion(false);
    setDisplayOptions(false);
    setDisplayResult(true);
  }

  return (
    <div className="App">
      <div className="container-header">
        <div className="App-header">
          <p>¿Que puede comer tu perrito?</p>
        </div>
      </div>
      <div className="container-question">
        {displayQuestion && iteracion < 10 && (
          <div>
            <div className="question">
              <p>{preguntas[numPregunta].pregunta}</p>
              <div className="answer">
                <button
                  id={`${preguntas[numPregunta].id}-opcion1`}
                  name={`${preguntas[numPregunta].id}-opcion1`}
                  value={preguntas[numPregunta].opcion1}
                  onClick={handleSubmit}
                >
                  {preguntas[numPregunta].opcion1}
                </button>
                <button
                  id={`${preguntas[numPregunta].id}-opcion2`}
                  name={`${preguntas[numPregunta].id}-opcion2`}
                  value={preguntas[numPregunta].opcion2}
                  onClick={handleSubmit}
                >
                  {preguntas[numPregunta].opcion2}
                </button>
              </div>
            </div>
          </div>
        )}

        {displayOptions && iteracion === 10 && (
          <div className="submit">
            <button className="button-submit" onClick={handleSubmitTest}>
              Obtener resultado del test
            </button>
          </div>
        )}

        {displayResult && correctAnswers === 10 && (
          <div className="results">
            <div>Respuestas correctas: {correctAnswers}/10</div>
            <div>
              Felicitaciones!!! ¡Eres un experto en cuidado de perritos!
            </div>
          </div>
        )}
        {displayResult && correctAnswers < 10 && correctAnswers >= 7 && (
          <div className="results">
            <div>Respuestas correctas: {correctAnswers}/10</div>
            <div>
              ¡Muy bien! ¡Sabes mucho de la alimentacion de los perritos!
            </div>
          </div>
        )}
        {displayResult && correctAnswers < 7 && correctAnswers >= 4 && (
          <div className="results">
            <div>Respuestas correctas: {correctAnswers}/10</div>
            <div>¡Vas por buen camino, debes aprender más!</div>
          </div>
        )}
        {displayResult && correctAnswers < 4 && (
          <div className="results">
            <div>Respuestas correctas: {correctAnswers}/10</div>
            <div>¡Todavía no puedes adoptar una mascota!</div>
          </div>
        )}
        {displayResult && correctAnswers !== 10 && (
          <div className="container-results">
            <ul>
              {incorrectAnswers.map((i) => (
                <li>{preguntas[i].explicacion}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
