import React from "react";
import NFT from "../../images/nft.png";
import backgroundImage from "../../images/bg-shape-1.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section
      id="section-hero"
      aria-label="section"
      className="no-top no-bottom vh-100"
      data-bgimage="url(images/bg-shape-1.jpg) bottom"
      style={{ background: `url(${backgroundImage}) bottom / cover` }}
    >
      <div className="v-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="spacer-single"></div>
              <div data-aos="fade-up" data-aos-duration="900" data-aos-once="true">
                <h6 data-aos="fade-in" data-aos-delay="500" data-aos-duration="900" data-aos-once="true">
                  <span className="text-uppercase id-color-2">
                    Ultraverse Market
                  </span>
                </h6>
              </div>
              <div className="spacer-10"></div>
              <div data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300" data-aos-once="true"><h1 data-aos="fade-in" data-aos-delay="800" data-aos-once="true">Create, sell or collect digital items.</h1></div>
              <div data-aos="fade-up" data-aos-duration="1100" data-aos-delay="600" data-aos-once="true">
                <p className="lead" data-aos="fade-in" data-aos-delay="1100" data-aos-once="true">
                  Unit of data stored on a digital ledger, called a blockchain,
                  that certifies a digital asset to be unique and therefore not
                  interchangeable
                </p>
              </div>
              <div className="spacer-10"></div>
              <Link className="btn-main lead" to="/explore" data-aos="fade-in" data-aos-delay="1400" data-aos-duration="1100" data-aos-once="true">
                Explore
              </Link>
              <div className="mb-sm-30"></div>
            </div>
            <div className="col-md-6 xs-hide">
              <img src={NFT} className="lazy img-fluid" alt="" data-aos="fade-in" data-aos-delay="1400" data-aos-duration="1100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
