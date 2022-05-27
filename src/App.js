import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col w-full h-screen justify-between ">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
