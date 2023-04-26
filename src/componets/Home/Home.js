import React from "react";
import '../Home/Home.css'

const Home = () => {
    return (
        <div className="home-page">
            <h2 className="heading-1">HELLO, SURVIVORS!</h2>
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="../normalize.css" />
                <link rel="stylesheet" href="style.css" />
                <title>Animate</title>
            </head>
            <body>
                <button class="btn-more">learn more</button>
            </body>
        </div>
    );
};

export default Home;