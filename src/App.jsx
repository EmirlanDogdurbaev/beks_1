import { useState } from "react";
import classes from "./App.module.scss";
import Form from "./components/Form/Form";
import Layout from "./components/module/Layout/Layout";
import { Route, Routes } from 'react-router-dom';
function App() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
    console.log("Form toggled:", showForm);
  };
  return (
    <div className={classes.App}>
      <Layout>
        {/* <Routes>
          <Route path="/form" element={<Form />} />
        </Routes> */}
      </Layout>
    </div>
  );
}

export default App;
