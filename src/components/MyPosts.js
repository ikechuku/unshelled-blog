import React, { useEffect, useState } from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { excerpt } from "../utility";

const BlogSection = ({ blogs, user, handleDelete }) => {
  const userId = user?.uid;
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if (user.email === "admin@test.com") {
      setIsAdmin(true)
    }
  }, [])
  const myPosts = blogs.filter(item => item.userId === userId)
  // console.log(myPosts);
  return (
    <div>
      <div className="blog-heading text-start py-2 mb-4">My Posts</div>
      {(isAdmin ? blogs.length : myPosts.length) ? <>
        {(isAdmin ? blogs : myPosts)?.map((item) => (
          <div className="row pb-4" key={item.id}>
            <div className="col-md-5">
              <div className="hover-blogs-img">
                <div className="blogs-img">
                  <img src={item.imgUrl} alt={item.title} />
                  <div></div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="text-start">
                <h6 className="category catg-color">{item.category}</h6>
                <span className="title py-2">{item.title}</span>
                <span className="meta-info">
                  <p className="author">{item.author}</p> -&nbsp;
                  {item.timestamp.toDate().toDateString()}
                </span>
              </div>
              <div className="short-description text-start">
                {excerpt(item.description, 120)}
              </div>
              <Link to={`/detail/${item.id}`}>
                <button className="btn btn-read">Read More</button>
              </Link>
              {userId && (
                <div style={{ float: "right" }}>
                  <FontAwesome
                    name="trash"
                    style={{ margin: "15px", cursor: "pointer" }}
                    size="2x"
                    onClick={() => handleDelete(item.id)}
                  />
                  <Link to={`/update/${item.id}`}>
                    <FontAwesome
                      name="edit"
                      style={{ cursor: "pointer" }}
                      size="2x"
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </> : <div className="">
        <p>You have no posts yet</p>
        <Link to="/create" >
          <button
            className={`mx-auto my-4 shadow-md nav-item nav-link border`}
          >
            Create a Post
          </button>
        </Link>
      </div>}

    </div>
  );
};

export default BlogSection;
