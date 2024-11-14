import React from "react";
import HomePage from "./Vegetables";

function Home() {
  return (
    <>
      <div className="container-fluid align-item-center justify-content-center w-80 vh-80 border mx-0 ">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="Images/3b360279-8b43-40f3-9b11-604749128187.jpg"
                class="d-block w-100"
                alt="..."
                height={450}
                width={700}
              />
            </div>
            <div class="carousel-item">
              <img
                src="Images/01-healthiest-fruits-vegetables-REV02.jpg"
                class="d-block w-100"
                alt="..."
                height={450}
                width={700}
              />
            </div>
            <div class="carousel-item">
              <img
                src="Images/vegetables-that-are-actually-fruit-66ccedf92ec3a.jpg"
                class="d-block w-100"
                alt="..."
                height={450}
                width={700}
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <HomePage />
      </div>
    </>
  );
}

export default Home;
