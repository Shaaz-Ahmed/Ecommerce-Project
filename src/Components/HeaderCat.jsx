import React from 'react';

const HeaderCat = () => {
//   const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <ul className="list-unstyled d-flex justify-content-around" style={{background:'#F1F0F0', height:'40px', alignItems:'center'}}>
      {/* {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))} */}
      <li>MENS</li>
      <li>WOMENS</li>
      <li>ELECTRONIC</li>
      <li>GROCERY</li>
      <li>BAKERY</li>
    

    </ul>
  );
};

export default HeaderCat;
