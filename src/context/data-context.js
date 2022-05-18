import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [tasklist, setTasklist] = useState([]);
  const [newTaskMenu, setNewTaskMenu] = useState(false);
  const [taskInputs, setTaskInputs] = useState({
    title: "",
    description: "",
    tag: "",
    duration: "",
  });
  const taskCollection = collection(db, "tasks");

  useEffect(() => {
    const getTasks = async () => {
      const data = await getDocs(taskCollection);
      setTasklist(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTasks();
  }, [tasklist]);

  const createTask = async () => {
    await addDoc(taskCollection, {
      title: taskInputs.title,
      description: taskInputs.description,
      tag: taskInputs.tag,
      duration: taskInputs.duration,
    });
    setNewTaskMenu(false);
  };

  return (
    <DataContext.Provider
      value={{
        tasklist,
        setTasklist,
        newTaskMenu,
        setNewTaskMenu,
        taskInputs,
        setTaskInputs,
        createTask,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
