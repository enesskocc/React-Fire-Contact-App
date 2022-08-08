import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Table from "./components/Table";
import { useState, useEffect } from "react";
// import { set, ref, onValue, remove, update } from "firebase/database";
// import { db } from "./utils/firebase";
// import { v4 as uuidv4 } from "uuid";
// import { notify } from "./utils/customToastify";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./css/App.css";

const App = () => {
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [edit, setEdit] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [id, setId] = useState("");

  const editContact = (e) =>{
    setName(e.name)
    setPhone(e.phone)
    setGender(e.gender)
    setId(e.id)
    setEdit(true)
   }
  

  // read
  // useEffect(() => {
  //   try {
  //     onValue(ref(db), (snapshot) => {
  //       setContacts([]);
  //       const data = snapshot.val();
  //       if (data !== null) {
  //         Object.values(data).map((singleContact) => {
  //           return setContacts((initialEmptyArray) => [
  //             ...initialEmptyArray,
  //             singleContact,
  //           ]);
  //         });
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }, []);

  //write
  // const writeToDatabase = (e) => {
  //   console.log("writeToDatabase çalışıyor");
  //   e.preventDefault();

  //   const { v4: uuidv4 } = require("uuid");
  //   set(ref(db, `/${uuidv4}`), {
  //     name,
  //     phone,
  //     select,
  //     uuidv4,
  //   });

  //   setName("");
  //   setPhone(0);
  //   notify("added to table");
  // };

  // const handleSubmitChange = (e) => {
  //   console.log("handleSubmitChange çalışıyor");
  //   e.preventDefault();
  //   console.log(ID);
  //   update(ref(db, `/${ID}`), {
  //     name,
  //     phone,
  //     select,
  //   });

  //   setName("");
  //   setPhone(0);
  //   setIsEdit(false);
  //   notify("updated");
  // };

  //update
  // const handleUpdate = (item) => {
  //   console.log("update works");
  //   setName(item.name);
  //   setPhone(item.phone);
  //   setSelect(item.select);
  //   setID(item.uuidv4);
  //   setIsEdit(true);
  // };

  // delete
  // const handleDelete = (item) => {
  //   console.log(item.uuidv4);
  //   remove(ref(db, `/${item.uuidv4}`));
  //   notify("deleted");
  // };

  return (
    <div className="App d-flex ">
      <Form
        setContacts={setContacts} 
          contacts={contacts}
          edit={edit}
          setEdit={setEdit}
          name={name}
          setName={setName}
          phone={phone}
          gender={gender}
          setPhone={setPhone}
          setGender={setGender}
          id={id}
      />
      <Table
        contacts={contacts}
         edit={edit}
          setEdit={setEdit}
          editContact={editContact}
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          gender={gender}
          setGender={setGender}
      />
      <ToastContainer
        // position="top-right"
        // autoClose={5000}
        // hideProgressBar={false}
        // newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        // draggable
        // pauseOnHover
      />
    </div>
  );
};

export default App;
