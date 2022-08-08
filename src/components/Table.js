import React from "react";
import { ref, remove } from "firebase/database";
import { toastDangerNotify } from "../utils/customToastify";
import { db } from "../utils/firebase";
import { AiFillEdit } from "react-icons/ai";

const Table = ({contacts, editinfo, setEditinfo, editContact}) => {

  const deleteContact = (id) => {
    remove(ref(db, "Contacts/" + id));
    toastDangerNotify("Deleted!");
  };



  return (
    <div  className="table-container m-2">
    <h2 className="contact-header bg-light text-center">CONTACTS</h2>
      <table className="table bg-light" >
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Gender</th>
          <th scope="col" className="text-center">Delete</th>
          <th scope="col" className="text-center">Edit</th>
        </tr>
      </thead>
      <tbody>
        {contacts?.length === 0 ? (
          <tr
            className="text-center"
            style={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <td colSpan={5}>Nothing Found</td>
          </tr>
        ) : (
          contacts?.map((contact, id) => {
            return (
              <tr key={id}>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.gender}</td>
                <td className="text-center">
                  <button
                    onClick={() => deleteContact(contact.id)}
                    className=" btn-del bg-danger text-white"
                  >
                    Delete
                  </button>
                </td>
                <td className="text-center">
                  <AiFillEdit
                    onClick={() => editContact(contact)}
                    className="edit-icon"
                  />
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
