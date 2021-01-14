import React from 'react'

export function Checkpoint() {
  return (
<section className="section-02">
    <div className="px-2 px-sm-3">
      <h2 className="my-2 my-md-3">Our Popular Courses</h2>
      <p>
        You don't have to worry now, beacuse we come up with our popular courses only for you.
      </p>
      <ul className="list-unstyled p-0 m-md-2">
        <li><i className="far fa-check-circle mr-2"></i> Wordpress Development</li>
        <li><i className="far fa-check-circle mr-2"></i> Web Design</li>
        <li><i className="far fa-check-circle mr-2"></i> App Development</li>
        <li><i className="far fa-check-circle mr-2"></i> Afiliate Marketing</li>
        <li><i className="far fa-check-circle mr-2"></i> SEO and Google Ads</li>
        <li><i className="far fa-check-circle mr-2"></i> Content Writing</li>
      </ul>
    </div>
    <div className="d-flex justify-content-center align-items-center">
      <img src="./img/1407916-young-businessman-png-jpg-black-and-white-stock-young-person-png-428_495_preview.png" className="img-fluid section-02-img" alt="" />
    </div>
</section>
  )
}



export function Images(){
  return(
    <div className="section-04">
    <h2 className="text-center">Our Courses</h2>
    <div className="product-row pt-2 pt-sm-3">
      <div className="p-2 shadow bg-light d-flex">
        <img src="./img/Earning-Passive-Income.jpg" className="img-fluid course-img" alt="" />
      </div>
      <div className="p-2 shadow bg-light d-flex">
        <img src="./img/feed_webdesign-1.jpg" className="img-fluid course-img" alt="" />
      </div>
      <div className="p-2 shadow bg-light d-flex">
        <img src="./img/o-que-e-seo-blog-hostgator.jpg" className="img-fluid course-img" alt="" />
      </div>
    </div>
  
    <div className="product-row pt-2 pt-sm-3 product-row-02">
      <div className="p-2 shadow bg-light d-flex">
        <img src="./img/how-to-get-started-with-wordpress_pccv.jpg" className="img-fluid course-img" alt="" />
      </div>
      <div className="p-2 shadow bg-light d-flex">
        <img src="./img/1_ZnVbmWK9nAothEg_de2fOA.jpeg" className="img-fluid course-img" alt="" />
      </div>
      <div className="p-2 shadow bg-light d-flex">
        <img src="./img/177798-1-Tips-for-best-content-writing.jpg" className="img-fluid course-img" alt="" />
      </div>
    </div>
  </div>
  )
}