import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const Emoji = [
    "",
    "👾",
    "😲",
    "💻",
    "🧁",
    "🤤",
    "😮",
    "🤑",
    "🐱",
    "😂",
    "🤠",
    "😱",
    "🌖",
    "🐋",
    "😠",
    "🏹",
    "🥂",
    "🥳",
    "🙂 ",
    "😋",
    "🍔",
    "💣",
    "🎂",
    "🦇",
    "😉",
    "🤐",
    "🍆",
  ];

  document.title = "JJester | " + Emoji[Math.floor(Math.random() * 26) + 1];

  return (
    <div className="flex flex-col w-full h-screen justify-between ">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
