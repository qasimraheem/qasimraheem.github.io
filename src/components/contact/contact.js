
import './contact.css'


function Contact (){
    return(
        <main>
        <section className="contact_section container">
            <aside className="contact_left">
                <div className="contact_container">
                    <div>
                        <figure className="icon location_icon">
                        </figure>
                        <div>
                            <h2>
                                Address
                            </h2>
                            <p>Street 1, Fazaltown Phase 1, Rawalpindi</p>
                        </div>
                    </div>
                    <div>
                        <figure className="icon mobile_icon">
                        </figure>
                        <div>
                            <h2>
                                Lets Talk
                            </h2>
                            <p>0092 3142603936</p>
                        </div>
                    </div>
                    <div>
                        <figure className="icon email_icon">
                        </figure>
                        <div>
                            <h2>
                                General Support
                            </h2>
                            <p>qasimmehmood13936@gmail.com</p>
                        </div>
                    </div>
                </div>
            </aside>
            <aside className="contact_right">
                <div className="right_container">
                    <h1>
                        Send Us A Message
                    </h1>
                    <form action="action.php" method="post">
                        <div className="form_row">
                            {/* <lable>TELL US YOUR NAME *</lable> */}
                            <div className="user_name">
                                <input name="fname" type="text" placeholder=" Name"/>
                                {/* <input name="lname" type="text" placeholder="Last Name"/> */}
                            </div>
                        </div>
    
                        <div className="form_row">
                            {/* <lable>ENTER YOUR EMAIL *</lable> */}
                            <input name="email" type="email" placeholder="Email"/>
                        </div>
                        <div className="form_row">
                            {/* <lable>ENTER PHONE NUMBER</lable> */}
                            <input name="number" type="number" placeholder="Phone"/>
                        </div>
                        <div className="form_row">
                            <lable>MESSAGE *</lable>
                            <textarea name="message" type="text" placeholder="Write us a message"></textarea>
                        </div>
                        <button type="submit" formtarget="_blank" name="submit_btn" className="btn">Submit</button>
                    </form>
                </div>
            </aside>
        </section>
    </main>
    );
}

export default Contact;