import React, { useEffect } from "react";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Model from "./components/Model";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { selectName, setLogin, setLogOut } from "./features/User/userSlice";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setLogin({
            name: user.displayName,
            uid: user.uid,
            img: user.photoURL,
            email: user.email,
          })
        );
      } else {
        dispatch(setLogOut({ name: null, uid: null, img: null, email: null }));
      }
    });
  });
  return (
    <div className="App">
      <Router>
        {!name ? (
          <>
            <Header/>
            <Login />
          </>
        ) : (
          <Routes>
            <Route exact path="/" element={(
              <>
              <Header />
              <Feed />
              <Model />
              </>
            )}>
            </Route>
            <Route exact path="" element={(
              <Navigate to="/" />
            )}>
              
            </Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;