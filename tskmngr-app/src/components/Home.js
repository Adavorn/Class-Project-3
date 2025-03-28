import { useEffect, useState } from "react";

const initial_todo_items = [
  { id: 1, name: "item one", completed: false },
  { id: 2, name: "item two", completed: false },
  { id: 3, name: "item three", completed: true },
  { id: 4, name: "item four", completed: false },
  { id: 5, name: "item five", completed: false },
];

function Home() {
  const [tmplist, setTmpList] = useState(initial_todo_items);
  const [todolist, setTodoList] = useState(initial_todo_items);
  const [txtitem, setItem] = useState("");
  const [msgText, setMsg] = useState("");
  const [filter, setFilter] = useState("all");

  const handleAddNewItem = (e) => {
    e.preventDefault();

    if (txtitem.trim().length === 0) {
      setMsg("* please enter a valid item name");
      return;
    }

    const _newitem = { id: new Date().getTime(), name: txtitem, completed: false };

    setTmpList((prevval) => {
      const _lst = [...prevval, _newitem];
      setTodoList(_lst); 
      return _lst;
    });

    setMsg("# item added");
    setItem("");
  };

  const handleDelete = (e, id) => {
    e.preventDefault();

    const updatedList = tmplist.filter((item) => item.id !== id);
    setTmpList(updatedList);
    setTodoList(updatedList);
    setMsg(`# item deleted ${id}`);
  };

  const handleCheckboxChange = (id) => {
    const updatedList = tmplist.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTmpList(updatedList);
    setTodoList(updatedList);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);

    if (filter === "all") {
      setTodoList(tmplist);
    } else if (filter === "complete") {
      setTodoList(tmplist.filter((item) => item.completed));
    } else if (filter === "in-complete") {
      setTodoList(tmplist.filter((item) => !item.completed));
    }
  };

  const handleClearInput = () => {
    setItem("");
  };

  useEffect(() => {
    console.log("#App::Home page load");
    console.log("---tmplist", tmplist);
    console.log("---todolist", todolist);
  }, [tmplist, todolist]);

  return (
    <>
      <div className="app-center-page">
        <h3>Demo Task Manager App v1.0.6</h3>
        <p></p>
        <div>
          <input
            value={txtitem}
            type="text"
            onChange={(e) => setItem(e.target.value)}
            maxLength={25}
            placeholder="* add item"
          />
          {" "}
          <button onClick={handleAddNewItem}>Add</button> {" "}
          <a href="#" onClick={handleClearInput}>clear</a>
          <p></p>
        </div>
        <p>{msgText}</p>
        <br />
        <div>
          <a href="#" onClick={() => handleFilterChange("all")}>all</a> {" | "}
          <a href="#" onClick={() => handleFilterChange("complete")}>complete</a> {" | "}
          <a href="#" onClick={() => handleFilterChange("in-complete")}>in-complete</a>
        </div>
        <br />
        <div>
          {todolist && todolist.map((item) => (
            <p key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCheckboxChange(item.id)}
              />
              {" "}
              <span>{item.name}</span>
              {" "}
              <button onClick={(e) => handleDelete(e, item.id)}>x</button>
            </p>
          ))}
        </div>
        <p></p>
        <p>Footer @ 2025</p>
      </div>
    </>
  );
}

export default Home