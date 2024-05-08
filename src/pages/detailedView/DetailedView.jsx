import React from 'react'
import Detailed from '../../ui/detailed/Detailed'
import Card from '../../ui/Card/Card';
import OurBrand from '../ourBrand/OurBrand';

const DetailedView = () => {
  return (
    <>
      <div>
        <Detailed />
      </div>
      <div style={{ marginTop: "15vh", textAlign: "center" }}>
        <h2>You might also love these</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "6vh",
          }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div style={{marginTop: '10vh'}}>
          <OurBrand/>
        </div>
      </div>
    </>
  );
}

export default DetailedView