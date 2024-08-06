import { Link } from 'react-router-dom';
import img1 from '../../../../assets/slide-01.jpg'
import img2 from '../../../../assets/slide-02.jpg'
import img3 from '../../../../assets/slide-03.jpg'
import leftimg from '../../../../assets/top-left-bg.jpg'

const Banner = () => {
  return (
    <div className="grid grid-cols-3">
      <div>
        <img className='h-[700px] absolute' src={leftimg} alt="" />
        <div className='relative top-72 left-36'>
          <h4 className='font-dancing text-6xl font-bold text-white'>KlassyCafe</h4>
          <h6 className='font-poppins text-base font-semibold mt-3 tracking-widest text-white'>THE BEST EXPERIENCE</h6>
          <Link to='allfooditems'><button className='font-poppins text-base font-semibold text-red-500 mt-5 px-5 py-2 rounded bg-white'>All Menu</button></Link>

        </div>

      </div>
      <div className="col-span-2">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={img1}
              className="h-[700px]"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle bg-red-500 opacity-25 hover:bg-blue-700 ">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle bg-red-500 opacity-25 hover:bg-blue-700">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={img2}
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle bg-red-500 opacity-25 hover:bg-blue-700">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle bg-red-500 opacity-25 hover:bg-blue-700">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={img3}
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle bg-red-500 opacity-25 hover:bg-blue-700">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle bg-red-500 opacity-25 hover:bg-blue-700">
                ❯
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
