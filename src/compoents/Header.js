import React from 'react'

export function Header01() {
  return (
    <div className="header-1 bg-primary">
  <nav className="navbar navbar-expand navbar-dark bg-transparent mx-auto px-2 px-sm-3 px-md-5">
    <a className="navbar-brand" href="/">Alex.com</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
  )
}

export function Header02(){
  return(
    <div className="header-2">
      <div className="row w-75 mx-auto py-1">
        <div className="col-6">
          <a className="navbar-brand text-dark" href="/">Alex.com</a>
        </div>
        <div className="col-6 text-right">
          <div className="d-inline-block">
            <img src="./img/menu2.png" height="50" width="50" alt="" />
          </div>
        </div>
     </div>
    </div>
  )
}
