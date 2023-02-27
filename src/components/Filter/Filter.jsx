import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

 const Filter = ({value, onChange}) => {
    return(
      <TextField label="Find contacts by name" variant="outlined" type="text"   value={value} onChange={onChange}/>
  
    )
   }
   
 Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
 }
export default Filter;