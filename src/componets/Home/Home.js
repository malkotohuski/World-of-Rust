import React from "react";
import '../Home/Home.css'


const Home = () => {
    return (
        <div className="home-page">
            <section>
                <h2 className="heading-1">Welcome to the world of Rust !</h2>
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
                        <div className="item item-2">2</div>
                        <div className="item item-3">3</div>
                        <div className="item item-4">4</div>
                        <div className="item item-5">5</div>
                        <div className="row-item item-6">6</div>
                    </div>
                </section>
                <button class="btn-more">learn more</button>
            </body>

        </div>
    );
};

export default Home;