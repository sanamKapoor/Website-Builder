import React from 'react'

export function Text() {
  return (
<footer className="bg-dark text-light">
  <div className="row p-2 p-sm-4 footer-row mx-auto">
    <div className="col-12 col-md-7">
    <h2>Join Now</h2>
    <p>We hope you got some useful information and have decided which one you will choose. You can enrol with our courses if you think so. Best of luck for you learning!</p>
    </div>
    <div className="col-12 col-md-5 text-center my-4">
    <div>
      <i className="fa-2x mx-2 fab fa-facebook"></i>
      <i className="fa-2x mx-2 fab fa-twitter"></i>
      <i className="fa-2x mx-2 fab fa-youtube"></i>
    </div>
    <p className="my-2">Copyright &copy; 2020 alex.com</p>
    </div>
  </div>
</footer>
  )
}

export function Links() {
  return (
    <footer className="bg-dark text-light">
  <div className="row p-4 footer-row mx-auto">
    <div className="col-12 col-sm-4 text-center">
      <ul className="list-unstyled">
        <li>Service</li>
        <li>Courses</li>
        <li>Clients</li>
        <li>Projects</li>
      </ul>
    </div>
    <div className="col-12 col-sm-4 text-center">
      <ul className="list-unstyled">
        <li>About</li>
        <li>Contact</li>
        <li>Disclamer</li>
        <li>Terms</li>
      </ul>
    </div>
    <div className="col-12 col-sm-4 text-center">
      <ul className="list-unstyled">
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>Youtube</li>
      </ul>
    </div>
  <p className="w-100 text-center mt-2">Copyright &copy; 2020 alex.com</p>

  </div>
</footer>

  )
}
