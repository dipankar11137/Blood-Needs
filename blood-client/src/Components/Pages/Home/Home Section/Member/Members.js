import React from 'react';
import Member from './Member';

const Members = ({ members }) => {
  return (
    <div>
      {members.length === 0 ? (
        <div className='text-center pt-32 text-4xl text-slate-400'>
          <h1>Not Available At This Time</h1>
        </div>
      ) : (
        <div className="grid grid-cols-3 mx-3 pt-3 gap-5">
          {members
            .slice()
            .reverse()
            .map(member => (
              <Member key={member._id} member={member} />
            ))}
        </div>
      )}
   
    </div>
  );
};

export default Members;