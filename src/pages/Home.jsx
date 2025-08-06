import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
// import OurPolicy from '../components/OurPolicy'
// import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <div className=" ">
        <img className='h-full w-full object-cover' src="https://i.pinimg.com/1200x/b7/2d/f3/b72df3a3fccd643a9a243212c36bea27.jpg" alt="" />
      </div>
      <LatestCollection/>
      <Hero />
      <BestSeller/>
      {/* <OurPolicy/> */}
      {/* <NewsletterBox/> */}
    </div>
  )
}

export default Home;
