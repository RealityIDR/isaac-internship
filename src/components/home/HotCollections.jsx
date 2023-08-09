import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from "axios";

const HotCollections = () => {

  const [collections, setCollections] = useState()
  const [loading, setLoading] = useState()
  
  async function getCollections() {
    setLoading(true)
    const { data } = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections')
    setCollections(data)
    setLoading(false)
  }

  useEffect(() => {
    getCollections()
  }, [])

  const responsive = {
    0: {
      items: 1,
    },

    576: {
      items: 2,
    },

    768: {
      items: 3,
    },

    1024: {
      items: 4,
    },
  }

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row" data-aos="fade-in" data-aos-duration="1000" data-aos-once="true">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          {!loading ? (
            <OwlCarousel items={4} margin={10} nav={true} responsive={responsive} loop>
              {new Array(4).fill(0).map((item, index) => (
                <div className="" key={index}>
                  <div className="nft_coll">
                    <div className="nft_wrap">
                      <Skeleton width={268} height={200} style={{top: -7}} />
                    </div>
                    <div className="nft_coll_pp">
                      <Skeleton height={50} width={50} borderRadius={50} />
                      <i className="fa fa-check" style={{zIndex: 50}}></i>
                    </div>
                    <div className="nft_coll_info">
                      <Skeleton width={85} height={20} borderRadius={1} />
                      <Skeleton width={50} height={20} borderRadius={1} />
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          ) : (
            <OwlCarousel items={4} margin={10} nav={true} responsive={responsive} loop>
              {collections?.map((item) => (
                <div className="" key={item.id}>
                  <div className="nft_coll">
                    <div className="nft_wrap">
                      <Link to={`/item-details/${item.nftId}`}>
                        <img src={item.nftImage} className="lazy img-fluid" alt="" />
                      </Link>
                    </div>
                    <div className="nft_coll_pp">
                      <Link to="/author">
                        <img className="lazy pp-coll" src={item.authorImage} alt="" />
                      </Link>
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="nft_coll_info">
                      <Link to="/explore">
                        <h4>{item.title}</h4>
                      </Link>
                      <span>ERC-{item.code}</span>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default HotCollections;