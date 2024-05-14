import React from 'react';
import Member from './Member';

const Members = ({ members }) => {
  return (
    <div>
      <div className="grid grid-cols-3 mx-3 pt-3 gap-5">
        {members.slice().reverse().map(member => (
          <Member key={member._id} member={member} />
        ))}

      
      </div>
    </div>
  );
};

export default Members;