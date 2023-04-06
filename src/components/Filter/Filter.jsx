import { Input } from './Filter.styled';
import { useDispatch, useSelector } from "react-redux";
import { filterContact } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';


export default function Filter() {
    const dispatch = useDispatch();

    const onFilter = useSelector(getFilter);

    const onChange = e => {
        dispatch(filterContact(e.currentTarget.value))
    };


    return (
        <div>
            <h3>Find contacts by name</h3>
            <Input type="text" value={onFilter} onChange={onChange} />
        </div>
    )
};
