import "./App.css";
import { useState } from "react";

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
];

function App() {
  const [numPregunta, setNumPregunta] = useState(0);
  const [displayQuestion, setDisplayQuestion] = useState(true);
  const [displayOptions, setDisplayOptions] = useState(true);
  const [displayResult, setDisplayResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(numPregunta, event.target.value);
    setNumPregunta((preg) => preg + 1);
  };

  function handleSubmitTest() {
    const answers = [];

    for (let i = 0; i < 10; i++) {
      answers.push(localStorage.getItem(i));
      console.log(answers[i], preguntas[i].respuesta);
      if (answers[i] === preguntas[i].respuesta) {
        setCorrectAnswers((corAnsw) => corAnsw + 1);
      } else if (answers[i] !== preguntas[i].respuesta) {
        setIncorrectAnswers((inc) => [...inc, i]);
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
        {displayQuestion && numPregunta <= 9 && (
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

        {displayOptions && numPregunta > 9 && (
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
