import React from "react";
import { set, ref, push, onValue, update } from "firebase/database";
import { useEffect } from "react";
import { db } from "../utils/firebase";
import { toastSuccessNotify, toastWarnNotify } from "../utils/customToastify"

const Form = ({
  setGender,
  gender,
  edit,
  setEdit,
  setName,
  name,
  setPhone,
  phone,
  setContacts,
  id,
}) => {
  const writeDatabase = (e) => {
    e.preventDefault();
    edit
      ? updateUser({ name: name, phone: phone, gender: gender, id: id })
      : newContact();
  };

  // const handleOnchange = (e) => {
  //   setGender(e.target.value);

  //   setPhone(e.target.value);
  // };

  // Ekleme yapmak icin!
  const newContact = () => {
    const personRef = ref(db, "Contacts");
    const newpersonRef = push(personRef);
    set(newpersonRef, { name: name, phone: phone, gender: gender });
    setName("");
    setPhone("");
    setGender("");
    toastSuccessNotify("Added to table");
    setEdit(false);
  };

  // read islemi icin!
  useEffect(() => {
    const userRef = ref(db, "Contacts");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const contactArray = [];
      for (let id in data) {
        contactArray.push({ id, ...data[id] });
      }
      setContacts(contactArray);
    });
   
  }, []);
 

  // Updates icin!

  const updateUser = (e) => {
    const updates = {};
    updates["Contacts/" + e.id] = e;
    setName("");
    setPhone("");
    setGender("");
    toastWarnNotify("Updated!");
    setEdit(false);

    return update(ref(db), updates);
  };

  return (
    <div className="inputcontainer  bg-light p-4 m-2">
      <div className="">
        <h2 className="mb-3 text-center">ADD CONTACT</h2>
      </div>
      <form onSubmit={writeDatabase}>
        <div className="mb-3">
          <label htmlFor=""></label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor=""></label>
          <input
            type="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <select
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option selected disabled hidden value="">
              Gender
            </option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {edit ? (
          <button className="button" type="submit">
            UPDATE
          </button>
        ) : (
          <button className="button" type="submit">
            ADD
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
