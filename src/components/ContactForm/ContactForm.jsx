import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import { FormCon, Input, Btn, LabelStyle } from './ContactForm.styled';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';


export default function ContactForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const onChangeName = e => setName(e.currentTarget.value);
    const onChangePhone = e => setPhone(e.currentTarget.value);

    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
 
 const handleSubmit = (event) => {
    //  event.preventDefault();
     
     const newContact = {
      id: nanoid(),
      name,
      phone,
    };

    if (contacts.some(contact => contact.name === name)) {
     alert (`${name} is already in contacts`);
      return;
     };
     dispatch(addContact(newContact));
     setName('');
     setPhone('');
    };
    
    return (
        <Formik initialValues={{ name: '', phone: '' }}
            onSubmit={handleSubmit}>
            <FormCon autoComplete="off">
                <LabelStyle htmlFor="name">
                    Name
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChangeName}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    <ErrorMessage name="name" component="div" />
                </LabelStyle>
                <LabelStyle htmlFor="phone">
                    Number
                    <Input
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={onChangePhone}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                    <ErrorMessage name="phone" component="div" />
                </LabelStyle>
                <Btn type="submit">Add contact</Btn>
            </FormCon>
        </Formik> 
    )
};

