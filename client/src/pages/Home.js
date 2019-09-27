import React from "react";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h1 className="display-4">Chill Store</h1>
          <p className="lead">The best tools to help y'all chill out</p>
          <hr className="my-4" />
          <p>Thank you for visiting our store!</p>
          <p className="lead">
            <NavLink
              className="btn btn-primary btn-lg"
              exact
              to="/products"
              role="button"
            >
              Chill Products!
            </NavLink>
          </p>
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li className="active" data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://i.vimeocdn.com/video/572944906_1280.jpg"
                alt="First slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>Come chill with us</h2>
                <p>The best tools to chill out.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://i.ytimg.com/vi/XWGXimIJhGg/maxresdefault.jpg"
                alt="Second slide"
              />
               <div className="carousel-caption d-none d-md-block">
                <h2>Come chill with us</h2>
                <p>The best tools to chill out.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://s-ec.bstatic.com/images/hotel/max1024x768/312/31223331.jpg"
                alt="Third slide"
              />
               <div className="carousel-caption d-none d-md-block">
                <h2>Come chill with us</h2>
                <p>The best tools to chill out.</p>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
