import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AddPost from './AddPost/AddPost';
import HomeSections from './Home Section/HomeSections';
import LeftSide from './Home Section/LeftSide/LeftSide';
import RightSide from './Home Section/RightSide/RightSide';

const Home = ({ searchGet }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleHome = () => {
      window.scrollTo(0, 0);
  }
  return (
    <div className="pt-[66px] text-white">
      <div className="grid grid-cols-12">
        <div className="col-span-2 border-r-[1px] border-slate-700 ">
          <div className="fixed mt-5 ml-5">
            <LeftSide handleHome={handleHome} />
          </div>
        </div>
        <div className="col-span-7">
          <AddPost />
          <HomeSections searchGet={searchGet} />
        </div>
        <div className="col-span-3  border-slate-700">
          <div className="fixed mt-5 mx-5">
            <RightSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
