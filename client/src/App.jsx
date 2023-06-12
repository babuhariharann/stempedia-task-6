import { Routes, Route } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AddTodo />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
