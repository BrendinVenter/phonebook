import React from 'react';

const SearchFilter = ({filterName, handleFilterInput}) => {
    return (
        <div>
            <label>
                Filter: <input type='text' value={filterName} onChange={handleFilterInput}/>
            </label>
        </div>
    );
};

export default SearchFilter;