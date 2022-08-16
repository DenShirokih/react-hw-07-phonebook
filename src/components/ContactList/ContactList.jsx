import {
  ContactItem,
  Btn,
  ContactName,
  PhoneNumber,
  ContactInfo,
} from './ContactList.styled';
import { useGetAllContactsQuery } from 'redux/contactsApi';
import { useDeleteContactMutation } from 'redux/contactsApi';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const { data = [] } = useGetAllContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const contacts = data;
  const handleDelete = async id => {
    await deleteContact(id).unwrap();
  };
  const filter = useSelector(state => state.contacts.filter);
  const filterByName = () => {
    const normalaizedFilter = filter.toLowerCase();
    const filtredContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(normalaizedFilter)
    );
    return filtredContacts;
  };
  return (
    <ul>
      {filterByName().map(({ name, id, phone }) => {
        return (
          <ContactItem key={id}>
            <ContactInfo>
              <ContactName>{name} :</ContactName>
              <PhoneNumber>{phone}</PhoneNumber>
            </ContactInfo>
            <Btn onClick={() => handleDelete(id)} type="button"></Btn>
          </ContactItem>
        );
      })}
    </ul>
  );
};
