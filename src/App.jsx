import { Fragment } from "react";
import Global from "./styles/Global";
import RouterApp from "./routes/RouterApp";

function App() {
  return (
    <Fragment>
      <RouterApp />
      <Global />
    </Fragment>
  );
}

export default App;