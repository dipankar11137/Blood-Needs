import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProfileHome = () => {
  const { id } = useParams();
  const [datas, setData] = useState(null);
  const [dbUser, setDbUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:5000/quire/${id}`);
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (datas && datas[0]?.email) {
      const fetchUser = async () => {
        try {
          const res = await fetch(
            `http://localhost:5000/user/${datas[0].email}`
          );
          const userData = await res.json();
          setDbUser(userData);
        } catch (err) {
          setError(err);
        }
      };

      fetchUser();
    }
  }, [datas]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const profilePic =
    'https://benfranklinsworld.com/wp-content/uploads/2021/08/309-Reid-Feature.jpg';

  return (
    <div className="pt-20">
      {dbUser && dbUser.length > 0 && (
        <div className="flex justify-center pt-20">
          <div
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1608311820794-24a88c3835da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1bWV8ZW58MHx8MHx8&w=1000&q=80")`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
            className="indicator  rounded-lg mt-10 m-4 w-4/12 h-fit"
          >
            <div style={{ marginTop: '-20px' }} className="-mt-6 ">
              <img
                className=" w-52 h-52 indicator-item indicator-center rounded-full"
                src={dbUser[0]?.img || profilePic}
                alt=""
              />
            </div>
            <div className="mt-20 pl-4 w-full ">
              <div className="text-left py-8">
                <div className="flex items-baseline justify-between">
                  <p className="font-bold w-1/3"> Name</p>
                  <span className="w-2/3">: {dbUser[0]?.name}</span>
                </div>
                <div className="flex items-baseline justify-between mt-1">
                  <p className="font-bold w-1/3">Email</p>
                  <span className="w-2/3">: {dbUser[0]?.email}</span>
                </div>
                <div className="flex items-baseline justify-between mt-1">
                  <p className="font-bold w-1/3">Address</p>
                  <span className="w-2/3">: {dbUser[0]?.address}</span>
                </div>
                <div className="flex items-baseline justify-between mt-1">
                  <p className="font-bold w-1/3">Phone</p>
                  <span className="w-2/3">: {dbUser[0]?.phone}</span>
                </div>
                <div className="flex items-baseline justify-between mt-1">
                  <p className="font-bold w-1/3">Blood Group</p>
                  <span className="w-2/3">: {dbUser[0]?.bloodGroup}</span>
                </div>
                <div className="flex items-baseline justify-between mt-1">
                  <p className="font-bold w-1/3">Blood Donation</p>
                  <span className="w-2/3">: 3</span>
                </div>
                <div className="flex items-baseline justify-between mt-1">
                  <p className="font-bold w-1/3">Bio</p>
                  <span className="w-2/3">: {dbUser[0]?.bio}</span>
                </div>
              </div>
              {/* <div className="flex justify-between mr-5">
                <div>
                  {!dbUser[0]?.paymentMember ? (
                    <button
                      // onClick={() => handleMember(dbUser[0]?._id)}
                      className="btn btn-accent font-bold "
                    >
                      For Member
                    </button>
                  ) : (
                    <h1 className="text-accent text-xl font-semibold bg-slate-800 rounded-md p-2">
                      Member{' '}
                    </h1>
                  )}
                </div>
                <div>
                  {!dbUser[0]?.paymentDoctor ? (
                    <button
                      // onClick={() => handleDoctor(dbUser[0]?._id)}
                      className="btn btn-accent font-bold "
                    >
                      For Doctor
                    </button>
                  ) : (
                    <h1 className="text-accent text-xl font-semibold bg-slate-800 rounded-md p-2">
                      Access Doctor{' '}
                    </h1>
                  )}
                </div>
              </div> */}
              {/* <div className="flex justify-center">
                <button
                  onClick={() => setEdit(true)}
                  className="btn btn-primary hover:bg-indigo-800 text-slate-300 text-white font-extrabold text-4xl border-0 w-2/3 my-6 "
                >
                  <FaEdit />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileHome;
