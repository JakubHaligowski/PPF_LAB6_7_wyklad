import React, { Component } from "react";
import jsonData from '../res/text.json';
import jsonData2 from "../res/text2.json";
import './CContents.css'

class CContent extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Witaj użytkowniku. Kliknij przycisk aby pozanć wiadomość",
    };
    this.txtData = () => JSON.parse(JSON.stringify(jsonData));
    this.txtData2 = () => JSON.parse(JSON.stringify(jsonData2));
    const imgContext = require.context("../res/", false, /\.jpg$/);
    let img = {};
    this.imgs = imgContext.keys().reduce((icons, file) => {
      const cname = imgContext(file);
      const label = file.slice(2, -4);
      img[label] = cname;
      return img;
    }, {});
    //this.changeMsg = this.changeMsg.bind(this);

  }

  
  changeMsg = () => {
    this.setState({ msg: "Tajemnicza wiadomość" });
  }

  render() {
    // const items = [];
    // for(let i=0; i<this.txtData().count; i++){
    //     let value = this.txtData().text[i];
    //     items.push(
    //         <div className="contentsFlex" key={Math.random()}>
    //             <img className="contentsFlexImg" src={this.imgs['img'+(i+1)]} alt="zdj"/>
    //             <p className="contentsFlexTxt">{value}</p>
    //         </div>
    //     )

    const tabData = this.txtData2().data;
    const items = tabData.map((item, i) => (
      <div id={`"div${item.id}"`} className="contentsFlex">
        <img
          className="contentsFlexImg"
          src={this.imgs[item.img]}
          key={i}
          alt="Zdjęcie"
        />
        <p className="contentsFlexTxt">{item.text}</p>
        {/* <img src={'../res/img1.jpeg'} alt=""/> */}
      </div>
    ));
    return (
      <div className="contentsDivClass">
        {items}
        <h1>
          {this.state.msg}
          <br />
        </h1>
        <button onClick={this.changeMsg}>Kliknij aby poznac tajemnice.</button>
      </div>
    );
  }
}

export default CContent;
