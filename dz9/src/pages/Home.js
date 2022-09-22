
import { Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import {db as appFire } from '../services/firebase'


const Home = () => {
	const [data, setData] = useState({});

	useEffect(()=>{
		appFire.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
	},[])

	const onDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      appFire.child(`contacts/${id}`).remove((err) => {
        if (err) {
					console.error(err);
				} else {
					console.log("Contact delete successfully");
				}
      });
    }
  };

	return (
		<div>
			<table className={"styled-table"}>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <th scope={"row"}>{index + 1}</th>
                <td>{data[id].name}</td>
                <td>{data[id].email}</td>
                <td>{data[id].contact}</td>
                <td>
                  <Link to={`/update/${id}`}>
                    <button className={"bttn btn-edit"}>Edit</button>
                  </Link>
                  <button
                    className={"bttn btn-delete"}
                    onClick={() => onDelete(id)}
                  >
                    Delete
                  </button>
                  <Link to={`/view/${id}`}>
                    <button className={"bttn btn-view"}>View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
		</div>
	);
}

export default Home;
