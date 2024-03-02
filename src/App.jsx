import classes from "./App.module.scss";
import Form from "./components/Form/Form";
import Layout from "./components/module/Layout/Layout";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className={classes.App}>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
