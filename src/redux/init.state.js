import { authInitialState } from './AuthOperation/auth.slice';
import {contactsInitState} from './contacts/contacts.slice'
import {filterInitialState} from './contacts/filter.slice'
export const initialState = {
  contacts: contactsInitState,
  filter: filterInitialState,
  auth: authInitialState,
};
