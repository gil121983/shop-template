import React from "react";

export default function AddsCarousel() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators" style={{ zIndex: "4" }}>
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleCaptions" data-slide-to={1} />
        <li data-target="#carouselExampleCaptions" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://www.ivory.co.il/files/banners/1582812447p47Vf.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>

        <div className="carousel-item">
          <img
            src="https://www.ivory.co.il/files/banners/1582812854n54FJ.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>

        <div className="carousel-item">
          <img
            src="https://www.ivory.co.il/files/banners/1582812814A14KL.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
