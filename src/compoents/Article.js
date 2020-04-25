import React from 'react';

export function Article01() {
  return (
    <section className="section-01">
  <div className="row">
    <div className="col-12 col-lg-4 align-self-center">
      <img src="https://casetext.com/blog/wp-content/uploads/2020/01/Canva-Person-Using-Macbook-Pro.jpg" className="img-fluid" alt="" />
    </div>
    <div className="col-12 col-lg-8 align-self-center">
      <h2 className="my-2">Digital Marketing</h2>
      <p>Digital marketing is the component of marketing that utilizes internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services.</p>
      <p className="hidden-p">Digital marketing extends to non-Internet channels that provide digital media, such as television, mobile phones (SMS and MMS), callback, and on-hold mobile ring tones. The extension to non-Internet channels differentiates digital marketing from online marketing.</p>
    </div>
  </div>
</section>
  )
}

export function Article02(){
  return(
    <div className="section-03">
  <div className="text-center p-3 border border-danger text-danger">
    <i className="fas fa-laptop-code fa-4x my-5"></i>
    <h3>Web Development</h3>
    <p>Web development is the work involved in developing a website for the Internet or an intranet. Sign up now and start your journey.</p>
  </div>
  <div className="text-center p-3 border border-primary text-primary">
    <i className="fas fa-mobile-alt fa-4x my-5"></i>
    <h3>App Development</h3>
    <p>Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants.</p>
  </div>
  <div className="text-center p-3 border border-secondary text-secondary">
    <i className="fas fa-video fa-4x my-5"></i>
    <h3>Video Editing</h3>
    <p> Video editing is used to structure and present all video information, including films and television shows and video advertisements.</p>
  </div>
</div>

  )
}