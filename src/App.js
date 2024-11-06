// import React, { useEffect } from "react";
// import Login from "./componets/Login.jsx";
// import Spotify from './componets/Spotify.jsx'
// export default function App() {
//   useEffect(() => {
//     const hash = window.location.hash;
//     if (hash) {
//        const token = hash.substring(1).split("&")[0].split("=")[1];
//       console.log(token);
//     }
//   });
//   return (
//     <div>
//       {/* <Login /> */}
//       <Spotify/>
//     </div>
//   );
// }
import React, { useEffect } from "react";
import Login from "./componets/Login.jsx";
import Spotify from "./componets/Spotify.jsx";
import { reducerCases } from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider";
export default function App() {

  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }
    // document.title = "Spotify";
  }, [dispatch, token]);
  return <div>{token ? <Spotify /> : <Login />}</div>;
}
