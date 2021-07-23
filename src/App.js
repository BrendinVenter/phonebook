import React, {useState} from 'react';
import PersonForm from './components/PersonForm';
import SearchFilter from './components/SearchFilter';
import ContactList from './components/ContactList';
import logo from './logo.svg';
import './App.css';

function App() {

    /* State */
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456'},
        {name: 'Ada Lovelace', number: '39-44-5323523'},
        {name: 'Dan Abramov', number: '12-43-234345'},
        {name: 'Mary Poppendieck', number: '39-23-6423122'}
    ]);
    const [newPerson, setNewPerson] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filterName, setFilterName] = useState('');

    /* Functions*/
    const addPerson = () => {
        const person = {
            name: newPerson,
            number: newNumber,
        };
        setPersons(persons.concat(person));
    };

    const handleSubmit = (event) => {
        const checkPerson = persons.find(person => person.name === newPerson || person.number === newNumber);
        if (checkPerson) {
            return alert(`${newPerson} already exists in phonebook.`);
        } else {
            addPerson();
        }
        event.preventDefault();

    };

    const handlePersonChange = (event) => {
        setNewPerson(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    };

    const handleFilterInput = (event) => {
        setFilterName(event.target.value);
    };

    return (
        <div className='App'>
            <img src={logo} className='App-logo' alt='logo'/>
            <h1>Phonebook</h1>
            <SearchFilter filterName={filterName} handleFilterInput={handleFilterInput}/>
            <br/>
            <PersonForm handleSubmit={handleSubmit} handleNumberChange={handleNumberChange}
                        handlePersonChange={handlePersonChange} numberValue={newNumber} personValue={newPerson}/>
           <ContactList filterName={filterName} persons={persons}/>
        </div>
    );
}

export default App;
