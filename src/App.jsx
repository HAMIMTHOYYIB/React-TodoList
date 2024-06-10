import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [arr, setArr] = useState([]);
  const [deletedArr, setDelete] = useState([]);

  const addTask = () => {
    if (todo) {
      setArr([...arr, todo]);
      setTodo("");
    }
  };
  const deleteTask = (i) => {
    const val = arr[i];
    setDelete([...deletedArr, val]);
    let setarray = arr.filter((val, index) => {
      return index !== i;
    });
    setArr(setarray);
  };

  return (
    <div className="main">
      <div className="inputDiv">
        <h1 className="heading">TODO</h1>
        <div className="form">
          <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          ></input>
          <button type="button" onClick={addTask}>
            Add
          </button>
        </div>
      </div>
      <div className="listDiv">
        <div className="todo">
          <h2>ToDo</h2>
          <br />
          <ul className="todolist">
            {arr.map((todo, i) => {
              return (
                <>
                  <li key={i} className="list">
                    <p>{todo}</p>
                    <button onClick={() => deleteTask(i)}></button>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div className="completed">
          <h2>Completed </h2>
          <ul className="todolist">
            {deletedArr.map((del, ind) => {
              return (
                <>
                  <li key={ind} className="list">
                    <p>{del}</p>
                    ✅
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
