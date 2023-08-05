import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from "axios";
import Countdown from "../UI/Countdown";
import Skeleton from "react-loading-skeleton";

const ExploreItems = () => {
  const [exploreItems, setExploreItems] = useState();
  const [itemSort, setItemSort] = useState()
  const [itemQuantity, setItemQuantity] = useState(8);
  const [loading, setLoading] = useState(true);

  async function getExploreItems() {
    setLoading(true);

    if (itemSort) {
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${itemSort}`
      );
      setExploreItems(data);
    }
    else {
      const { data } = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore"
      );
      setExploreItems(data);
    }

    setLoading(false);
  }

  function loadMoreItems() {
    if (itemQuantity === 16) {
      return;
    } else {
      setItemQuantity(itemQuantity + 4);
    }
  }

  useEffect(() => {
    getExploreItems();
  }, []);

  useEffect(() => {
    getExploreItems();
  }, [itemSort])

  return (
    <>
      <div>
        <select id="filter-items" defaultValue="">
          <option value="" onClick={() => setItemSort('')}>Default</option>
          <option value="price_low_to_high" onClick={() => setItemSort('price_low_to_high')}>Price, Low to High</option>
          <option value="price_high_to_low" onClick={() => setItemSort('price_high_to_low')}>Price, High to Low</option>
          <option value="likes_high_to_low" onClick={() => setItemSort('likes_high_to_low')}>Most liked</option>
        </select>
      </div>

      {loading ? (
        <>
          {new Array(8).fill(0).map((_, index) => (
            <div
              key={index}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover", marginBottom: 5 }}
            >
              <Skeleton height={441} borderRadius={1} />
            </div>
          ))}
        </>
      ) : (
        <>
          {exploreItems.slice(0, itemQuantity).map((item, index) => (
            <div
              key={item.id}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link
                    to="/author"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    <img className="lazy" src={item.authorImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>

                {item.expiryDate && <Countdown expiryDate={item.expiryDate} />}

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
                  <Link to="/item-details">
                    <img
                      src={item.nftImage}
                      className="lazy nft__item_preview"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="nft__item_info">
                  <Link to="/item-details">
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
        </>
      )}

      {itemQuantity !== 16 && (
        <div className="col-md-12 text-center">
          <Link
            to=""
            id="loadmore"
            className="btn-main lead"
            onClick={loadMoreItems}
          >
            Load more
          </Link>
        </div>
      )}
    </>
  );
};

export default ExploreItems;
