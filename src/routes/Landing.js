import React from "react";

class App extends React.Component {
    render(){

    const brandsdata = {
        'Brompton': ['Original', 'Black Edition', 'Electric'],
        'BMW': ['Original']
    }

    const itemsdata = [
  {
    "brand": "Brompton",
    "edition": "Original",
    "model": "H6R",
    "color": "Black",
    "year": 2020,
    "condition": "New",
    "foto": "ori-HR-black-folded",
    "price": 52000000
  },
  {
    "brand": "Brompton",
    "edition": "Original",
    "model": "H3R",
    "color": "Red",
    "year": 2020,
    "condition": "New",
    "foto": "ori-HR-red-folded",
    "price": 52000000
  },
  {
    "brand": "Brompton",
    "edition": "Original",
    "model": "H6L",
    "color": "Blue",
    "year": 2020,
    "condition": "New",
    "foto": "ori-HL-blue-folded",
    "price": 53000000
  },
  {
    "brand": "Brompton",
    "edition": "Original",
    "model": "H6L",
    "color": "Green",
    "year": 2020,
    "condition": "New",
    "foto": "ori-HL-green-folded",
    "price": 52000000
  },
  {
    "brand": "Brompton",
    "edition": "Black Edition",
    "model": "H6L",
    "color": "Blue",
    "year": 2020,
    "condition": "New",
    "foto": "blackedi-HL-blue-folded",
    "price": 57000000
  },
  {
    "brand": "Brompton",
    "edition": "Black Edition",
    "model": "H6L",
    "color": "Green",
    "year": 2020,
    "condition": "New",
    "foto": "blackedi-HL-green-folded",
    "price": 57000000
  },
  {
    "brand": "Brompton",
    "edition": "Original",
    "model": "S6L",
    "color": "Black",
    "year": 2020,
    "condition": "New",
    "foto": "ori-SL-black-folded",
    "price": 51000000
  },
  {
    "brand": "Brompton",
    "edition": "Original",
    "model": "H3R",
    "color": "Black",
    "year": 2020,
    "condition": "New",
    "foto": "ori-HR-black-folded",
    "price": 48000000
  },
  {
    "brand": "Brompton",
    "edition": "Electric",
    "model": "H6L",
    "color": "Glossy White",
    "year": 2020,
    "condition": "New",
    "foto": "electric-HL-white-folded",
    "price": 98000000
  },
  {
    "brand": "Brompton",
    "edition": "Electric",
    "model": "H2L",
    "color": "Black",
    "year": 2020,
    "condition": "New",
    "foto": "electric-HL-black-folded",
    "price": 98000000
  },
  {
    "brand": "BMW",
    "edition": "Original",
    "model": "Folding",
    "color": "Black & Blue",
    "year": 2020,
    "condition": "New",
    "foto": "bmw-folded",
    "price": 40000000
  },
  {
    "brand": "BMW",
    "edition": "Original",
    "model": "Racing",
    "color": "Gray",
    "year": 2020,
    "condition": "New",
    "foto": "bmw-race",
    "price": 183000000
  }
]

    var formatter = new Intl.NumberFormat('id-ID', {
      maximumSignificantDigits: 3,
      style: 'currency',
      currency: 'IDR',
    });

    return (
    <>
        <div className="App">

            {/* ========================= SECTION INTRO ========================= */}
            <section className="section-intro padding-y-sm">
            <div className="container">

            <div className="intro-banner-wrap">
                <img alt ="Sultan Brompton" src="images/banners/bannermain.jpg" className="img-fluid rounded" />
            </div>

            </div> {/* container {/*  */}
            </section>
            {/* ========================= SECTION INTRO END{/* ========================= */}

            {/* ========================= ITEMS HEAD ========================= */}
            <section className="section-content">
            <div className="container">
            {/* ========================= ITEMS HEAD END ========================= */}

            {

                Object.keys(brandsdata).map((brand, brand_index) =>
                    brandsdata[brand].map((model, model_index) => {
                        return (
                            <>
                                <header className="section-heading">
                                    <h3 className="section-title">{model} {brand}</h3>
                                </header>
                                <div className="row">
                                {
                                    itemsdata
                                      .filter(itemlist => itemlist['brand'] === brand)
                                      .filter(itemlist => itemlist['edition'] === model)
                                      .map((itemlist, index) => {

                                            return(
                                                <>

                                                    <div href="/#" className="card card-product-grid">
                                                        <a href="/#" className="img-wrap">
                                                            <img src={"images/items/"+itemlist['foto']+".jpg"} alt="item"/>
                                                        </a>
                                                            <figcaption className="info-wrap">
                                                                <a href="/#" className="title">{itemlist['model']} {itemlist['color']}</a>
                                                                <a href="/#" className="text-success"> * {itemlist['condition']} </a>
                                                                <div className="rating-wrap">
                                                                    <ul className="rating-stars">
                                                                        <li className="stars-active">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </li>
                                                                    </ul>
                                                                    <span className="label-rating text-muted">{itemlist['year']}</span>
                                                                </div>
                                                                <div className="price mt-1">{formatter.format(itemlist['price'])}</div>
                                                                <a href="/#" className="text-warning"> Including Tax </a>
                                                            </figcaption>

                                                    </div>

                                                </>
                                            )

                                    })
                                }
                                </div>
                            </>
                        )
                    })
                )

            }

            {/* ========================= ITEMS FOOT ========================= */}
            </div>
            </section>
            {/* ========================= ITEMS FOOT END ========================= */}

            <br/>
            <br/>

            {/* ========================= SECTION  ========================= */}
            <section className="section-name bg padding-y-sm">
            <div className="container">
            <header className="section-heading">
                <h3 className="section-title text-center ">Our Brands</h3>
            </header>{/* sect-heading */}

            <div className="row justify-content-center">
                <div className="col-md-2 col-6">
                    <figure className="box item-logo">
                        <a href="/#"><img src="images/logos/brompton.png" alt="logo"/></a>
                    </figure> {/* item-logo.{/* */}
                </div> {/* col.{/* */}
                <div className="col-md-2  col-6">
                    <figure className="box item-logo">
                        <a href="/#"><img src="images/logos/bmw.png" alt="logo" /></a>
                    </figure> {/* item-logo.{/* */}
                </div> {/* col.{/* */}
            </div> {/* row.{/* */}
            </div>{/* container {/* */}
            </section>
            {/* ========================= SECTION  END{/* ========================= */}

            {/* ========================= FOTO ========================= */}
            <section className="section-name bg padding-y-sm">
                <div className="container">
                    <header className="section-heading">
                        <h3 className="section-title text-center">Our Bikes</h3>
                    </header>{/* sect-heading */}
                    <aside className="col-md-12 col-lg-12 container">
                        {/* ================== COMPONENT SLIDER  BOOTSTRAP  ==================  */}
                        <div id="carousel1_indicator" className="carousel slide" data-ride="carousel">
                          <ol className="carousel-indicators">
                            <li data-target="#carousel1_indicator" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel1_indicator" data-slide-to="1"></li>
                            <li data-target="#carousel1_indicator" data-slide-to="2"></li>
                            <li data-target="#carousel1_indicator" data-slide-to="3"></li>
                            <li data-target="#carousel1_indicator" data-slide-to="4"></li>
                            <li data-target="#carousel1_indicator" data-slide-to="5"></li>
                            <li data-target="#carousel1_indicator" data-slide-to="6"></li>
                            <li data-target="#carousel1_indicator" data-slide-to="7"></li>
                            <li data-target="#carousel1_indicator" data-slide-to="8"></li>
                            <li data-target="#carousel1_indicator" data-slide-to="9"></li>
                            <li data-target="#carousel1_indicator" data-slide-to="10"></li>
                            <li data-target="#carousel1_indicator" data-slide-to="11"></li>
                            <li data-target="#carousel1_indicator" data-slide-to="12"></li>
                            <li data-target="#carousel1_indicator" data-slide-to="13"></li>
                            <li data-target="#carousel1_indicator" data-slide-to="14"></li>
                            <li data-target="#carousel1_indicator" data-slide-to="15"></li>
                            <li data-target="#carousel1_indicator" data-slide-to="16"></li>
                            <li data-target="#carousel1_indicator" data-slide-to="17"></li>
                            <li data-target="#carousel1_indicator" data-slide-to="18"></li>
                            <li data-target="#carousel1_indicator" data-slide-to="19"></li>
                            <li data-target="#carousel1_indicator" data-slide-to="20"></li>
                          </ol>
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img className="d-block w-100" src="images/banners/1.jpg" alt="1 slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="images/banners/2.jpg" alt="2 slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="images/banners/3.jpg" alt="3 slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="images/banners/4.jpg" alt="4 slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="images/banners/5.jpg" alt="5 slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="images/banners/6.jpg" alt="6 slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="images/banners/7.jpg" alt="7 slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="images/banners/8.jpg" alt="8 slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="images/banners/9.jpg" alt="9 slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="images/banners/10.jpg" alt="10 slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="images/banners/11.jpg" alt="11 slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="images/banners/12.jpg" alt="12 slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="images/banners/13.jpg" alt="13 slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="images/banners/14.jpg" alt="14 slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="images/banners/15.jpg" alt="15 slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="images/banners/16.jpg" alt="16 slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="images/banners/17.jpg" alt="17 slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="images/banners/18.jpg" alt="18 slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="images/banners/19.jpg" alt="19 slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="images/banners/20.jpg" alt="20 slide"/>
                            </div>
                          </div>
                          <a className="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                          </a>
                          <a className="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                          </a>
                        </div>
                    </aside>
                </div>
            </section>
            {/* ========================= FOTO ENDs ========================= */}

            {/* ========================= VIDEO ========================= */}
            <section className="section-name bg padding-y-sm">
                <div className="container">
                    <header className="section-heading">
                        <h3 className="section-title text-center">How to fold your Brompton</h3>
                    </header>{/* sect-heading */}
                    <div class='embed-container'><iframe src='https://www.youtube.com/embed/7URyQ25Cbjo' frameborder='0' allowfullscreen></iframe></div>
                </div>
            </section>
            {/* ========================= VIDEO  END{/* ========================= */}

            {/* ========================= SECTION SPECIAL ========================= */}
            <section className="section-specials bg padding-y border-bottom">
            <div className="container">
                <header className="section-heading">
                    <h3 className="section-title text-center">Why Sultan Brompton</h3>
                </header>{/* sect-heading */}
            <div className="row">
            <div className="col-md-4">
                        <figure className="itemside">
                            <div className="aside">
                                <span className="icon-sm rounded-circle bg-primary">
                                <i className="fa fa-money-bill-alt white"></i>
                                </span>
                            </div>
                            <figcaption className="info">
                                <h6 className="title">Reasonable Price</h6>
                                <p className="text-muted">Buy your new bike with the best price and best quality</p>
                            </figcaption>
                        </figure> {/* iconbox {/* */}
                </div>{/* col {/* */}
                <div className="col-md-4">
                        <figure className="itemside">
                            <div className="aside">
                                <span className="icon-sm rounded-circle bg-danger">
                                    <i className="fa fa-comment-dots white"></i>
                                </span>
                            </div>
                            <figcaption className="info">
                                <h6 className="title">Customer Support</h6>
                                <p className="text-muted">Feel free to call or chat with us +62 821-1623-0487 </p>
                            </figcaption>
                        </figure> {/* iconbox {/* */}
                </div>{/* col {/* */}
                <div className="col-md-4">
                        <figure className="itemside">
                            <div className="aside">
                                <span className="icon-sm rounded-circle bg-success">
                                    <i className="fa fa-truck white"></i>
                                </span>
                            </div>
                            <figcaption className="info">
                                <h6 className="title">Delivery in 1 - 10 Days</h6>
                                <p className="text-muted">Super fast delivery for the area of Jabodetabek</p>
                            </figcaption>
                        </figure> {/* iconbox {/* */}
                </div>{/* col {/* */}
            </div> {/* row.{/* */}

            </div> {/* container.{/* */}
            </section>
            {/* ========================= SECTION SPECIAL END{/* ========================= */}


            {/* ========================= FOOTER ========================= */}
            <footer className="section-footer bg border-top center">
                <div className="container">
                    <section className="footer-top  padding-y">
                        <div className="row justify-content-center">
                            <aside className="col-md-4 col-12 text-center">
                                <article className="mr-md-4">
                                    <h5 className="title">Let's talk</h5>
                                    <ul className="list-icon">
                                        <li> <i className="icon fa fa-map-marker"> </i>JABODETABEK, Indonesia</li>
                                        <li> <i className="icon fa fa-phone"> </i> +62 821-1623-0487</li>
                                        <li> <i className="icon fa fa-clock"> </i>Monday-Sunday 08:00am - 21:00pm</li>
                                    </ul>
                                </article>
                            </aside>
                            <aside className="col-md-4 col-12 text-center">
                                <h5 className="title">Social Media</h5>
                                <p className="text-white-50 mb-2">Follow us on social media</p>
                                <div>
                                    <a href="https:{/*www.facebook.com/Sultanbrompton" className="btn btn-icon btn-light"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https:{/*www.instagram.com/sultan.brompton" className="btn btn-icon btn-light"><i className="fab fa-instagram"></i></a>
                                </div>

                            </aside>
                        </div> {/* row.{/* */}
                    </section>	{/* footer-top.{/* */}

                    <section className="footer-bottom border-top row text-center justify-content-center">
                        <div className="col-md-6">
                            <p className="mb-0">
                                Sultan Brompton 2021
                            </p>
                        </div>
                    </section>
                </div>{/* {/*container */}
            </footer>
            {/* ========================= FOOTER END {/* ========================= */}
        </div>
    </>
    );
  }
}

export default App;
