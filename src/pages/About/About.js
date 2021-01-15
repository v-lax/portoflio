import React from "react";

const Home = () => {
    return (
        <div className="Container mb-2">
            <div className="jumbotron">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            </div>
            <div className="row">
                <div className="col-md">
                        <img class="card-img-top" src="./assets/India_gate.0b20b003.jpg" alt="India Gate"/>
                </div>
                <div className="col-md">
                        <img class="card-img-top" src="./assets/marinadrive2.f54a6999.jpg" alt="Waga Border"/>
                </div>
                <div className="col-md">
                        <img class="card-img-top" src="./assets/tajmahal_front.8c877a65.jpg" alt="Taj Mahal"/>
                </div>
                <div className="col-md">
                        <img class="card-img-top" src="./assets/Waga_border_child.f60455db.jpg" alt="Waga Border Child"/>
                </div>
                </div>
            </div>

    )
}

export default Home;