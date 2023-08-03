import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

const TopSellers = () => {

  const [topSellers, setTopSellers] = useState();
  const [loading, setLoading] = useState(false);

  async function getTopSellers() {
    setLoading(true);
    const { data } = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers')
    setTopSellers(data);
    setLoading(false);
  }

  useEffect(() => {
    getTopSellers();
  }, [])

  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">

            {loading ? (
              <>
                {new Array(12).fill(0).map((_, index) => (
                  <li key={index} style={{marginBottom: 20}}>
                    <div className="author_list_pp" style={{marginTop: 0}}>
                      <Link to="/author">
                        <Skeleton height={50} width={50} borderRadius={50} style={{top: -5}} />
                        <i className="fa fa-check"></i>
                      </Link>
                    </div>
                    <div className="author_list_info">
                      <Skeleton width={85} height={22} borderRadius={1} style={{marginBottom: -10}} />
                      <Skeleton width={40} height={22} borderRadius={1} style={{marginBottom: -10}} />
                    </div>
                  </li>
                ))}
              </>
            ) : (
              <>
                {topSellers?.map((item) => (
                  <li key={item.id}>
                    <div className="author_list_pp">
                      <Link to={`/author/${item.authorId}`}>
                        <img
                          className="lazy pp-author"
                          src={item.authorImage}
                          alt=""
                        />
                        <i className="fa fa-check"></i>
                      </Link>
                    </div>
                    <div className="author_list_info">
                      <Link to={`/author/${item.authorId}`}>{item.authorName}</Link>
                      <span>{item.price} ETH</span>
                    </div>
                  </li>
                ))}
              </>
            )}

            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
