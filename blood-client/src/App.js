import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CreateAccount from "./Components/Login/CreateAccount";
import Login from "./Components/Login/Login";
import RequireAuth from "./Components/Login/RequireAUth";
import AddDoctor from "./Components/Pages/Dashboard/AddDoctor/AddDoctor";
import Bookings from "./Components/Pages/Dashboard/Boooking/Bookings";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import EditDoctor from "./Components/Pages/Dashboard/ManageDoctor/EditDoctor";
import ManageDoctors from "./Components/Pages/Dashboard/ManageDoctor/ManageDoctors";
import MyBookings from "./Components/Pages/Dashboard/MyBookings/MyBookings";
import Payment from "./Components/Pages/Dashboard/MyBookings/Payment";
import DoctorPayment from "./Components/Pages/Dashboard/Profile/DoctorPayment";
import PaymentMember from "./Components/Pages/Dashboard/Profile/PaymentMember";
import Profile from "./Components/Pages/Dashboard/Profile/Profile";
import ShowAllQueries from "./Components/Pages/Dashboard/ShowAllQueries/ShowAllQueries";
import Home from "./Components/Pages/Home/Home";
import ProfileHome from "./Components/Pages/Home/Profile/ProfileHome";
import Navbar from "./Components/Share/Navbar";
import NotFound from "./Components/Share/NotFound";

function App() {
  const [isScrolled, setIsScrolled] = useState(true);
  const [inputText, setInputText] = useState('');
   const [searchGet, setSearchGet] = useState([]);

     useEffect(() => {
       const handleScroll = () => {
         const scrollTop =
           window.pageYOffset || document.documentElement.scrollTop;
         setIsScrolled(scrollTop > 0);
       };

       window.addEventListener('scroll', handleScroll);

       return () => {
         window.removeEventListener('scroll', handleScroll);
       };
     }, []);
  return (
    <div>
      {/* <CreateAccount /> */}
      <div
        className={`fixed  bg-white w-full shadow-md top-0 z-50${
          isScrolled ? ' fixed top-0 z-50 duration-1000' : ''
        }`}
      >
        <Navbar setSearchGet={setSearchGet} />
      </div>

      <Routes>
        <Route path="/" element={<Home searchGet={searchGet} />}></Route>

        <Route
          path="/myBooking"
          element={
            <RequireAuth>
              <MyBookings />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/payment/:id"
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        ></Route>
        <Route path="/profileHome/:id" element={<ProfileHome />}></Route>
        <Route path="/paymentMember/:id" element={<PaymentMember />}></Route>
        <Route path="/paymentDoctor/:id" element={<DoctorPayment />}></Route>
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<AddDoctor />} />
          <Route path="addDoctor" element={<AddDoctor />} />
          <Route path="manageDoctor" element={<ManageDoctors />} />
          <Route path="editDoctor/:id" element={<EditDoctor />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="allPost" element={<ShowAllQueries />} />
          {/* 
          <Route path="manageContact" element={<ManageContacts />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
