import React from "react";
const Searchbox=({ searchfield ,searchChange  })=>{
    return(
        <div className="searchbox">
            <input size={20} className="line-height:2.15" type='search' placeholder="search customers "
            onChange={searchChange}/>
        </div>

    );

}
export default Searchbox;