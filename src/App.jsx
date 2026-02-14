//import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Imobi from "./pages/Imobi";
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
