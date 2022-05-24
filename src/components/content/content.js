import designer from '../../images/designer.svg';
import frontend from '../../images/frontend.svg';
import mentor from '../../images/mentor.svg';
import Card from '../../components/card/card.js';

import './content.css';

function Content(){
    const designItems = ['UX', 'UI', 'Web', 'Mobile', 'Apps', 'Logos'];
    const frontendItems = ['HTML', 'Pug', 'Slim', 'CSS', 'Sass', 'Less'];
    const experiences = ['UX/UI', 'Product design', 'Freelancing'];

    const designTools = ['Balsamiq Mockups', 'Photoshop Webdesigns' , 'Color Tool', 'Adobbe Ai', 
                        'Pen & Paper', 'Sketch','Webflow'];
    const devTools    =['Atom', 'Bitbucket', 'Bootstrap', 'Webstorm', 'Codekit','Codepen',
                        'Github', 'Gitlab', 'Terminal'];
    const mentorStats =['3 years experience', '10+ short courses', '2 bootcamps' , '60+ students',
                        '10+ mentor sessions' , '6+ group critiques', '90+ comments'];
    return(
        <section id="card-box">
            <div class="container">
            <div class="box">
                <div class="content">
                    <div class="flex_center">
                        <Card
                        cardImg={designer}
                        title='Designer'
                        description='I value simple content structure, clean design
                                        patterns, and thoughtful interactions.'
                        expTitle='Things I enjoy designing'
                        expItems={designItems}
                        tools={designTools}
                        />
                        <Card 
                        cardImg={frontend}
                        title='Front-end Developer'
                        description='I like to code things from scratch, and
                                        enjoy bringing ideas to life in the browser.'
                        expTitle='Languages I speak'
                        expItems={frontendItems}
                        tools={devTools}
                        />
                        <Card
                        cardImg={mentor}
                        title='Mentor'
                        description='I genuinely care about people, and love 
                                        helping new designers work on their craft.'
                        expTitle='Experiences I draw from'
                        expItems={experiences}
                        tools={mentorStats}
                        />
                    </div>
                </div>
            </div>
        </div>
            
        </section>
    );
}

export default Content;