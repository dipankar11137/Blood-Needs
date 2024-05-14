import React from 'react';
import HomeSection from './Home Section/HomeSection';

const Home1 = () => {
  return (
    <div className="pt-[67px] text-white">
      <div className="grid grid-cols-12">
        <div className="col-span-2 border-r-[1px] border-slate-400 ">
          <div className="fixed mt-5 ml-5">
            <h1>Dado</h1>
          </div>
        </div>
        <div className="col-span-8">
         <HomeSection/>
          
        </div>
        <div className="col-span-2 border-l-[1px] border-slate-400">
          <div className="fixed mt-5 ml-5">
            <h1>Dadona</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;