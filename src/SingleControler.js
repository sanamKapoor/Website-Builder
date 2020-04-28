import React, { Component } from 'react'

export default class SingleControler extends Component {
  constructor(){
    super();
    this.state = {
      show: true,
      selectedValue: '',
      color: '',
      isColored: false
    }
  }

  componentWillMount(){
    this.setState({
      isColored: this.props.stay
    })
  }

  componentWillReceiveProps(){
    let selected = this.props.selected;
    let all = this.props.elements;

    selected.forEach(el => {
       all.filter(e => {
          if(el === e && this.state.isColored){
              this.setState({
                color: e,
              })
          } 
      })
    })
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    let { show, color } = this.state;
    
    let classes = show ? "col-3 fas fa-2x fa-angle-up text-center" : "col-3 fas fa-2x fa-angle-down text-center";
    return (
      <div className="m-2 border-bottom">
      <div className="row mx-auto text-light">
        <p className="col-9 lead">{this.props.name}</p> 
        <i style={{cursor: 'pointer'}} className={classes} onClick={() => this.handleClick()}></i>
      </div>
      {
        show ?
        (
          <div className="row mx-auto">
            {
              this.props.elements.map((el, index) => {
              return(
              <div className="col-6" key={index}>
                <p className={color === el ? 'text-danger' : 'text-light'}>
                <input 
                  className="mx-2"
                  style={{cursor: 'pointer'}}
                  type="radio" 
                  name="selectedValue"
                  value={el}
                  onChange={(e) => this.props.componentFun(this.props.name, e.target.value)}></input>
                  {el}
                </p>
              </div>
              )
              })
            }
          </div>
        )
        :
        ''
      }
      </div>
    )
  }
}
