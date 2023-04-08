import { Input } from './Filter.styled';
import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from 'redux/filtersSlice';
import { selectFilterValue } from 'redux/selectors';


export default function Filter() {
    const dispatch = useDispatch();

    const onFilter = useSelector(selectFilterValue);

    const onChange = e => {
        dispatch(setStatusFilter(e.currentTarget.value))
    };


    return (
        <div>
            <h3>Find contacts by name</h3>
            <Input type="text" value={onFilter} onChange={onChange} />
        </div>
    )
};
