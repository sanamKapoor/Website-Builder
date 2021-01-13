import React from 'react';
import { Header01, Header02 } from './compoents/Header';
import { Landing01, Landing02, Landing03 } from './compoents/Landing';
import { Section01, Section02 } from './compoents/Section';
import { Article01, Article02 } from './compoents/Article';
import { Footer01, Footer02 } from './compoents/Footer';
import Controler from './Controler';

class App extends React.Component {

    state = {
      open: true,
      edit: false,
      all: new Map(),
      status: false,
      components: ['Header', 'Landing', 'Article', 'Section', 'Footer'],
      final: '',
    }

controlDashboard = (isOpen) => {

isOpen = isOpen ? this.state.open : false;
      
let controle = document.querySelector('.controle');
let icon = document.querySelector('.controle i');

let aside = document.querySelector('aside');
let main = document.querySelector('main');

  if(isOpen){

    if(window.innerWidth > 1250){
      aside.style.display = 'flex';
      aside.style.width = '350px';
      aside.style.height = '100vh';
      aside.style.position  = 'absolute';
      aside.style.top = '0px';
      aside.style.left = '0px';

      controle.style.position = 'absolute';
      controle.style.top = '50vh';
      controle.style.left = `${aside.clientWidth}px`;
      main.style.marginLeft = `${aside.clientWidth}px`;

      icon.classList = '';
      icon.className = 'fas fa-caret-left fa-1x px-2 py-4 bg-light';
    } 
    else {
      aside.style.display = 'block';
        aside.style.height =  'auto';
        aside.style.width = '100vw';
        aside.style.position  = 'absolute';
        aside.style.left = '0px';
        aside.style.right = '0px';
        aside.style.top = '0px';
        main.style.marginTop = `${aside.clientHeight}px`;
  
        controle.style.position = 'absolute';
        controle.style.top = `${aside.clientHeight}px`;
        controle.style.left = '45vw';
  
        icon.classList = '';
        icon.className = 'fas fa-caret-up fa-1x px-4 py-1 bg-light';
    }
    
  } else {

    if(window.innerWidth > 1250){
      aside.style.position  = 'absolute';
      aside.style.top = '0px';
      aside.style.left = '-350px';
      main.style.marginLeft = '0px';

      controle.style.position = 'absolute';
      controle.style.top = '50vh';
      controle.style.left = '0px';

      icon.classList = '';
      icon.className = 'fas fa-caret-right fa-1x px-2 py-4 bg-light';
    }
    else {
      aside.style.display = 'none';
  
        controle.style.position = 'absolute';
        controle.style.top = '0px';
        controle.style.left = '45vw';
        main.style.marginTop = '0px';
  
        icon.classList = '';
        icon.className = 'fas fa-caret-down fa-1x px-4 py-1 bg-light';
    }
  }

}

  componentDidMount(){
    this.controlDashboard();
    window.addEventListener('resize', () => this.controlDashboard());
  }

  componentDidUpdate(){
    this.widthControle(this);
  }

  widthControle = (e) =>{
      window.innerWidth < 1200 && e.controlDashboard(true) 
  }

  controleClick = (open) => {
    this.controlDashboard(open); 
    this.setState({
      open: !open
    })
  }

  componentName = (element, value) => {
    let { all } = this.state;

    this.setState({
      edit: true,
    })
   
    if(element){
      all.set(element, value);
      this.setState({
        final: this.renderComponents()
      }) 
    }
  }

  view = () => {
    let { all, components } = this.state;
    let next = false;
    
    for(let key of all.keys()){
      for(let el of components){
        if(key === el){
          this.state.components.splice(el, 1);
          this.setState({
            status: true
          });
          next = true;
        } 
      }   
    }
    
    if(next){
      return true
    } else {
      return false;
    }
  }

  component = (v) => {
    if(v === 'Header01'){
      return <Header01 />
    }
    if(v === 'Header02'){
      return <Header02 />
    }
    if(v === 'Landing01'){
      return <Landing01 />
    }
    if(v === 'Landing02'){
      return <Landing02 />
    }
    if(v === 'Landing03'){
      return <Landing03 />
    }
    if(v === 'Article01'){
      return <Article01 />
    }
    if(v === 'Article02'){
      return <Article02 />
    }
    if(v === 'Section01'){
      return <Section01 />
    }
    if(v === 'Section02'){
      return <Section02 />
    }
    if(v === 'Footer01'){
      return <Footer01 />
    }
    if(v === 'Footer02'){
      return <Footer02 />
    }
  }

  renderComponents = () => {
    let { all } = this.state;
    let Arr = [];
    
    all.forEach(el => Arr.push(this.component(el)))

    return Arr;
  }

  render(){
  let { open, edit, all, final } = this.state;

  return (
    <React.Fragment>
      <div className="controle border rounded shadow">
        <i className="fas fa-caret-right fa-1x px-1 bg-light" onClick={() => this.controleClick(open)}></i>
      </div>
      <Controler componentFun={this.componentName} done={() => this.controleClick(open)} next={this.view} selected={all} />
      <main>
        { 
          edit ?
          <React.Fragment>
            {
             final ? final.map(e => e) : ''
            }
          </React.Fragment>
          :
          <div id="start" className="bg-secondary text-center d-flex justify-content-center align-items-center">
            <h6 className="text-light mx-2">Click on the arrow button and start building the website.</h6>
          </div>        
        }
      </main>
    </React.Fragment>
    );
  }
}

export default App;
