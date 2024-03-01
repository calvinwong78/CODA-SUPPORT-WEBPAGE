import React from 'react';
import Navbar from "../../Components/Navbar/Index";
import Footers from '../Footer';
import ServciveeDetail from '../ServiceDetail';

const DetailPage = () => {
  return (
    <div>
        <Navbar/>
        <ServciveeDetail/>
        <Footers/>
    </div>
  )
}

export default DetailPage