import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Lablist from "./components/LabsList";
import ThemeProvider from "./providers/ThemeProvider";


function App() {
  return (
    <>
      <div>
        <ThemeProvider>
          <Header />
          <div className="main_page">
            <Lablist />
            <Content />
          </div>
          <Footer />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;