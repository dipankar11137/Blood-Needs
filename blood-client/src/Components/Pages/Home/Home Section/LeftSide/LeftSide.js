import React, { useState } from 'react';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { FaBookAtlas, FaSwatchbook } from 'react-icons/fa6';
import { GoHome } from 'react-icons/go';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';


const LeftSide = ({ handleHome }) => {
  const [button, setButton] = useState('');
  const [tropics, setTropics] = useState(false);
  const [resources, setResources] = useState(false);

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
        <div className="pb-2 text-slate-500">
          {tropics ? (
            <button
              onClick={() => setTropics(false)}
              className="flex justify-between items-center w-[180px] hover:bg-slate-800 p-2 rounded-lg"
            >
              Tropics
              <IoIosArrowUp className="text-slate-100" />
            </button>
          ) : (
            <button
              onClick={() => setTropics(true)}
              className="flex justify-between items-center w-[180px] hover:bg-slate-800 p-2 rounded-lg"
            >
              Tropics
              <IoIosArrowDown className="text-slate-100" />
            </button>
          )}
        </div>
        {tropics && (
          <div>
            <div
              onClick={() => setButton('button2')}
              className={`${
                button === 'button2' ? 'bg-slate-800' : 'hover:bg-slate-800 '
              } w-[180px] p-2 rounded-lg cursor-pointer mb-2`}
            >
              <button className="flex gap-2 items-center  pl-2 ">
                <FaBookAtlas className="text-xl text-slate-100" />
                Popular
              </button>
            </div>
            <div
              onClick={() => setButton('button2')}
              className={`${
                button === 'button2' ? 'bg-slate-800' : 'hover:bg-slate-800 '
              } w-[180px] p-2 rounded-lg cursor-pointer mb-2`}
            >
              <button className="flex gap-2 items-center  pl-2 ">
                <FaBookAtlas className="text-xl text-slate-100" />
                Popular
              </button>
            </div>
            <div
              onClick={() => setButton('button2')}
              className={`${
                button === 'button2' ? 'bg-slate-800' : 'hover:bg-slate-800 '
              } w-[180px] p-2 rounded-lg cursor-pointer mb-2`}
            >
              <button className="flex gap-2 items-center  pl-2 ">
                <FaBookAtlas className="text-xl text-slate-100" />
                Popular
              </button>
            </div>
            <div
              onClick={() => setButton('button2')}
              className={`${
                button === 'button2' ? 'bg-slate-800' : 'hover:bg-slate-800 '
              } w-[180px] p-2 rounded-lg cursor-pointer mb-2`}
            >
              <button className="flex gap-2 items-center  pl-2 ">
                <FaBookAtlas className="text-xl text-slate-100" />
                Popular
              </button>
            </div>
            <div
              onClick={() => setButton('button2')}
              className={`${
                button === 'button2' ? 'bg-slate-800' : 'hover:bg-slate-800 '
              } w-[180px] p-2 rounded-lg cursor-pointer mb-2`}
            >
              <button className="flex gap-2 items-center  pl-2 ">
                <FaBookAtlas className="text-xl text-slate-100" />
                Popular
              </button>
            </div>
            <div
              onClick={() => setButton('button2')}
              className={`${
                button === 'button2' ? 'bg-slate-800' : 'hover:bg-slate-800 '
              } w-[180px] p-2 rounded-lg cursor-pointer mb-2`}
            >
              <button className="flex gap-2 items-center  pl-2 ">
                <FaBookAtlas className="text-xl text-slate-100" />
                Popular
              </button>
            </div>
          </div>
        )}
        <div className="w-[180px] h-[1px] bg-slate-800 my-2"></div>
        <div className="pb-2 text-slate-500">
          {resources ? (
            <button
              onClick={() => setResources(false)}
              className="flex justify-between items-center w-[180px] hover:bg-slate-800 p-2 rounded-lg"
            >
              Resources
              <IoIosArrowUp className="text-slate-100" />
            </button>
          ) : (
            <button
              onClick={() => setResources(true)}
              className="flex justify-between items-center w-[180px] hover:bg-slate-800 p-2 rounded-lg"
            >
              Resources
              <IoIosArrowDown className="text-slate-100" />
            </button>
          )}
        </div>
        {resources && (
          <div>
            <div
              onClick={() => setButton('button2')}
              className={`${
                button === 'button2' ? 'bg-slate-800' : 'hover:bg-slate-800 '
              } w-[180px] p-2 rounded-lg cursor-pointer mb-2`}
            >
              <button className="flex gap-2 items-center  pl-2 ">
                <FaSwatchbook className="text-xl text-slate-100" />
                Popular
              </button>
            </div>
            <div
              onClick={() => setButton('button2')}
              className={`${
                button === 'button2' ? 'bg-slate-800' : 'hover:bg-slate-800 '
              } w-[180px] p-2 rounded-lg cursor-pointer mb-2`}
            >
              <button className="flex gap-2 items-center  pl-2 ">
                <FaSwatchbook className="text-xl text-slate-100" />
                Popular
              </button>
            </div>
            <div
              onClick={() => setButton('button2')}
              className={`${
                button === 'button2' ? 'bg-slate-800' : 'hover:bg-slate-800 '
              } w-[180px] p-2 rounded-lg cursor-pointer mb-2`}
            >
              <button className="flex gap-2 items-center  pl-2 ">
                <FaSwatchbook className="text-xl text-slate-100" />
                Popular
              </button>
            </div>
            <div
              onClick={() => setButton('button2')}
              className={`${
                button === 'button2' ? 'bg-slate-800' : 'hover:bg-slate-800 '
              } w-[180px] p-2 rounded-lg cursor-pointer mb-2`}
            >
              <button className="flex gap-2 items-center  pl-2 ">
                <FaSwatchbook className="text-xl text-slate-100" />
                Popular
              </button>
            </div>
            <div
              onClick={() => setButton('button2')}
              className={`${
                button === 'button2' ? 'bg-slate-800' : 'hover:bg-slate-800 '
              } w-[180px] p-2 rounded-lg cursor-pointer mb-2`}
            >
              <button className="flex gap-2 items-center  pl-2 ">
                <FaSwatchbook className="text-xl text-slate-100" />
                Popular
              </button>
            </div>
            <div
              onClick={() => setButton('button2')}
              className={`${
                button === 'button2' ? 'bg-slate-800' : 'hover:bg-slate-800 '
              } w-[180px] p-2 rounded-lg cursor-pointer mb-2`}
            >
              <button className="flex gap-2 items-center  pl-2 ">
                <FaSwatchbook className="text-xl text-slate-100" />
                Popular
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftSide;