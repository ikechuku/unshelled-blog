import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Header = ({ active, setActive, user, handleLogout }) => {
  const userId = user?.uid;
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid bg-faded padding-media">
        <div className="container padding-media">
          <nav className="navbar navbar-toggleable-md navbar-light">
            <button
              className="navbar-toggler mt-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              data-bs-parent="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle Navigation"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${active === "home" ? "active" : "border"
                      }`}
                    onClick={() => setActive("home")}
                  >
                    Home
                  </li>
                </Link>

                <div style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item  nav-link ${active === "create" ? "active" : "border"
                      }`}
                    onClick={() => {
                      if (userId) {
                        navigate("/create")
                        setActive("create")
                      } else {
                        toast.warning("Please login to create a post")
                      }
                    }}
                  >
                    Create
                  </li>
                </div>

                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item lg:ml-20`}
                  >
                    <h3 className="heading lg:ml-20 text-3xl"> Unshelled Blog</h3>
                  </li>
                </Link>
              </ul>
              <div className="row g-3">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {userId ? (
                    <>
                      <div className="profile-logo">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          alt="logo"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            marginTop: "12px",
                          }}
                        />
                      </div>
                      <p style={{ marginTop: "12px", marginLeft: "5px" }}>
                        {user?.displayName}
                      </p>
                      <li className="nav-item nav-link" onClick={handleLogout}>
                        Logout
                      </li>
                    </>
                  ) : (
                    <Link to="/auth" style={{ textDecoration: "none" }}>
                      <li
                        className={`nav-item nav-link ${active === "login" ? "active" : ""
                          }`}
                        onClick={() => setActive("login")}
                      >
                        Login
                      </li>
                    </Link>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Header;
