import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AddPost from './AddPost/AddPost';
import Appointment from './Home Section/Appointment/Appointment/Appointment';
import HomeSections from './Home Section/HomeSections';
import LeftSide from './Home Section/LeftSide/LeftSide';
import Members from './Home Section/Member/Members';
import RightSide from './Home Section/RightSide/RightSide';

const Home = ({ searchGet }) => {
  const { pathname } = useLocation();
  const [home, setHome] = useState('home')
  const [members,setMembers]=useState([])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleHome = () => {
    setHome('home')
      window.scrollTo(0, 0);
  }
  return (
    <div className="pt-[66px] text-white">
      <div className="grid grid-cols-12">
        <div className="col-span-2 border-r-[1px] h-[1000px] border-slate-700 ">
          <div className="fixed mt-5 ml-5">
            <LeftSide
              handleHome={handleHome}
              setHome={setHome}
              members={members}
              setMembers={setMembers}
            />
          </div>
        </div>
        <div className="col-span-7">
          <Appointment />
          {home === 'home' && (
            <div>
              <AddPost />
              <HomeSections searchGet={searchGet} />
            </div>
          )}

          {home === 'member' && (
            <div>
              <Members members={members} />
            </div>
          )}
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
