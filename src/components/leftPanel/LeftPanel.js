import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { GrMenu, GrClose } from 'react-icons/gr';
import Filterbar from './Filterbar';
import { ProductContext } from '../../context/StoreProvider';

const LeftPanel = () => {
  const [showSidebar, setShowsidebar] = useState(false);
  const { showFilterbar } = useContext(ProductContext);

  return (
    <div className="left-panel">
      <button 
        onClick={() => setShowsidebar(!showSidebar)}
      >
        {showSidebar ? <GrClose size={30} /> : <GrMenu size={30} />}     
      </button>
      <Sidebar showSidebar={showSidebar} setShowsidebar={setShowsidebar} />
      {showFilterbar && <Filterbar />}
    </div>
  );
}

export default LeftPanel;
