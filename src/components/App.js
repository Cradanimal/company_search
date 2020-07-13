import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import Company from './Company';

const App = (props) => {

    const renderCompanies = () => {
        return props.companies.map(company => {
            return (
                <Company description={company.description} name={company.name} link={company.link} key={company.id} />
            );
        })
    }

    return (
        <div className='ui container'>
            <Search/>
            <div className='ui relaxed list' >
                {renderCompanies()}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { companies: state.companies}
}

export default connect(mapStateToProps)(App);