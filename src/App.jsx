import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="w-10/12 mx-auto max-w-[1440px] my-6 sm:my-12">
      <Header></Header>
      <main className="flex flex-col-reverse md:flex-row my-8">
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </main>
    </div>
  );
}

export default App;
