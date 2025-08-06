// Converted JSX with Tailwind CSS from your original code

import Born from '../Asset/born.webp';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
// import Mobilenav from '../mobilecomponents/Mobilenav';


export default function Search() {
  return (
    <div className="bg-white mx-8 overflow-y-hidden">
      {/* <Navbar /> */}
      <div className="relative">
        <header className="h-[100px] flex justify-start text-start w-auto">
          <div className='w-full flex mt-8' >
            <p className="text-[#5e5b5b] text-[100%] w-[150px] mt-5 font-medium">
              Perfect blend of fashion and ease in our comfortable clothes.
            </p>
            <div className="inline-block px-4 py-1 text-[16px] font-medium text-black bg-gray-200 border-[1.5px] border-black rounded-full absolute ml-[20%] top-[1px] after:content-[''] after:absolute after:-bottom-[17px] after:left-1/2 after:-translate-x-1/2 after:border-[8px] after:border-transparent after:border-t-black/80">
              MODERN
            </div>
            <h1 className="text-black text-[60px] leading-[4.5rem] ml-[50px] font-medium">
              RELEASE STYLE<br />WITH <span className="text-[#8b8a8a]">CONFIDENCE</span>
            </h1>
          </div>
        </header>

        <div className="inline-block px-4 py-1 text-[16px] text-black border-[1.5px] border-black rounded-full absolute right-[10%] top-[3.6%] after:content-[''] after:absolute after:-bottom-[17px] after:left-1/2 after:-translate-x-1/2 after:border-[8px] after:border-transparent after:border-t-black/80">
          COMFORT
        </div>

        <div className="w-full mt-20">
          <img className="w-full h-auto" src="https://i.pinimg.com/1200x/ac/52/47/ac5247d4a2260be6222600696f94c597.jpg" alt="" />
        </div>

        <div className="h-[60px] flex justify-between items-center border-b border-[#a7a5a5]">
          <ruby className="text-black text-[20px] font-semibold">
            BRANDS <rt className="text-black text-[14px] font-medium">Top_rated</rt>
          </ruby>
          <div className="flex gap-5 h-[40px]">
            <img src="https://i.pinimg.com/564x/f8/4e/b8/f84eb86269d0c89faeee911f43285d1a.jpg" alt="" className="aspect-square" />
            <img src="https://i.pinimg.com/736x/c0/3e/be/c03ebe17587fbff4d25a413feeb3d723.jpg" alt="" className="aspect-square" />
            <img src="https://i.pinimg.com/564x/97/bc/50/97bc504d0028ee6f745d2caf536e5596.jpg" alt="" className="aspect-square" />
            <img src="https://i.pinimg.com/564x/49/49/b8/4949b86747bc1dd84f28893b5a8199d8.jpg" alt="" className="aspect-square" />
          </div>
        </div>

        {/* <div className="mt-6">
          <div className="flex justify-between items-center">
            <h3 className="text-[20px] font-semibold">Popular Collections</h3>
            <button className="text-black text-[14px] font-semibold underline">DISCOVER ALL PRODUCT &gt;</button>
          </div>
          <div className="flex gap-2 mt-2">
            <img src="https://i.pinimg.com/736x/d4/d4/b7/d4d4b7bab5481f6d1e9c53e1d4853cce.jpg" alt="" className="w-1/2 h-[300px] bg-[#EFEFEF] object-contain" />
            <img src="https://i.pinimg.com/736x/53/3e/ab/533eab937177da89837127f84ce99327.jpg" alt="" className="w-1/2 h-[300px] bg-[#EFEFEF] object-contain" />
          </div>
        </div>

        <div className="grid w-full mt-6">
          <div className="flex justify-between items-center">
            <p className="text-[24px] font-semibold">Trending Now</p>
            <button className="text-black text-[14px] font-semibold underline">DISCOVER ALL PRODUCT &gt;</button>
          </div>
          <div className="flex gap-2 mt-2">
            <img src="https://i.pinimg.com/736x/fd/c2/62/fdc26216ad0fffbb06ce8e7f264cddc9.jpg" alt="" className="w-1/2 h-[300px] bg-[#EFEFEF] object-contain" />
            <img src="https://i.pinimg.com/564x/38/fe/b1/38feb107228181e5d1164ccc31dc23f9.jpg" alt="" className="w-1/2 h-[300px] bg-[#EFEFEF] object-contain" />
          </div>
        </div> */}

         <BestSeller/>

        <div className="mt-6">
         <LatestCollection/>
          <div className="mt-5 py-2 flex justify-center border-y border-[#313131] underline">
            <button className="text-black text-[14px] font-semibold">DISCOVER ALL PRODUCT &gt;</button>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-[20px] font-semibold">Our Showrooms</p>
          <div className="flex justify-between h-[550px] mt-2">
            <img src="https://i.pinimg.com/1200x/45/50/d2/4550d2c0e4b74aa708409c72845b3a81.jpg" alt="" className="w-[49%] h-full object-cover" />
            <img src="https://i.pinimg.com/1200x/8a/86/23/8a8623c0a8c1a986b51f6d2a15fa22f5.jpg" alt="" className="w-[49%] h-full object-cover" />
          </div>
        </div>

        <div className="mt-10 mb-10 relative w-auto h-[350px] overflow-hidden bg-black text-white flex justify-center items-center">
          <div className="flex w-[70%] justify-between items-center">
            <div className="absolute z-10 text-start">
              <h1 className="text-[40px] mb-1 font-semibold bg-gradient-to-r from-[#666666] to-[#252525] bg-clip-text text-transparent">
                Become A Member
              </h1>
              <p className="text-[16px] -mt-2 text-[#8f8d8d]">Join our community and get access<br /> to exclusive products and offers.</p>
              <button className="mt-2 px-[18px] py-[8px] text-[14px] font-semibold text-black bg-white rounded-full hover:bg-black hover:text-white transition">
                Join Now
              </button>
            </div>
            <div className="flex w-full justify-end items-end">
              <img src={Born} alt="" className="mt-2 w-[210px] h-[210px] mr-2" />
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
