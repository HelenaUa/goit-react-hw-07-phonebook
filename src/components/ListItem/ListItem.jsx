import PropTypes from 'prop-types';
import { BtnDel } from './ListItem.styled';


export default function ListItem({ name, number, onDeleteContact }) {
    
    return (
        <li>
            <span>{name}: </span>
            <span>{number}</span>
            <BtnDel type="button" onClick={onDeleteContact}>Delete</BtnDel>
        </li>
    )
};

ListItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    deleteContact: PropTypes.func,
};