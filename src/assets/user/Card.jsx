import React from 'react';

const Card= ({id ,name, email, username}) => {
    return(
        <div className='cardcss'>
            <img alt='robots' src={`https://robohash.org/${id+5}`}/>
            <div className='tc'>
                <h4>{name}</h4>
                <h5>{username}</h5>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;