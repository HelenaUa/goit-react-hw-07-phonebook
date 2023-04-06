import ListItem from 'components/ListItem/ListItem';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';


export default function ContactList() {

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filterValue = useSelector(getFilter);
    const onDelete = contactID => dispatch(deleteContact(contactID));

    const contactsFilter = () => {
        const filterNormalize = filterValue.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(filterNormalize)
    );
  };

  const filtredContacts = contactsFilter();

    return (
        <ul>
            {filtredContacts.map(item => {
                return (
                    <ListItem key={item.name}
                        name={item.name}
                        number={item.number}
                        onDeleteContact={() => onDelete(item.name)}
                        contactID={item.name}
                    />
                )
            })}
        </ul>
    )
};

