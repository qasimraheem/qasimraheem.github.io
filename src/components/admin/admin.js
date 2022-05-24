
import './admin.css';

function Admin (){
    return(
        <section className="about_section">
            <div className="container">
                <form className="card_info_container" method="post" action="adminaction.php">
                    <div className="form_row">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="UserName"/>
                    </div>

                    <div className="form_row">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="UserName"/>
                    </div>
                    <button className="btn" name="btn">Login</button>
                </form>
            </div>
        </section>
    );
}

export default Admin;