import React, { useState, useEffect } from "react";
import { Hearts  } from 'react-loader-spinner';
import SubmitContacts from '../SubmitContacts/SubmitContacts'
import Filter from '../Filter/Filter'
import { STATUS } from "components/Status/status";
import RenderContacts from '../RenderContacts/RenderContacts'
import { useDispatch, useSelector } from 'react-redux';
import { addNewContacts, getFilteredContacts, isLoadingContacts } from "../../redux/contacts/selectors";
import { getContacts,addContacts,deleteContacts } from "../../redux/contacts/operations.api";
import { filterContactsAction } from "redux/contacts/filter.slice";

 const Contacts = ()=> {
    const dispatch = useDispatch();
    let [name, setName] = useState('')
    let [number, setNumber] = useState('')
    const items = useSelector(addNewContacts);
    const isLoading = useSelector(isLoadingContacts);
    const filter = useSelector(getFilteredContacts);


  
  
    const handleName = event => {
      setName(name = event.target.value )
   }
  
    const handleNumber = event => {
      setNumber(number = event.target.value)
     }

     useEffect(() => {
      dispatch(getContacts())
    },[dispatch])
//   useEffect( ()=> {
//   window.localStorage.setItem('contacts', JSON.stringify(contacts))
//   }, [contacts])

  const handleSubmit= e => {
      e.preventDefault();
      const newContact = {name: name, number: number}
      if(items.length === 0) {
        dispatch(addContacts(newContact))
        setName(name = "" )
        setNumber(number = "")
      }
      else {

      
      if(items.find(contact => contact.name === name)){
          alert(`${name} is already in contacts`)
      }
      else {
        dispatch(addContacts(newContact))
        setName(name = "" )
        setNumber(number = "")


      }
    }
      
  }

  const contactsDelete = contactsID => {
    dispatch(deleteContacts(contactsID))
  }
  
  const chooseFilterContact = (evt) => {
    dispatch(filterContactsAction(evt.target.value ));
}

const filterContacts = () => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(contact=>
     contact.name.toLowerCase().includes(normalizedFilter))
}


  return (
      <>
      
      
      <SubmitContacts name={name} number={number} handleSubmit={handleSubmit} handleName={handleName} handleNumber={handleNumber}></SubmitContacts>
      {isLoading === STATUS.loading || isLoading === STATUS.idle ? <Hearts 
            height="100"
            width="80"
            color="red"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          /> :""}
      <Filter value={filter} onChange={chooseFilterContact}></Filter>
      {items.length >0 ? (<RenderContacts items={filterContacts()} contactsDelete={contactsDelete}></RenderContacts>) : (<div>Nema</div>)}

     </>
     
    
      )
}
export default Contacts