import React from "react";

export const GroupCards = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card text-white border-0 bg-black">
            <img
              src="https://starwarsblog.starwars.com/wp-content/uploads/2022/02/the-book-of-boba-fett-chapter-7-cargo-hold_TALL-1-1536x512.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                The Book of Boba Fett Cargo Hold: “Chapter 7: In the Name of
                Honor”{" "}
              </h5>
              <p className="card-text">
                Discover concept art, stills, and more from the season finale!
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white border-0 bg-black">
            <img
              src="https://starwarsblog.starwars.com/wp-content/uploads/2022/02/the-high-republic-show-thr-15-cover-reveals-TALL-1536x512.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                The Art of Star Wars: The High Republic Announced and New
                Concept Art Revealed on Star Wars: The High Republic Show{" "}
              </h5>
              <p className="card-text">
                Plus, we reveal the titles of three Phase II books and give you
                your first look.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white border-0 bg-black">
            <img
              src="https://starwarsblog.starwars.com/wp-content/uploads/2022/02/the-high-republic-eye-of-the-storm-2-cover_TALL-1536x512.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Starlight Burns in Marvels Star Wars: The High Republic: Eye of
                the Storm #2 Exclusive Preview{" "}
              </h5>
              <p className="card-text">
                Who has the power to bring the Republic’s Beacon down?
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white border-0 bg-black">
            <img
              src="https://starwarsblog.starwars.com/wp-content/uploads/2022/02/john-williams-tribute-tall-C-1536x512.jpeg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                “Its Pure Magic”: Celebrating John Williams and His Music{" "}
              </h5>
              <p className="card-text">
                In honor of his 90th birthday, Star Wars composers discuss the
                legends seismic impact.
              </p>
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
