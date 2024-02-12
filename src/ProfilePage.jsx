import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export function ProfilePage() {
  const { id } = useParams(); // Get the userId from route params
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}.json`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching current user:', error);
      });
  }, [id]);

  return (
    <div>
      {user && (
        <>
          <h1>{user.name}'s Profile</h1>
          <img src={user.image_url} alt="Profile" />
          <p>Email: {user.email}</p>
        </>
      )}
    </div>
  );
}



// export default ProfilePage;

// function ProfilePage() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:3000/users/${id}.json`) 
//       .then(response => {
//         setUser(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching user data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Profile</h2>
//       {user ? (
//         <div>
//           <img src={user.image_url} alt="Profile" />
//           <p>Name: {user.name}</p>
//           <p>Email: {user.email}</p>
//           <Link to="/profile">
//         <button>View Profile</button>
//       </Link>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

