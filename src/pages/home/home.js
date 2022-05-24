import Banner from '../../components/banner/banner';
import Personal from '../personal-info/personal.js';
import Content from '../../components/content/content.js';
import Compani from '../../components/compani/compani.js';

function Home() {
  return (
    <div>
        <Banner/>
        <Personal/>
        <Content/>
        <Compani/>
    </div>
  );
}

export default Home;
