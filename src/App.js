import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { CFooter } from "./components/CFooter";
import CHeader from "./components/CHeader";
import CContents from './components/CContents'
import COuter from "./components/COuter";

function App() {
  return (
    <div className="App">
      <CHeader aName="Jakub" aFamily="Haligowski" />
      {/* <CHeader aName="Tomasz" aFamily="Nowak" /> */}
      <CContents />
      {/* <COuter /> */}
      <CFooter weather="słoneczna" temp="25" >
        <p>Niebo jest bezchmurne a wiatr słaby</p>
      </CFooter>
      {/* <CFooter weather="deszczowa" temp="13" />
      <CFooter weather="śnieżna" temp="-3" /> */}
    </div>
  );
}

export default App;
