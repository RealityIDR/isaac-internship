import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Countdown from "../UI/Countdown";
import OwlCarousel from 'react-owl-carousel'
import Skeleton from "react-loading-skeleton";

const NewItems = () => {

  const [newItems, setNewItems] = useState()
  const [loading, setLoading] = useState()

  async function getNewItems() {
    setLoading(true)
    const { data } = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems")
    setNewItems(data)
    setLoading(false)
  }

  useEffect(() => {
    getNewItems()
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
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row" data-aos="fade-in" data-aos-duration="1000" data-aos-once="true">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          {loading ? (
            <>
              {new Array(4).fill(0).map((item, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <Skeleton height={50} width={50} borderRadius={50} />
                    </div>
                    <div className="nft__item_wrap">
                      <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                          <button>Buy Now</button>
                          <div className="nft__item_share">
                            <h4>Share</h4>
                            <a href="" target="_blank" rel="noreferrer">
                              <i className="fa fa-facebook fa-lg"></i>
                            </a>
                            <a href="" target="_blank" rel="noreferrer">
                              <i className="fa fa-twitter fa-lg"></i>
                            </a>
                            <a href="">
                              <i className="fa fa-envelope fa-lg"></i>
                            </a>
                          </div>
                        </div>
                      </div>
    
                      <Skeleton height={200} width={200} borderRadius={10}/>
                    </div>
                    <div className="nft__item_info">
                      <Skeleton width={125} height={20} borderRadius={1} />
                      <Skeleton width={70} height={20} borderRadius={1} />
                      <div className="nft__item_like">
                        <Skeleton width={30} height={20} borderRadius={1} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <OwlCarousel items={4} margin={10} nav={true} responsive={responsive} loop>
              {newItems?.map((item) => (
                <div className="" key={item.id}>
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <Link
                        to={`/author/${item.authorId}`}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Creator: Monica Lucas"
                      >
                        <img className="lazy" src={item.authorImage} alt="" />
                        <i className="fa fa-check"></i>
                      </Link>
                    </div>
    
                    {item.expiryDate && (
                      <Countdown expiryDate={item.expiryDate} />
                    )}
    
                    <div className="nft__item_wrap">
                      <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                          <button>Buy Now</button>
                          <div className="nft__item_share">
                            <h4>Share</h4>
                            <a href="" target="_blank" rel="noreferrer">
                              <i className="fa fa-facebook fa-lg"></i>
                            </a>
                            <a href="" target="_blank" rel="noreferrer">
                              <i className="fa fa-twitter fa-lg"></i>
                            </a>
                            <a href="">
                              <i className="fa fa-envelope fa-lg"></i>
                            </a>
                          </div>
                        </div>
                      </div>
    
                      <Link to={`/item-details/${item.nftId}`}>
                        <img
                          src={item.nftImage}
                          className="lazy nft__item_preview"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="nft__item_info">
                      <Link to={`/item-details/${item.nftId}`}>
                        <h4>{item.title}</h4>
                      </Link>
                      <div className="nft__item_price">{item.price} ETH</div>
                      <div className="nft__item_like">
                        <i className="fa fa-heart"></i>
                        <span>{item.likes}</span>
                      </div>
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

export default NewItems;
