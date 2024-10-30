import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const {name} = user;
  return (
    <div>
      <h2>Details About Users:{name}</h2>
      <p>Website</p>
    </div>
  );
};

export default UserDetails;