import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

const Author = () => {

  const [authorData, setAuthorData] = useState()
  const [followers, setFollowers] = useState()
  const [loading, setLoading] = useState(true)
  const [followStatus, setFollowStatus] = useState(false)
  const { authorId } = useParams()

  async function getAuthorData() {
    setLoading(true)
    const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`)
    setAuthorData(data)
    setFollowers(data.followers)
    setLoading(false)
  }

  function handleFollow() {
    if (!followStatus) {
      setFollowers(followers + 1)
      setFollowStatus(true)
    }
    else {
      setFollowers(followers - 1)
      setFollowStatus(false)
    }
  }

  useEffect(() => {
    getAuthorData()
  }, [])

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        {loading ? (
          <section aria-label="section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="d_profile de-flex">
                    <div className="de-flex-col">
                      <div className="profile_avatar">
                        <Skeleton height={150} width={150} borderRadius={150} />
                        <i className="fa fa-check" style={{zIndex: 50}}></i>
                        <div className="profile_name">
                          <h4>
                            <Skeleton height={25} width={200} borderRadius={1} />
                            <Skeleton height={15} width={95} borderRadius={1} />
                            <Skeleton height={15} width={200} borderRadius={1} />
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="profile_follow de-flex">
                      <div className="de-flex-col">
                        <Skeleton height={35} width={150} borderRadius={1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="de_tab tab_simple">
                    <AuthorItems />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section aria-label="section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="d_profile de-flex">
                    <div className="de-flex-col">
                      <div className="profile_avatar">
                        <img src={authorData.authorImage} alt="" />
                        <i className="fa fa-check"></i>
                        <div className="profile_name">
                          <h4>
                            {authorData?.authorName}
                            <span className="profile_username">@{authorData.tag}</span>
                            <span id="wallet" className="profile_wallet">
                              {authorData.address}
                            </span>
                            <button id="btn_copy" title="Copy Text">
                              Copy
                            </button>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="profile_follow de-flex">
                      <div className="de-flex-col">
                        <div className="profile_follower">{followers} followers</div>
                        <Link to="#" className="btn-main" onClick={handleFollow}>
                          {followStatus ? 'Unfollow': 'Follow'} 
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="de_tab tab_simple">
                    <AuthorItems authorData={authorData} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Author;