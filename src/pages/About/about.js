
import './about.css';

function About (){
    return(
        <main>
        <section className="about_section">
            <div className="my_info">
                <figure className="user_Image about_section_image">
                </figure>
                <h1 className="main_title">@Qasim Raheem Khokhar</h1>
                <h2>I am a software engineer.</h2>
                <a className="btn" href="qasimcv.pdf">Curriculum Vitae</a>
            </div>
            <hr/>
            <div className="container column_container">
                <div className="column3">
                    <div className="icon_bg">
                        <figure className="icon iconx2 laptop_icon">
                        </figure>
                    </div>
                    <h2 className="title">About</h2>
                    <ul>
                        <li>
                            <a className="link" href="https://www.gitshowcase.com/qasimraheem">Projects</a>
                            <a className="link" href="https://www.linkedin.com/in/qasimraheem/">Work X</a>
                        </li>
                        <li> • Software Engineer.</li>
                        <li>• Tech Enthusiast. • Technopreneur.</li>
                        <li>• Full Stack Web Engineer. </li>
                        <li>• Blockchain Developer & Enthusiast.</li>
                        <li>• Specialized in JavaScript & Blockchain.</li>
                        <li>• Open-Source Maintainer & Contributor.</li>
                    </ul>
                    <p><a href="http://qasimraheem.dev" className="link">@qasimraheem</a> on the Internet. Find and hit me up!</p>
                </div>
                <div className="column3">
                    <div className="icon_bg"> <figure className="icon iconx2 coding_icon">
                        </figure></div>

                    <h2 className="title">Skills</h2>
                    <ul>
                        <li>
                            • Blockchain   • Solidity  • NOS(NEO)
                        </li>
                        <li> • Hyperledger   • GO  • JavaScript/ES8 </li>
                        <li>• React  • React-Native  • Redux </li>
                        <li>• Angular  • Node/Express  • GraphQL  </li>
                        <li>• VR  • Web-VR  • Aframe  • React-VR </li>
                    </ul>
                   
                    <p><a>@qasimraheem</a> on the Internet. Find and hit me up!</p>
                </div>
                <div className="column3">
                    <div className="icon_bg"> <figure className="icon  iconx2 earth_icon">
                        </figure>
                    </div>
                    <h2 className="title">
                    DevOps/Tools
                    </h2>
                    <ul>
                        <li> • SQL  • MongoDB  • Firebase </li>
                        <li>• AWS/Azure  • Linux  • Git </li>
                        <li> • Adobe PS/AI/XD </li>
                    </ul>
                    {/* <ul>
                        <li><a className="link" href="https://www.gitshowcase.com/qasimraheem">• Projects Showcase</a> </li>
                        <li><a href="https://www.facebook.com/qasim.raheem.khokhar" className="link">• Facebook </a></li>
                        <li><a className="link" href="https://github.com/qasimraheem">• Github </a></li>
                        <li><a href="https://www.linkedin.com/in/qasimraheem/" className="link">• LinkedIn </a></li>
                    </ul> */}
                </div>
            </div>
        </section>
    </main>
    );
}

export default About;