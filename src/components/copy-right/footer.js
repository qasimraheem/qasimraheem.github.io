import './footer.css';

function Footer (){
    return(
    <footer className="footer">
        <div className="container relative_container">
            <div id="start_project_container">
                <div className="column2 level-item">
                    <h1>Start a project</h1>
                </div>
                <div className="column2 level-item">
                    <p>Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
                </div>
                <div className="column2 level-item">
                    <a href="">Let's Do This</a>
                </div>
            </div>
            <div className="padding_giver"></div>
            <div className="copyright_container">
                <p className="copyright_text">Copyright by &copy; qasimraheem</p>
            </div>
        </div>
</footer>
    );
}

export default Footer;