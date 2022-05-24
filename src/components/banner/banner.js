import banner from '../../images/banner.svg';
import avatar from '../../images/avatar.svg';
import './banner.css';

function Banner(){
    return(
        <section>
         <div className="container">
            <div className="main_text">
                <h1 className="main_title">Designer, Full-Stack Developer, Mentor & Software Engineer</h1>
                <h2 className="mini_title">I design and code solutions because that's not impossible, and I love what I do. </h2>
                <figure className="avatar_container">
                    <div className="avatar_circle"></div>
                    <img id="avatar_img" src={avatar}/>
                </figure>
            </div>
            <div className="flex_center">
                <figure id="computer_svg_container">
                   <img src={banner}/>
                </figure> 
            </div>
        </div>
    </section>
    );
}

export default Banner;