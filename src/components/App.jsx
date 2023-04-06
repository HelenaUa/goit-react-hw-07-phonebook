import { GlobalStyle } from './GlobalStyle';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useSelector } from "react-redux";
import { getContacts } from 'redux/selectors';


export default function App() {

  const contacts = useSelector(getContacts);
    
    return (
      <div>
         <GlobalStyle />
         <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        {contacts.length > 0 && <ContactList />}
      </div>
    );

};
