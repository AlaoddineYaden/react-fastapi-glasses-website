import react, { useEffect, useState } from "react";

function Home() {
    return (
      <div className="home">
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
              <img
                src="/img/beach-1866568_1920.jpg"
                className="d-block w-100 imgedit"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/img/depth-of-field-1868535_1920.jpg"
                className="d-block w-100 imgedit"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/img/eyeglass-2589290_1920.jpg"
                className="d-block w-100 imgedit"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container col-xxl-8 px-4 py-5">
          <div
            className="
          myedit
          row
          flex-lg-row-reverse
          align-items-center
          g-5
          py-5
          shadow-lg
          border
        "
          >
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="/img/eyes-3613710_1920.jpg"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                OPTICIEN ##### FES
              </h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                repellat obcaecati error, adipisci molestias, quis ab, tenetur
                corrupti quas fugit ut neque! Obcaecati debitis quos aut iste
                quisquam aliquam cum.
              </p>
            </div>
          </div>
        </div>

        <div className="container col-xxl-8 px-4 py-5">
          <div
            className="
        myedit
          row
          flex-lg-row-reverse
          align-items-center
          g-5
          py-5
          shadow-lg
          border
        "
          >
            <h2>Available :</h2>
            <div className="card-group">
              <div className="card">
                <img
                  src="/img/people-2583390_1920.jpg"
                  className="card-img-top"
                  alt="..."
                  height="200px"
                  width="200px"
                />
                <div className="card-body">
                  <h5 className="card-title">For Girls</h5>
                </div>
              </div>
              <div className="card">
                <img
                  src="/img/beanie-2591388_1920.jpg"
                  className="card-img-top"
                  alt="..."
                  height="200px"
                  width="200px"
                />
                <div className="card-body">
                  <h5 className="card-title">For Men</h5>
                </div>
              </div>
              <div className="card">
                <img
                  src="/img/kid-1508121_1920.jpg"
                  className="card-img-top"
                  alt="..."
                  height="200px"
                  width="200px"
                />
                <div className="card-body">
                  <h5 className="card-title">For kids</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container col-xxl-8 px-4 py-5">
          <div
            className="
        myedit
          row
          flex-lg-row-reverse
          align-items-center
          g-5
          py-5
          shadow-lg
          border
        "
          >
            <div className="row g-5">
              <div className="col-md-8">
                <h3 className="pb-4 mb-4 fst-italic ">Horaires et Accès</h3>

                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Jour de la semaine</th>
                      <th scope="col">Horaires du matin</th>
                      <th scope="col">Horaires de l’après-midi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Lundi</th>
                      <td>10:00</td>
                      <td>20:00</td>
                    </tr>
                    <tr>
                      <th scope="row">Mardi</th>
                      <td>10:00</td>
                      <td>20:00</td>
                    </tr>
                    <tr>
                      <th scope="row">Mercredi</th>
                      <td>10:00</td>
                      <td>20:00</td>
                    </tr>
                    <tr>
                      <th scope="row">Jeudi</th>
                      <td>10:00</td>
                      <td>20:00</td>
                    </tr>
                    <tr>
                      <th scope="row">Vendredi</th>
                      <td>10:00</td>
                      <td>20:00</td>
                    </tr>
                    <tr>
                      <th scope="row">Samedi</th>
                      <td>10:00</td>
                      <td>20:00</td>
                    </tr>
                    <tr>
                      <th scope="row">Dimanche</th>
                      <td colSpan="2">Fermé</td>
                    </tr>
                  </tbody>
                </table>
                <div
                  className="mapouter"
                  style={{
                    position: "relative",
                    textAlign: "right",
                    height: "500px",
                    width: "444px",
                  }}
                >
                  <div className="gmap_canvas">
                    <iframe
                      width={444}
                      height={500}
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=k&z=17&ie=UTF8&iwloc=&output=embed"
                      frameborder={0}
                      scrolling="no"
                      marginheight={0}
                      marginwidth={0}
                      style={{
                        overflow: "hidden",
                        background: "none",
                        height: "500px",
                        width: "444px",
                      }}
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="position-sticky" style={{ top: "2rem" }}>
                  <div className="p-4 mb-3 bg-light rounded">
                    <h4 className="fst-italic">Opticien Krys Fes</h4>
                    <p className="mb-0">
                      RESIDENCE NADA - 48 - RUE ZAHRA AVENUE ALLAL BEN ABDALLAH
                      30000 FES MAROC
                    </p>
                    <a
                      id="callPhone"
                      data-ng-show="addLink"
                      data-ng-href="tel:+212535623394"
                      data-ng-click="gtmEvent('clicCTA', 'clic', 'telephone')"
                      target="_self"
                      href="tel:+21253562xxxxx"
                    >
                      05356-xxxxx
                    </a>
                  </div>
                </div>
              </div>
              <div className="container">
                <section className="customer-logos slider">
                  <div className="slide">
                    <img
                      src="https://capricathemes.com/opencart/OPC02/OPC020037/image/cache/catalog/4-130x87.png"
                      alt="..."
                    />
                  </div>
                  <div className="slide">
                    <img src="https://capricathemes.com/opencart/OPC02/OPC020037/image/cache/catalog/2-130x87.png" />
                  </div>
                  <div className="slide">
                    <img src="https://capricathemes.com/opencart/OPC02/OPC020037/image/cache/catalog/1-130x87.png" />
                  </div>
                  <div className="slide">
                    <img src="https://capricathemes.com/opencart/OPC02/OPC020037/image/cache/catalog/7-130x87.png" />
                  </div>
                  <div className="slide">
                    <img src="https://capricathemes.com/opencart/OPC02/OPC020037/image/cache/catalog/5-130x87.png" />
                  </div>
                  <div className="slide">
                    <img src="https://capricathemes.com/opencart/OPC02/OPC020037/image/cache/catalog/6-130x87.png" />
                  </div>
                  <div className="slide">
                    <img src="https://capricathemes.com/opencart/OPC02/OPC020037/image/cache/catalog/4-130x87.png" />
                  </div>
                  <div className="slide">
                    <img src="https://capricathemes.com/opencart/OPC02/OPC020037/image/cache/catalog/3-130x87.png" />
                  </div>
                  <div className="slide">
                    <img src="https://capricathemes.com/opencart/OPC02/OPC020037/image/cache/catalog/2-130x87.png" />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;
