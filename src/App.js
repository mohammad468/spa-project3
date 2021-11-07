import HomePage from "./components/HomePage";
import Porducts from "./components/Porducts";
import Blogs from "./components/Blogs";
import AboutUs from "./components/AboutUs";

import "./App.scss";
import "./sass/app.scss";

function App() {
  return (
    <div>
      <HomePage />
      <Porducts />
      <Blogs />
      <AboutUs />
    </div>
  );
}

export default App;
