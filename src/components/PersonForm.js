import React from 'react';

const PersonForm = ({handleSubmit, personValue, numberValue, handlePersonChange, handleNumberChange}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={'Input-fields'}>
                    Name: <input type={'text'} value={personValue} onChange={handlePersonChange}/>
                </div>
                <br/>
                <div className={'Input-fields'}>
                    Number: <input value={numberValue} onChange={handleNumberChange}/>
                </div>
                <br/>
                <div>
                    <button type={'submit'}>Add Contact</button>
                </div>
            </form>
        </div>
    );
};

export default PersonForm;