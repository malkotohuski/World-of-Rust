import React from "react";
import '../Home/Home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const onClickHandler = () => {

}

const Home = () => {
    return (
        <div className="home-page">
            <section>
                <h2 className="heading-1">Welcome to the world of Rust ! <FontAwesomeIcon icon="fa-solid fa-gun" /></h2>

            </section>

            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="home.css" />
                <title>Animate</title>
            </head>
            <body>
                <section>

                    <div className="home-container">
                        <div className="row-item item-1">1</div>
                        <div className="item item-2">
                            <div className="posty-rust">
                            </div>
                            <Link to='/posty' className="posty-image" onClick={onClickHandler}>Posty</Link>
                        </div>
                        <div className="item item-3">
                            <div className="qaixx-rust">
                            </div>
                            <Link to='/qaixx' className="qaixx-image" onClick={onClickHandler}>Qaixx</Link>
                        </div>
                        <div className="item item-4">
                            <div className="albin-rust">
                            </div>
                            <Link to='/albin' className="albin-image" onClick={onClickHandler}>Albin</Link>
                        </div>
                        <div className="item item-5">
                            <div className="trausi -rust">
                            </div>
                            <Link to='/trausi' className="trausi-image" onClick={onClickHandler}>Trausi </Link>
                        </div>
                        <div className="row-item item-6">6</div>
                    </div>
                </section>
                <div className="btn-more">
                    <Link to='/learnmore' className="learn-more" onClick={onClickHandler}>learn more </Link>
                    {/*   <button className="btn-more" onClick={learnMore}>learn more</button> */}
                </div>
            </body>

        </div>
    );
};

export default Home;