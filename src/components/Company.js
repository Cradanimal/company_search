import React from 'react';

const Company = (props) => {
    return (
        <div className='item' key={props.id}>
            <div className='content' >
                <a className='header' href={props.link ? props.link : null}>
                    {props.name}
                </a>
                <div className='description' >
                    {props.description}
                </div>
            </div>
        </div>
    );
}

export default Company;