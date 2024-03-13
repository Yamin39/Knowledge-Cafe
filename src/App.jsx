import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="w-10/12 mx-auto max-w-[1440px] my-6 sm:my-12">
      <Header></Header>
      <main>
      <Blogs></Blogs>
      </main>
    </div>
  );
}

export default App;
