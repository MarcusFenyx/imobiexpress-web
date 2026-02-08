//import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Imobi from "./pages/imobi/Imobi";
//import Home from "./pages/Home";
import Global from "./styles/Global";

function App() {
  return (
    <div>
      <Header />
      <Imobi />
      {/*<Banner />
      <Home />*/}
      <Footer />
      <Global />
    </div>
  );
}

export default App;
