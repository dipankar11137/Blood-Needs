import React from 'react';

const Member = ({ member }) => {
    const handleCall = () => {
      window.location.href = `tel:${member?.phone}`;
    };
  return (
    <div className="card w-full bg-base-100 shadow-xl shadow-slate-800">
      <figure>
        <img className="h-48" src={member?.img} alt={member?.name} />
      </figure>
      <div className="card-body m-0 p-3 mt-3 ">
        <h2 className="card-title ">
          {member?.name}
          <div className="badge badge-secondary">{member?.bloodGroup}</div>
        </h2>
        <p>{member?.address}</p>
        <p>{member?.phone}</p>
        <div className=''>
          <button
            onClick={handleCall}
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-xl mt-2"
          >
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Member;