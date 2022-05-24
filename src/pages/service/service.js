import './service.css';

function Services (){
    return(
        <main>
        <section className="slider">
            <div className="slider_container">
                <figure>
                    <div id="slide1" className="sliderimg">
                    </div>
                    <div id="slide2" className="sliderimg">
                    </div>
                    <div id="slide3" className="sliderimg">
                    </div>
                    <div id="slide4" className="sliderimg">
                    </div>
                </figure>
            </div>
            <div className="slider_text">
                <h1>PingDev</h1>
                <h2>PING The DEVELOPERS For The Best Solution Of Your Problems</h2>
            </div>
        </section>
        <section className="solution_section">
            <div className="container">
                <div className="solution_card_containers">
                    <a href="frontend.php">
                        <div className="solution_card">
                            <figure className="solution_image" id="frontend_solution">
                                <figcaption>Frontend Solutions</figcaption>
                            </figure>
                        </div>
                    </a>
                    <a href="backend.php">
                        <div className="solution_card">
                            <figure className="solution_image" id="backend_solutions">
                                <figcaption>Backend Solutions</figcaption>
                            </figure>
                        </div>
                    </a>
                    <a href="dbmanagement.php">
                        <div className="solution_card">
                            <figure className="solution_image" id="db_solution">
                                <figcaption>Database Designs and Management</figcaption>
                            </figure>
                        </div>
                    </a>
                   <a className="disable">
                       <div className="solution_card">
                           <figure className="solution_image" id="android_solutions">
                               <figcaption>Android Development</figcaption>
                           </figure>
                       </div>
                   </a>
                    <a className="disable">
                        <div className="solution_card">
                            <figure className="solution_image" id="desktop_solutions">
                                <figcaption>Desktop Applications</figcaption>
                            </figure>
                        </div>
                    </a>
                    <a  href="webdesigns.php">
                        <div className="solution_card">
                            <figure className="solution_image" id="webbdesigns_solutions">
                                <figcaption>Web Designs</figcaption>
                            </figure>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </main>
    );
}

export default Services;