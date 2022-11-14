import { List, ListItem, Contact } from './ContactList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectIsLoading, selectVisibleontacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const deleteContactById = contactId => {
    dispatch(deleteContact(contactId));
  };

  const visibleContacts = useSelector(selectVisibleontacts);
  return (
    <List>
      {visibleContacts.map(({ id, name, phone }) => {
        return (
          <ListItem key={id}>
            <Contact>
              {name} : {phone}
            </Contact>

            <button onClick={() => deleteContactById(id)} disabled={isLoading}>
              Delete
            </button>
          </ListItem>
        );
      })}
    </List>
  );
};