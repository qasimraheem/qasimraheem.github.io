import designer from '../../images/designer.svg';
import frontend from '../../images/frontend.svg';
import mentor from '../../images/mentor.svg';
import Card from '../../components/card/card.js';

import './content.css';

function Content() {
    const designItems = ['UX', 'UI', 'Web', 'Mobile', 'Apps'];
    const frontendItems = ['HTML', 'CSS', 'Sass', 'Less', 'Javascript', 'Python', 'Nodejs', 'React Redux',
        'React Native', 'Blockchain', 'Ethereum', 'Solidity', 'Golang', 'Angular', 'Vue', 'NextJs', 'NestJs','Couchbase', 'MySQL','MongoDB'
    ];
    const experiences = ['UX/UI', 'Product design', 'Freelancing'];

    const designTools = ['Mockups', 'Photoshop Webdesigns', 'Color Tool', 'Adobe Ai', 'Adobe XD',
        'Pen & Paper', 'Sketch', 'Webflow'];
    const devTools = ['Atom/Webstorm', 'Truffle/Ganache/ipfs', 'AWS/Azure/Cloud', 'Geth/Solc/Metamask/Remix', 'Codekit/Codepen', 'Postman/Firecamp/Swagger',
        'Github/Gitlab/Bitbucket', 'Terminal/iTerm/Termius'];
    const mentorStats = ['3 years experience', '10+ short courses', '2 bootcamps', '60+ students',
        '10+ mentor sessions', '6+ group critiques', '90+ comments'];
    return (
        <section id="card-box">
            <div className="container">
                <div className="box">
                    <div className="content">
                        <div className="flex_center">
                            <Card
                                cardImg={designer}
                                title='Designer'
                                description2='Design Tools'
                                description='I value simple content structure, clean design
                                        patterns, and thoughtful interactions.'
                                expTitle='Things I enjoy designing'
                                expItems={designItems}
                                tools={designTools}
                            />
                            <Card
                                cardImg={frontend}
                                description2='Development Tools'
                                title='Blockchain Full-Stack Engineer'
                                description='I like to code things from scratch, and
                                        enjoy bringing ideas to life.'
                                expTitle='Languages I speak'
                                expItems={frontendItems}
                                tools={devTools}
                            />
                            <Card
                                cardImg={mentor}
                                title='Mentor'
                                description2='Contributions'
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