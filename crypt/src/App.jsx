import React from "react";

import TopBar from "./components/topBar";
import Body from "./components/body";

import './assets/stylesheets/styles.css'

function App() {

  return (
    <>
    <main className="appMainCont">

      <section className="appFirstSec">
        < TopBar />
      </section>

      <section className="appSecondSec">
        < Body />
      </section>

    </main>
    </>
  )
}

export default App