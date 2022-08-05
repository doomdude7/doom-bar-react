import "./App.module.css";
import { Footer } from "./components/common/footer/Footer.js";
import { Header } from "./components/common/header/Header.js";
import { Cursor } from "./components/common/cursor/Cursor.js";
import { HomePage } from "./components/home-page/HomePage.js";
// import { AgeGateModal } from "./components/common/age-gate/AgeGateModal.js";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <AgeGateModal /> */}
      <HomePage />
      <Footer />
      <Cursor />
    </div>
  );
}

export default App;
