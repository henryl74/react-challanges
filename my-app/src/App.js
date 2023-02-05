import css from './App.module.css';
// import NavBarSimple from "./components/NavBarSimple";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
// import Content1 from "./components/Content1";
// import Content2 from "./components/Content2";
// import ContentHooks from "./components/ContentHooks";
import ContentAPI from "./components/ContentAPI";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <NavBarSimple /> */}
      <NavBarForm />
      <Sidebar />
      {/* <Content1 /> */}
      {/* <Content2 /> */}
      {/* <ContentHooks /> */}
      <ContentAPI />
    </div>
  );
}

export default App;