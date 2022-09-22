import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db as appFire } from "../services/firebase";


const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddContact = () => {
  const [state, setState] = useState(initialState);
  const { name, email, contact } = state;
  const { id } = useParams();
	const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      console.error("Please provide value into each input field");
    } else {
      if (!id) {
        appFire.child("contacts").push(state, (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("Contact added successfully");
          }
        });
      } else {
        appFire.child(`contacts/${id}`).set(state, (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("Contact updated successfully");
						setTimeout(()=> {
						navigate('/login')
					}, 2000)
          }
        });
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: 100 }}>
      <form
        style={{
          margin: "auto",
          padding: 15,
          maxWidth: 400,
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor={"name"}>Name</label>
        <input
          id={"name"}
          type={"text"}
          name={"name"}
          value={name || ""}
          onChange={handleInputChange}
        />
        <label htmlFor={"email"}>Email</label>
        <input
          id={"email"}
          type={"email"}
          name={"email"}
          value={email || ""}
          onChange={handleInputChange}
        />
        <label htmlFor={"contact"}>Contact</label>
        <input
          id={"contact"}
          type={"text"}
          name={"contact"}
          value={contact || ""}
          onChange={handleInputChange}
        />
        <input type={"submit"} value={id ? "update" : "save"} />
      </form>
    </div>
  );
};

export default AddContact;