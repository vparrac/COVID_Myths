import { useEffect, useState } from "react";

export default function UseSearchQuestions(query, pageNumber, changes) {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [questions, setquestions] = useState([]);
  const [hasMore, sethasMore] = useState(false);
  let url =
    "/preguntas/getPreguntaByPage/?page=" + pageNumber + "&query=" + query;

  useEffect(() => {
    if (changes) {
      if (changes != false) {
        console.log("Changes no false");
        if (changes.operationType == "update") {
          console.log("Changes update");
          console.log(changes);
          const e = questions.find((q) => {
            console.log("n", q._id);
            console.log("c", changes.fullDocument[0]._id);
            return q._id == changes.fullDocument[0]._id;
          });
          if (e) {
            console.log("Encontrado");
            const index = questions.indexOf(e);
            console.log("index", index);
            let cloneQuestions = [...questions];
            cloneQuestions[index]=changes.fullDocument[0];
            setquestions(cloneQuestions);
          }
        }

        if (changes.operationType == "insert") {
          console.log("Changes insert");
          const contenido = changes.fullDocument.contenido;
          console.log("Contenido: ", contenido);
          if (contenido.includes(query)) {
            console.log("Hay que ñadir la pregunta de primeras");
            const np = [changes.fullDocument].concat(questions);
            np.pop();
            console.log(np);
            setquestions(np);
          }
        }
      }
    }
  }, [changes]);

  useEffect(() => {
    setquestions([]);
  }, [query]);

  useEffect(() => {
    setloading(true);
    seterror(false);
    fetch(url, {
      method: "GET",
      qs: {
        page: pageNumber,
        query: query,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);

        setquestions((prevQuestions) => {
          setloading(false);
          return prevQuestions.concat(json.preguntas);
        });
        sethasMore(json.hasMore);
      });
  }, [query, pageNumber]);

  return { loading, hasMore, questions };
}
