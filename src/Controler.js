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
    <div className="text-center">
    <h5 className="logo shadow p-2 text-uppercase">Site Builder</h5>
    <span className="">Get your website ready with just few clicks.</span>
    <hr className="bg-light my-2" />
    <div className="components text-left">
      { 
      (this.elements.length >= 0)
      ? 
      next.map((el, index) => <SingleControler key={index} name={el.name} elements={el.components} componentFun={this.props.componentFun} selected={this.props.selected} stay={stay} />) 
      : 
      ''
      }

    </div>
  </div>

    <div className="mt-3 py-1 text-center">
      <p className="my-1">
        {this.elements.length > 0 ? 'Press the button for next component.' : 'Congrats! Your website is ready.'}
      </p>
      <button className="btn btn-light btn-sm d-block mx-auto w-75 align-self-center" 
      onClick={(e) => this.nextComponent(true, e)}
      >
        {this.elements.length > 0 ? 'Next' : "Let's Finish"}
      </button>
        <small className="py-2">Made with <span role="img" aria-label="heart">❤️</span> by Sanam Kapoor</small>
    </div>
  </aside>
    )
  }
}
