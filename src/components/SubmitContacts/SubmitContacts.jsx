// import css from './SubmitContacts.module.css'
// import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';



const SubmitContacts = ({name, number, handleSubmit, handleName, handleNumber}) => {
return(
  <div>
  <form onSubmit={handleSubmit} >
       <TextField
       label="Name" variant="outlined"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleName}
      />
      
        <TextField
         label="Tel" variant="outlined"
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      value={number}
      onChange={handleNumber}
    />
      <Button  style={{width: 100, color: "rgb(144, 202, 249)",}} variant="outlined"  type="submit">Add contact</Button>
        </form>
        </div>
)
}
// class SubmitContacts extends Component {
//   static propTypes = {
//     contactsDelete: PropTypes.func
//   };

//     state = {
      
//       name: '',
//       number: ''
//     }
  
//    handleChange = e => {
//     const {name, value} = e.currentTarget;
//     this.setState({[name]: value})
//    }
  
//     handleSubmit = e => {
//       e.preventDefault();
//       this.props.onSubmit(this.state);
//       this.reset()
//     }
  
//     reset = () =>
//     this.setState({ name: '',
//     number: ''})
  
  
//     render() {
//       return (
      
//       <form onSubmit={this.handleSubmit}>
//      <label htmlFor="">Name:<input
//       type="text"
//       name="name"
//       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//       required
//       value={this.state.name}
//       onChange={this.handleChange}
//     /></label>
//     <label htmlFor="">
//       Tel:
//       <input
//     type="tel"
//     name="number"
//     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//     required
//     value={this.state.number}
//     onChange={this.handleChange}
//   /></label>
//     <button type="submit">Add contact</button>
//       </form>
     
     
    
//       )
//     }
//   }

 
  export default SubmitContacts;