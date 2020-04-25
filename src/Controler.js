import React, { Component } from 'react'
import SingleControler from './SingleControler'

export default class Controler extends Component {

  constructor(){
    super();
    this.state = {
      next: [],
      stay: false
    }
  }

  elements = [
    {
      name: 'Header',
      components: ['Header01', 'Header02']
    },
    {
      name: 'Landing',
      components: ['Landing01', 'Landing02', 'Landing03']
    },
    {
      name: 'Article',
      components: ['Article01', 'Article02']
    },
    {
      name: 'Section',
      components: ['Section01', 'Section02']
    },
    {
      name: 'Footer',
      components: ['Footer01', 'Footer02']
    }
  ]

  nextComponent = (check, e) => {
    if(check){
      if(!this.props.next()){
        return;
      }
    }
      if(this.elements.length > 0){
        let all = [...this.state.next];
        all.push(this.elements.shift());
        this.setState({
          next: all,
          stay: true
        })
      }
      else {
        this.props.done();
        e.target.className = 'd-none';
      }
  }

  componentDidMount(){
    this.nextComponent(false);
  }

  render() {
    let { next, stay } = this.state;
    return (
      <aside className="bg-dark text-light">
    <div>
    <h5 className="bg-danger text-center p-3">SITE GENERATOR</h5>
    <p className="text-center p-2">Get your website ready within few minutes by just clicking some options.</p>
    <hr className="bg-light" />
    <div className="components">

      { 
      (this.elements.length >= 0)
      ? 
      next.map((el, index) => <SingleControler key={index} name={el.name} elements={el.components} componentFun={this.props.componentFun} selected={this.props.selected} stay={stay} />) 
      : 
      ''
      }

    </div>
  </div>

    <div className="bg-dark text-light">
      <p className="text-center">
        {this.elements.length > 0 ? 'Press the button for next component.' : 'Congrats! Your website is ready.'}
      </p>
      <button className="btn btn-light btn-block mx-auto w-75 mb-3 align-self-center text-center"
      onClick={(e) => this.nextComponent(true, e)}
      >
        {this.elements.length > 0 ? 'Next' : "Let's Finish"}
      </button>
    </div>
  </aside>
    )
  }
}
