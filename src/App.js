import React from "react";
import Header from "./component/header";
import HeaderLine from "./component/headline";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <HeaderLine
          header="Posts"
          desc="Install Jest, and its Babel integrations, as recommended in the Jest docs. Install enzyme. Then, simply require/import React, enzyme functions, and your module at the top of a test file."
        />
      </section>
    </div>
  );
}

export default App;
