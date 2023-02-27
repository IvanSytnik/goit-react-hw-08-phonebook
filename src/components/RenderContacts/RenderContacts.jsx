// import css from './RenderContacts.module.css'
import PropTypes from 'prop-types';
import Button  from '@mui/material/Button';

const RenderContacts =({items, contactsDelete}) => {
  
    return(
    <div>
    <h2>Contacts </h2>
    <ul> 
      {items.map(({id, name, number}) => (
      <li
       key={id}>
        <span style={{fontSize: 20, marginRight: 10}}>{name}: {number}</span>
        
       <Button style={{width: 100, color: "rgb(144, 202, 249)",}} variant="outlined" type="button" onClick={() => contactsDelete(id)}>Delete</Button>
      </li>
     ))}
     </ul>
   
   </div> 
   )}

   RenderContacts.propTypes = {
    items: PropTypes.array.isRequired,
    contactsDelete: PropTypes.func.isRequired
   }

   export default RenderContacts;