import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PersonForm from './components/PersonForm';
import SearchFilter from './components/SearchFilter';
import ContactList from './components/ContactList';
import logo from './logo.svg';
import './App.css';


function App() {

    /* State */
    const [persons, setPersons] = useState([]);
    const [newPerson, setNewPerson] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filterName, setFilterName] = useState('');

    /* Server Calls */

    // Get server data
    const hook = () => {
        console.log('Effect stage')
        axios.get('http://localhost:3001/persons').then(response => {
            console.log('Promise fulfilled');
            setPersons(response.data);
        })
    }

    useEffect(hook, [])

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
