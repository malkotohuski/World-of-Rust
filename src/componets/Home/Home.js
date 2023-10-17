import React from "react";
import "../Home/Home.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
    const history = useNavigate();

    const handleLogout = () => {
        // Clear the stored token and email from localStorage or sessionStorage
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("name");
        // Redirect to the login page after logout
        history("/");
    };

    const name = localStorage.getItem("name");
    const isLoggedIn = !!localStorage.getItem("token");

    const onClickHandler = () => {};

    return (
        <body>
            <div className="Home-main">
                <div className="Container">
                    <section>
                        <div className="heading-1">
                            <h2>
                                Welcome to the world of Rust, Friend{" "}
                                {isLoggedIn && <h2>{name}</h2>}
                                {isLoggedIn && (
                                    <button
                                        className="button_logout"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                )}
                            </h2>
                        </div>
                    </section>

                    {/*    <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="stylesheet" href="home.css" />
                    <title>Animate</title>
                </head> */}

                    <section>
                        <div className="home-container">
                            {/*  <div className="row-item item-1"></div> */}
                            <div className="item item-2">
                                <div className="posty-rust"></div>
                                <Link
                                    to="/posty"
                                    className="posty-image"
                                    onClick={onClickHandler}
                                >
                                    Posty
                                </Link>
                            </div>
                            <div className="item item-3">
                                <div className="qaixx-rust"></div>
                                <Link
                                    to="/qaixx"
                                    className="qaixx-image"
                                    onClick={onClickHandler}
                                >
                                    Qaixx
                                </Link>
                            </div>
                            <div className="item item-4">
                                <div className="albin-rust"></div>
                                <Link
                                    to="/albin"
                                    className="albin-image"
                                    onClick={onClickHandler}
                                >
                                    Albin
                                </Link>
                            </div>
                            <div className="item item-5">
                                <div className="trausi -rust"></div>
                                <Link
                                    to="/trausi"
                                    className="trausi-image"
                                    onClick={onClickHandler}
                                >
                                    Trausi{" "}
                                </Link>
                            </div>
                            <div className="item item-6">
                                <div className="deathwingua-rust"></div>
                                <Link
                                    to="/deathwingua "
                                    className="deathwingua-image"
                                    onClick={onClickHandler}
                                >
                                    Deathwingua
                                </Link>
                            </div>
                            <div className="item item-7">
                                <div className="hJune-rust"></div>
                                <Link
                                    to="/hJune "
                                    className="hJune-image"
                                    onClick={onClickHandler}
                                >
                                    hJune
                                </Link>
                            </div>
                            <div className="item item-8">
                                <div className="r00t9r-rust"></div>
                                <Link
                                    to="/r00t9r "
                                    className="r00t9r-image"
                                    onClick={onClickHandler}
                                >
                                    r00t9r
                                </Link>
                            </div>
                            <div className="item item-9">
                                <div className="CoconutB-rust"></div>
                                <Link
                                    to="/CoconutB "
                                    className="coco-image"
                                    onClick={onClickHandler}
                                >
                                    CoconutB
                                </Link>
                            </div>
                            <div className="item item-10">
                                <div className="Riqqeloff-rust"></div>
                                <Link
                                    to="/Riqqeloff "
                                    className="riqqeloff-image"
                                    onClick={onClickHandler}
                                >
                                    Riqqeloff
                                </Link>
                            </div>
                            <div className="item item-11">
                                <div className="Dyanna-rust"></div>
                                <Link
                                    to="/Dyanna "
                                    className="Dyanna-image"
                                    onClick={onClickHandler}
                                >
                                    Dyanna
                                </Link>
                            </div>

                            {/* <div className="row-item item-6"></div> */}
                        </div>
                    </section>

                    {/*  <div className="btn-more">
                    <Link to='/learnmore' className="learn-more" onClick={onClickHandler}>learn more </Link>
                      <button className="btn-more" onClick={learnMore}>learn more</button> 
                </div>  */}
                </div>
            </div>
        </body>
    );
}

export default Home;
