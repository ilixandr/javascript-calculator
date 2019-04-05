import React, { Component } from 'react';
import './App.css';
const math = require('mathjs');

/* Constants go here */
const TIMEOUT = 150;
/* Build components here */
class Calc extends Component {
  constructor(props) {
    super(props);
    this.state={
      display: "0", 
      activePad: "none"
    };
    this.handleClear = this.handleClear.bind(this);
    this.handleDivide = this.handleDivide.bind(this);
    this.handleMultiply = this.handleMultiply.bind(this);
    this.handleSeven = this.handleSeven.bind(this);
    this.handleEight = this.handleEight.bind(this);
    this.handleNine = this.handleNine.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
    this.handleFour = this.handleFour.bind(this);
    this.handleFive = this.handleFive.bind(this);
    this.handleSix = this.handleSix.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleOne = this.handleOne.bind(this);
    this.handleTwo = this.handleTwo.bind(this);
    this.handleThree = this.handleThree.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleZero = this.handleZero.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.isSign = this.isSign.bind(this);
  }
  isSign(x) {
    return x === "/" || x === "x" || x === "-" || x === "+";
  }
  handleClear() {
    this.setState({display: "0", activePad: "clear"});
    setTimeout(() => this.setState({activePad: "none"}), TIMEOUT);
  }
  handleDivide() {
    let processor = this.state.display;
    if (this.isSign(processor[processor.length - 1])) {
      processor = processor.slice(0, processor.length - 1).concat("/");
      this.setState({display: processor});
    } else {
      this.setState({display: processor.concat("/")});
    }
    this.setState({activePad: "divide"});
    setTimeout(() => this.setState({activePad: "none"}), TIMEOUT);
  }
  handleMultiply() {
    let processor = this.state.display;
    if (this.isSign(processor[processor.length - 1])) {
      processor = processor.slice(0, processor.length - 1).concat("x");
      this.setState({display: processor});
    } else {
      this.setState({display: processor.concat("x")});
    }
    this.setState({activePad: "multiply"});
    setTimeout(() => this.setState({activePad: "none"}), TIMEOUT);
  } 
  handleSeven() {
    let processor = this.state.display;
    this.state.display === "0" ? this.setState({display: "7"}) : this.setState({display: processor.concat("7")});
    this.setState({activePad: "seven"});
    setTimeout(() => this.setState({activePad: "none"}), TIMEOUT);
  }
  handleEight() {
    let processor = this.state.display;
    this.state.display === "0" ? this.setState({display: "8"}) : this.setState({display: processor.concat("8")});
    this.setState({activePad: "eight"});
    setTimeout(() => this.setState({activePad: "none"}), TIMEOUT);
  }
  handleNine() {
    let processor = this.state.display;
    this.state.display === "0" ? this.setState({display: "9"}) : this.setState({display: processor.concat("9")});
    this.setState({activePad: "nine"});
    setTimeout(() => this.setState({activePad: "none"}), TIMEOUT);
  }
  handleSubtract() {
    let processor = this.state.display;
    if (this.isSign(processor[processor.length - 1])) {
      processor = processor.slice(0, processor.length - 1).concat("-");
      this.setState({display: processor});
    } else {
      this.setState({display: processor.concat("-")});
    }
    this.setState({activePad: "subtract"});
    setTimeout(() => this.setState({activePad: "none"}), TIMEOUT);
  }
  handleFour() {
    let processor = this.state.display;
    this.state.display === "0" ? this.setState({display: "4"}) : this.setState({display: processor.concat("4")});
    this.setState({activePad: "four"});
    setTimeout(() => this.setState({activePad: "none"}), TIMEOUT);
  }
  handleFive() {
    let processor = this.state.display;
    this.state.display === "0" ? this.setState({display: "5"}) : this.setState({display: processor.concat("5")});
    this.setState({activePad: "five"});
    setTimeout(() => this.setState({activePad: "none"}), TIMEOUT);
  }
  handleSix() {
    let processor = this.state.display;
    this.state.display === "0" ? this.setState({display: "6"}) : this.setState({display: processor.concat("6")});
    this.setState({activePad: "six"});
    setTimeout(() => this.setState({activePad: "none"}), TIMEOUT);
  }
  handleAdd() {
    let processor = this.state.display;
    if (this.isSign(processor[processor.length - 1])) {
      processor = processor.slice(0, processor.length - 1).concat("+");
      this.setState({display: processor});
    } else {
      this.setState({display: processor.concat("+")});
    }
    this.setState({activePad: "add"});
    setTimeout(() => this.setState({activePad: "none"}), TIMEOUT);
  }
  handleOne() {
    let processor = this.state.display;
    this.state.display === "0" ? this.setState({display: "1"}) : this.setState({display: processor.concat("1")});
    this.setState({activePad: "one"});
    setTimeout(() => this.setState({activePad: "none"}), TIMEOUT);
  }
  handleTwo() {
    let processor = this.state.display;
    this.state.display === "0" ? this.setState({display: "2"}) : this.setState({display: processor.concat("2")});
    this.setState({activePad: "two"});
    setTimeout(() => this.setState({activePad: "none"}), TIMEOUT);
  }
  handleThree() {
    let processor = this.state.display;
    this.state.display === "0" ? this.setState({display: "3"}) : this.setState({display: processor.concat("3")});
    this.setState({activePad: "three"});
    setTimeout(() => this.setState({activePad: "none"}), TIMEOUT);
  }
  handleEquals() {
    let result = math.eval(this.state.display.replace(/x/g, "*"));
    this.setState({display: result.toString(), activePad: "equals"});
    setTimeout(() => this.setState({activePad: "none"}), TIMEOUT);
  }
  handleZero() {
    let processor = this.state.display;
    this.state.display === "0" ? this.setState({display: "0"}) : this.setState({display: processor.concat("0")});
    this.setState({activePad: "zero"});
    setTimeout(() => this.setState({activePad: "none"}), TIMEOUT);
  }
  handleDecimal() {
    let processor = this.state.display;
    let alreadyDecimal = false;
    for (let i = 0; i < processor.length; i++) {
      if (processor[i] === ".") {
        alreadyDecimal = true;
      } else if (this.isSign(processor[i])) {
        alreadyDecimal = false;         
      }
    }
    if (processor[processor.length - 1] !== "." && !alreadyDecimal) {
      this.setState({display: processor.concat(".")});
    }
    this.setState({activePad: "decimal"});
    setTimeout(() => this.setState({activePad: "none"}), TIMEOUT);
  }
  render() {
    return (
      <div className="contain">
        <div id="display">{this.state.display}</div>
        <div className="pads">
          <button id="clear" onClick={this.handleClear} className={this.state.activePad === "clear" ? "active-pad" : "inactive-pad"}>CLEAR</button>
          <div id="divide" onClick={this.handleDivide} className={this.state.activePad === "divide" ? "active-pad" : "inactive-pad"}>/</div>
          <div id="multiply" onClick={this.handleMultiply} className={this.state.activePad === "multiply" ? "active-pad" : "inactive-pad"}>x</div>
          <div id="seven" onClick={this.handleSeven} className={this.state.activePad === "seven" ? "active-pad" : "inactive-pad"}>7</div>
          <div id="eight" onClick={this.handleEight} className={this.state.activePad === "eight" ? "active-pad" : "inactive-pad"}>8</div>
          <div id="nine" onClick={this.handleNine} className={this.state.activePad === "nine" ? "active-pad" : "inactive-pad"}>9</div>
          <div id="subtract" onClick={this.handleSubtract} className={this.state.activePad === "subtract" ? "active-pad" : "inactive-pad"}>-</div>
          <div id="four" onClick={this.handleFour} className={this.state.activePad === "four" ? "active-pad" : "inactive-pad"}>4</div>
          <div id="five" onClick={this.handleFive} className={this.state.activePad === "five" ? "active-pad" : "inactive-pad"}>5</div>
          <div id="six" onClick={this.handleSix} className={this.state.activePad === "six" ? "active-pad" : "inactive-pad"}>6</div>
          <div id="add" onClick={this.handleAdd} className={this.state.activePad === "add" ? "active-pad" : "inactive-pad"}>+</div>
          <div id="one" onClick={this.handleOne} className={this.state.activePad === "one" ? "active-pad" : "inactive-pad"}>1</div>
          <div id="two" onClick={this.handleTwo} className={this.state.activePad === "two" ? "active-pad" : "inactive-pad"}>2</div>
          <div id="three" onClick={this.handleThree} className={this.state.activePad === "three" ? "active-pad" : "inactive-pad"}>3</div>
          <div id="equals" onClick={this.handleEquals} className={this.state.activePad === "equals" ? "active-pad" : "inactive-pad"}>=</div>
          <div id="fcc"><i className="fab fa-free-code-camp"></i></div>
          <div id="zero" onClick={this.handleZero} className={this.state.activePad === "zero" ? "active-pad" : "inactive-pad"}>0</div>
          <div id="decimal" onClick={this.handleDecimal} className={this.state.activePad === "decimal" ? "active-pad" : "inactive-pad"}>.</div>
        </div>
      </div>
    );
  }
};

export default Calc;
