import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaSignsPost, FaUserDoctor } from 'react-icons/fa6';
import { MdBookmarkAdd, MdDashboard } from 'react-icons/md';
import { Link, Outlet, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';


const Dashboard = () => {
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState('Button 10');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className=" pt-16">
      <div className="">
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side navigation ">
            <label
              htmlFor="dashboard-sidebar"
              className="drawer-overlay "
            ></label>
            <section className="flex ">
              <div
                className={` ${
                  open ? 'w-60' : 'w-20 '
                } bg-slate-800 h-screen p-5 text-white pt-8 relative duration-300`}
              >
                <img
                  src="https://cdn.pixabay.com/photo/2012/04/11/17/14/left-28998_1280.png"
                  className={`absolute cursor-pointer -right-3 top-9 w-7
             border-2 rounded-full  ${!open && 'rotate-180'}`}
                  onClick={() => setOpen(!open)}
                  alt=""
                />
                <div className="flex gap-x-4 items-center">
                  <div onClick={() => setSelectedButton('Button 10')}>
                    {' '}
                    <Link to={'/dashboard'}>
                      {' '}
                      <img
                        src="https://www.svgrepo.com/download/7869/settings.svg"
                        className={`cursor-pointer duration-500 rounded-full ${
                          open && 'rotate-[360deg] h-20  '
                        }`}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 relative ">
                  {/* Dashboard */}
                  <div
                    onClick={() => setSelectedButton('Button 1')}
                    className={
                      selectedButton === 'Button 1'
                        ? 'bg-slate-900 text-white w-[215px] rounded-lg'
                        : ''
                    }
                  >
                    {' '}
                    <Link
                      to="/dashboard/addDoctor"
                      className={`  group flex items-center text-xl w-[215px] gap-3.5 font-medium p-2 hover:bg-slate-600 rounded-md`}
                    >
                      <div>
                        {React.createElement(FaUserDoctor, {
                          size: '20',
                        })}
                      </div>
                      <h2
                        style={{
                          transitionDelay: `${0 + 3}00ms`,
                        }}
                        className={`whitespace-pre duration-500  ${
                          !open && 'opacity-0 translate-x-28 overflow-hidden '
                        }`}
                      >
                        Add Doctor
                      </h2>
                    </Link>
                  </div>
                  <div
                    onClick={() => setSelectedButton('Button 2')}
                    className={
                      selectedButton === 'Button 2'
                        ? 'bg-slate-900 text-white w-[215px] rounded-lg'
                        : ''
                    }
                  >
                    {' '}
                    <Link
                      to="/dashboard/manageDoctor"
                      className={`  group flex items-center text-xl w-[215px] gap-3.5 font-medium p-2 hover:bg-slate-600 rounded-md`}
                    >
                      <div>
                        {React.createElement(MdDashboard, {
                          size: '20',
                        })}
                      </div>
                      <h2
                        style={{
                          transitionDelay: `${0 + 3}00ms`,
                        }}
                        className={`whitespace-pre duration-500  ${
                          !open && 'opacity-0 translate-x-28 overflow-hidden '
                        }`}
                      >
                        All Doctor
                      </h2>
                    </Link>
                  </div>
                  <div
                    onClick={() => setSelectedButton('Button 3')}
                    className={
                      selectedButton === 'Button 3'
                        ? 'bg-slate-900 text-white w-[215px] rounded-lg'
                        : ''
                    }
                  >
                    {' '}
                    <Link
                      to="/dashboard/bookings"
                      className={`  group flex items-center text-xl w-[215px] gap-3.5 font-medium p-2 hover:bg-slate-600 rounded-md`}
                    >
                      <div>
                        {React.createElement(MdBookmarkAdd, {
                          size: '20',
                        })}
                      </div>
                      <h2
                        style={{
                          transitionDelay: `${0 + 3}00ms`,
                        }}
                        className={`whitespace-pre duration-500  ${
                          !open && 'opacity-0 translate-x-28 overflow-hidden '
                        }`}
                      >
                        Booking
                      </h2>
                    </Link>
                  </div>
                  <div
                    onClick={() => setSelectedButton('Button 10')}
                    className={
                      selectedButton === 'Button 10'
                        ? 'bg-slate-900 text-white w-[215px] rounded-lg'
                        : ''
                    }
                  >
                    {' '}
                    <Link
                      to="/dashboard/allPost"
                      className={`  group flex items-center text-xl w-[215px] gap-3.5 font-medium p-2 hover:bg-slate-600 rounded-md`}
                    >
                      <div>
                        {React.createElement(FaSignsPost, {
                          size: '20',
                        })}
                      </div>
                      <h2
                        style={{
                          transitionDelay: `${0 + 3}00ms`,
                        }}
                        className={`whitespace-pre duration-500  ${
                          !open && 'opacity-0 translate-x-28 overflow-hidden '
                        }`}
                      >
                        All Post
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
