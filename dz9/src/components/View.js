import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {db as appFire} from '../services/firebase'




const View = () => {
	const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    appFire
      .child(`contacts/${id}`)
      .get()
      .then((data) => {
        if (data.exists()) {
          setUser({ ...data.val() });
        } else {
          setUser({});
        }
      });
  }, [id]);

	return (
		<div>
			<div>
				<div>
					Details
				</div>
				<div>
				<strong>ID:</strong>
          <span>{id}</span>
          <strong>Name:</strong>
          <span>{user.name}</span>
          <strong>Email:</strong>
          <span>{user.email}</span>
          <strong>Contact:</strong>
          <span>{user.contact}</span>
          <Link to={"/"}>
            <button className={"bttn btn-edit"}>Go back</button>
          </Link>
				</div>	
			</div>
		</div>
	);
}

export default View;