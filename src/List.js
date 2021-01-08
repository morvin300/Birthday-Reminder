import React from 'react';

let List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        let { id, name, age, image ,dob} = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <div> 
              <h4 >{name}</h4>
              <p>{age} years</p>
              <p>DOB:{dob}</p>
</div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
