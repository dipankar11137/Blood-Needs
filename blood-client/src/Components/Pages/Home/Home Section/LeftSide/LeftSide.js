import React, { useEffect, useState } from 'react';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { GoHome } from 'react-icons/go';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';


const LeftSide = ({ handleHome, setHome, members, setMembers }) => {
  const [button, setButton] = useState('');
  const [member, setMember] = useState(false);
  const [doctor, setDoctor] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then(res => res.json())
      .then(data => setMembers(data));
  },[])

  return (
    <div className="text-slate-300">
      <div>
        <div>
          <div
            onClick={() => setButton('button1')}
            className={`${
              button === 'button1' ? 'bg-slate-800' : 'hover:bg-slate-800 '
            } w-[180px] p-2 rounded-lg cursor-pointer mb-2`}
          >
            <button
              onClick={handleHome}
              className="flex gap-2 items-center  pl-2 "
            >
              <GoHome className="text-xl text-slate-100" />
              Home
            </button>
          </div>
          <div
            onClick={() => setButton('button2')}
            className={`${
              button === 'button2' ? 'bg-slate-800' : 'hover:bg-slate-800 '
            } w-[180px] p-2 rounded-lg cursor-pointer`}
          >
            <button className="flex gap-2 items-center  pl-2 ">
              <BsArrowUpRightCircleFill className="text-xl text-slate-100" />
              Popular
            </button>
          </div>
        </div>
        <div className="w-[180px] h-[1px] bg-slate-800 my-2"></div>
        <div className="pb-2 text-slate-400">
          {member ? (
            <button
              onClick={() => {
                setMember(false);
                setHome('home');
              }}
              className="flex justify-between items-center w-[180px] hover:bg-slate-800 p-2 rounded-lg"
            >
              Member
              <IoIosArrowUp className="text-slate-100" />
            </button>
          ) : (
            <button
              onClick={() => {
                setMember(true);
                setHome('member');
              }}
              className="flex justify-between items-center w-[180px] hover:bg-slate-800 p-2 rounded-lg"
            >
              Member
              <IoIosArrowDown className="text-slate-100" />
            </button>
          )}
        </div>
        {member && (
          <div>
            <div>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Location
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div className="mt-5">
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Blood Group
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </div>
        )}
        <div className="w-[180px] h-[1px] bg-slate-800 my-2"></div>

        {/* doctor */}
        <div className="pb-2 text-slate-400">
          {doctor ? (
            <button
              onClick={() => { setDoctor(false);    setHome('home');}}
              className="flex justify-between items-center w-[180px] hover:bg-slate-800 p-2 rounded-lg"
            >
              Doctor
              <IoIosArrowUp className="text-slate-100" />
            </button>
          ) : (
            <button
                onClick={() => { setDoctor(true);    setHome('doctor');}}
              className="flex justify-between items-center w-[180px] hover:bg-slate-800 p-2 rounded-lg"
            >
              Doctor
              <IoIosArrowDown className="text-slate-100" />
            </button>
          )}
        </div>
        {doctor && <div></div>}
      </div>
    </div>
  );
};

export default LeftSide;