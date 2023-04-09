import ListItem from 'components/ListItem/ListItem';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from 'redux/operations';
import { selectFiltredContacts } from 'redux/selectors';
// import { selectContacts, selectFilterValue, selectFiltredContacts } from 'redux/selectors';


export default function ContactList() {

    const dispatch = useDispatch();
    // const contacts = useSelector(selectContacts);
    // const filterValue = useSelector(selectFilterValue);
    // const onDelete = contactID => dispatch(deleteContact(contactID));
    const onDelete = (id) => {
        dispatch(deleteContact(id))
    };

    const filtredContacts = useSelector(selectFiltredContacts);
//     const contactsFilter = () => {
//         const filterNormalize = filterValue.toLowerCase();
//         return contacts.filter(contact => contact.name.toLowerCase().includes(filterNormalize)
//     );
//   };

//   const filtredContacts = contactsFilter();

    return (
        <ul>
            {filtredContacts.map(item => {
                return (
                    <ListItem key={item.name}
                        name={item.name}
                        phone={item.phone}
                        onDeleteContact={() => onDelete(item.id)}
                        // contactID={item.name}
                    />
                )
            })}
        </ul>
    )
};

