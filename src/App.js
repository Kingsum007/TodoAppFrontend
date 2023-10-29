import { useState, useEffect } from "react";
import ToDo from "./components/ToDo";
import { addToDo, deleteTodo, getAllToDo, updateTodo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);
  const updateMode = (_id, text) => {
    setIsUpdated(true);
    setText(text);
    setToDoId(_id);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add ToDo...."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdated
                ? () => updateTodo(toDoId, text, setToDo, setText, setIsUpdated)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdated ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={()=> deleteTodo(item._id,setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
