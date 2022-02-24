import React from "react";

export const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://starwarsblog.starwars.com/wp-content/uploads/2022/01/the-book-of-boba-fett-ch-5-cargo-hold-TALL-1-1536x512.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h2>Padmés Handmaiden Hunts a Sith Lord in Marvels Darth Vader #20  Exclusive Preview</h2>
            <p>While Sabé searches for clues, Vader tracks Crimson Dawn.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://starwarsblog.starwars.com/wp-content/uploads/2022/01/darth-vader-20-cover_TALL-1536x512.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h2>The Book of Boba Fett Cargo Hold: “Chapter 5: Return of the Mandalorian”</h2>
            <p>Check out concept art, stills, and more from the fifth episode of the series.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://starwarsblog.starwars.com/wp-content/uploads/2022/01/lego-starwars-sws-group-tall-8974-1536x512.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h2>New LEGO Star Wars: The Skywalker Saga Trailer and Launch Date Revealed</h2>
            <p>The biggest look yet at the biggest LEGO Star Wars game ever, coming this April.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

/* https://starwarsblog.starwars.com/wp-content/uploads/2022/01/darth-vader-20-cover_TALL-1536x512.jpg
 */
{
  /* <div className="container">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.xtrafondos.com/wallpapers/resized/star-wars-el-despertar-de-la-fuerza-poster-3650.jpg?s=large" className="d-block w-75" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.xtrafondos.com/wallpapers/resized/stormtrooper-de-star-wars-battlefront-5226.jpg?s=large" className="d-block w-75" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.xtrafondos.com/wallpapers/resized/todos-los-personajes-de-star-wars-2307.jpg?s=large" className="d-block w-75" alt="..." />
          </div>
        </div>
      </div>
    </div> */
}
