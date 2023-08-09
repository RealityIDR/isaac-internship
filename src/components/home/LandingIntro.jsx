import React from "react";

const LandingIntro = () => {
  return (
    <section id="section-intro" className="no-top no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <div data-aos="fade-up" data-aos-duration="1600" data-aos-once="true"><i className="bg-color-2 i-boxed icon_wallet" data-aos="fade-in" data-aos-delay="800" data-aos-once="true"></i></div>
              <div className="text">
                <h4 className="" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="800" data-aos-once="true">Set up your wallet</h4>
                <div data-aos="fade-up" data-aos-duration="1600" data-aos-once="true">
                  <p data-aos="fade-in" data-aos-delay="700" data-aos-once="true">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem.
                  </p>
                </div>
              </div>
              <i className="wm icon_wallet"></i>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <div data-aos="fade-up" data-aos-duration="1600" data-aos-once="true"><i className="bg-color-2 i-boxed icon_cloud-upload_alt" data-aos="fade-in" data-aos-delay="800" data-aos-once="true"></i></div>
              <div className="text">
                <h4 className="" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="800" data-aos-once="true">Add your NFT's</h4>
                <div data-aos="fade-up" data-aos-duration="1600" data-aos-once="true">
                  <p data-aos="fade-in" data-aos-delay="700" data-aos-once="true">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem.
                  </p>
                </div>
              </div>
              <i className="wm icon_cloud-upload_alt"></i>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <div data-aos="fade-up" data-aos-duration="1600" data-aos-once="true"><i className="bg-color-2 i-boxed icon_tags_alt" data-aos="fade-in" data-aos-delay="800" data-aos-once="true"></i></div>
              <div className="text">
                <h4 className="" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="800" data-aos-once="true">Sell your NFT's</h4>
                <div data-aos="fade-up" data-aos-duration="1600" data-aos-once="true">
                  <p data-aos="fade-in" data-aos-delay="700" data-aos-once="true">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem.
                  </p>
                </div>
              </div>
              <i className="wm icon_tags_alt"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingIntro;
