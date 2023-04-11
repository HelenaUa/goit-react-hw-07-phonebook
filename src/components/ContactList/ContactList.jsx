import ListItem from 'components/ListItem/ListItem';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from 'redux/operations';
import { selectFiltredContacts } from 'redux/selectors';


export default function ContactList() {

    const dispatch = useDispatch();
    
    const onDelete = (id) => {
        dispatch(deleteContact(id))
    };

    const filtredContacts = useSelector(selectFiltredContacts);

    return (
        <ul style={{ paddingLeft: '20px'}}>
            {filtredContacts.map(item => {
                return (
                    <ListItem key={item.name}
                        name={item.name}
                        phone={item.phone}
                        onDeleteContact={() => onDelete(item.id)}
                    />
                )
            })}
        </ul>
    )
};

