import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SearchBar = (props) => {
    const navigate = useNavigate();
  
    const handleViewBuildingClick = () => {
      // Navigate to the ViewBuilding page when the button is clicked
      navigate('/view-building');
    };
    return (
        <>
            <button className="search-bar">
                {props.query}
                <button className="search-button" onClick={handleViewBuildingClick}>
                    <img src="./images/search-alt-svgrepo-com.svg" width="30px" height="auto" alt="Search" />
                </button>
            </button>
        </>
    );
}

export default SearchBar;