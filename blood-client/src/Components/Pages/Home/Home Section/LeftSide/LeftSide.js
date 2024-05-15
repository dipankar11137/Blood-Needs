import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { GoHome } from 'react-icons/go';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import auth from '../../../../../firebase.init';


const LeftSide = ({ handleHome, setHome, members, setMembers }) => {
  const [button, setButton] = useState('');
  const [member, setMember] = useState(false);
  const [doctor, setDoctor] = useState(false);
  const [address, setAddress] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [data, setData] = useState([]);
     const [authUser] = useAuthState(auth);
  const [dbUser, setDbUser] = useState([]);
  
     useEffect(() => {
       fetch(`http://localhost:5000/user/${authUser?.email}`)
         .then(res => res.json())
         .then(data => setDbUser(data));
     }, [dbUser, authUser]);

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then(res => res.json())
      .then(data => setData(data));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then(res => res.json())
      .then(data => {
        // Check if desiredAddress and desiredBloodGroup are provided
        if (!address && !bloodGroup) {
          setMembers(data); // If not provided, set all members
        } else {
          // Filter the data based on address or blood group
          const filteredData = data.filter(
            user => user.address === address || user.bloodGroup === bloodGroup
          );
          setMembers(filteredData);
        }
      });
  }, [address,bloodGroup]);


console.log(dbUser[0]);


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
          {dbUser[0]?.paymentMember ? (
            <>
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
            </>
          ) : (
            <Link to="/profile">
              <div
                className="tooltip tooltip-primary"
                data-tip="Become a member first"
              >
                <button className="flex justify-between items-center w-[180px] hover:bg-slate-800 p-2 rounded-lg">
                  Member
                  <IoIosArrowDown className="text-slate-100" />
                </button>
              </div>
            </Link>
          )}
        </div>
        {member && (
          <div>
            <div>
              <select
                onChange={e => setAddress(e.target.value)}
                className="select select-bordered w-full max-w-xs "
              >
                <option disabled selected>
                  Location
                </option>
                {[...new Set(data.map(member => member.address))].map(
                  (address, index) => (
                    <option key={index}>{address}</option>
                  )
                )}
              </select>
            </div>
            <div className="mt-5">
              <select
                onChange={e => setBloodGroup(e.target.value)}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Blood Group
                </option>
                {[...new Set(data.map(member => member.bloodGroup))].map(
                  (bloodGroup, index) => (
                    <option key={index}>{bloodGroup}</option>
                  )
                )}
              </select>
            </div>
          </div>
        )}
        <div className="w-[180px] h-[1px] bg-slate-800 my-2"></div>

        {/* doctor */}
        <div className="pb-2 text-slate-400">
          {dbUser[0]?.paymentDoctor ? (
            <>
              {doctor ? (
                <button
                  onClick={() => {
                    setDoctor(false);
                    setHome('home');
                  }}
                  className="flex justify-between items-center w-[180px] hover:bg-slate-800 p-2 rounded-lg"
                >
                  Doctor
                  <IoIosArrowUp className="text-slate-100" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setDoctor(true);
                    setHome('doctor');
                  }}
                  className="flex justify-between items-center w-[180px] hover:bg-slate-800 p-2 rounded-lg"
                >
                  Doctor
                  <IoIosArrowDown className="text-slate-100" />
                </button>
              )}
            </>
          ) : (
            <Link to="/profile">
              <div
                className="tooltip tooltip-primary"
                data-tip="Become a member first"
              >
                <button className="flex justify-between items-center w-[180px] hover:bg-slate-800 p-2 rounded-lg">
                  Doctor
                  <IoIosArrowDown className="text-slate-100" />
                </button>
              </div>
            </Link>
          )}
        </div>
        {doctor && <div></div>}
      </div>
    </div>
  );
};

export default LeftSide;