import React from 'react';
import { connect } from 'react-redux';
import { fetchCompanies, clearCompanies } from '../actions';

const Search = (props) => {
    let input = '';

    return (
        <div className='ui input'>
            <form 
                className='ui form'
                onSubmit={e => {
                    e.preventDefault();
                    if (input.value.trim() === ''){
                        return;
                    }
                    // dispatch API call actions
                    props.clearCompanies();
                    props.fetchCompanies(input.value.trim())
                    input.value = '';
                }}
            >
                <input type='text'  placeholder='Search...' ref={node => (input = node)} />
            </form>
        </div>
    );
}

export default connect(null, {fetchCompanies, clearCompanies})(Search);