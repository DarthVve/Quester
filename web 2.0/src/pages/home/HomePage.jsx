import './HomePage.css';

import { NavBar, Carousel, Header, Footer } from '../../components';

const HomePage = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
      <Carousel />
      <Footer />
    </div>
  )
}

export default HomePage;