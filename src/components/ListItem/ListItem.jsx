import PropTypes from 'prop-types';
import { BtnDel } from './ListItem.styled';


export default function ListItem({ name, phone, onDeleteContact }) {
    
    return (
        <li>
            <span>{name}: </span>
            <span>{phone}</span>
            <BtnDel type="button" onClick={onDeleteContact}>Delete</BtnDel>
        </li>
    )
};

ListItem.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    deleteContact: PropTypes.func,
};