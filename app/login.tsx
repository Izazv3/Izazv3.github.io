// // LoginPage.js
// import { useClient } from 'next/client';
// import { useState, useEffect } from 'react';

// const LoginPage = () => {
//   const client = useClient();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Add your login logic here
//     console.log('Logging in with:', { username, password });
//     // You can make API calls or handle authentication as per your needs
//   };

//   // useEffect to ensure state updates happen on the client
//   useEffect(() => {
//     // You can initialize state or perform other client-side logic here
//   }, [client]);

//   return (
//     <div>
//       <h2>Login</h2>
//       <form>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="button" onClick={handleLogin}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
