import React from 'react'

export function Section01() {
  return (
<section className="section-02">
    <div className="p-3">
      <h2 className="my-3">Development and Marketing</h2>
      <p>Online platforms intermediate information and communication flows on the Internet. They are also key enablers of digital trade across the Single Market and the globe. They increase consumer choice and convenience, improve efficiency and competitiveness of industry and can enhance civil participation in society.</p>
      <p>Internet marketing is important because it aligns with the way consumers make purchasing decisions. Studies by analysts such as Gartner indicate that increasing numbers of consumers use social media and research on mobile Internet to carry out preliminary product and price research before making final decisions.
      </p>
    </div>
    <div className="p-3 text-center bg-warning product-list align-self-center">
      <h3 className="my-3">Our Popular Courses</h3>
      <ul className="list-unstyled">
        <li className="h6">Wordpress Development</li>
        <li className="h6">Web Design and Development</li>
        <li className="h6">App Development</li>
        <li className="h6">Afiliate Marketing</li>
        <li className="h6">SEO and Google Ads</li>
        <li className="h6">Adobe XD and OpenShot</li>
      </ul>
    </div>
</section>
  )
}



export function Section02(){
  return(
  <div className="section-04">
  <h2 className="text-center">Our Popular Courses</h2>
  <div className="product-row pt-3">
    <div className="card bg-light">
      <img src="https://cms-assets.tutsplus.com/uploads/users/71/courses/1274/preview_image/introduction-to-wordpress-plugin-development-400x277.png" height="250" alt="" />
      <div className="row">
        <div className="col-10">
          <p className="lead m-2">Wordpress Development</p>
        </div>
      <div className="col-2">
        <i className="text-danger far fa-2x fa-heart float-right m-2"></i>
      </div>
      </div>
    </div>
    <div className="card bg-light">
      <img src="https://sitegalleria.com/wp-content/uploads/2019/08/Web-Development-and-Web-Design-Company.png" height="250" alt="" />
      <div className="row">
        <div className="col-10">
          <p className="lead m-2">Web Design and Development</p>
        </div>
      <div className="col-2">
        <i className="text-danger far fa-2x fa-heart float-right m-2"></i>
      </div>
      </div>
    </div>
    <div className="card bg-light">
      <img src="https://miro.medium.com/max/1838/1*JUSbO0xkXPf2jtYLMSAZ8w.jpeg" height="250" alt="" />
      <div className="row">
        <div className="col-10">
          <p className="lead m-2">App Development</p>
        </div>
      <div className="col-2">
        <i className="text-danger far fa-2x fa-heart float-right m-2"></i>
      </div>
      </div>
    </div>
  </div>

  <div className="product-row pt-4 product-row-02">
    <div className="card bg-light">
      <img src="https://www.amazingviralnews.com/wp-content/uploads/2020/01/affiliate-marketing-approach-854x540.jpg" height="250" alt="" />
      <div className="row">
        <div className="col-10">
          <p className="lead m-2">Afiliate Marketing</p>
        </div>
      <div className="col-2">
        <i className="text-danger far fa-2x fa-heart float-right m-2"></i>
      </div>
      </div>
    </div>
    <div className="card bg-light">
      <img src="https://sanaluzman.cdnnew.com//sanaluzman/BlogFiles/3105/google_05052017020908.jpg" height="250" alt="" />
      <div className="row">
        <div className="col-10">
          <p className="lead m-2">SEO and Google Ads</p>
        </div>
      <div className="col-2">
        <i className="text-danger far fa-2x fa-heart float-right m-2"></i>
      </div>
      </div>
    </div>
    <div className="card bg-light">
      <img src="https://www.learnupon.com/wp-content/uploads/Video-editing-basics-for-eLearning1200x628.jpg" height="250" alt="" />
      <div className="row">
        <div className="col-10">
          <p className="lead m-2">Adobe XD and OpenShot</p>
        </div>
      <div className="col-2">
        <i className="text-danger far fa-2x fa-heart float-right m-2"></i>
      </div>
      </div>
    </div>
  </div>
</div>

  )
}