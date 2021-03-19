import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
      const { displayName, email } = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
      };
      return signedInUser;
    })
    .catch((err) => {});
};

export const handleFbSignIn = () => {
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((res) => {
      const { displayName, email } = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
      };
      return signedInUser;
    })
    .catch((error) => {});
};

// export const handleSignOut = () => {
//   return firebase
//     .auth()
//     .signOut()
//     .then((res) => {
//       const signedOutUser = {
//         isSignedIn: false,
//         name: "",
//         email: "",
//         password: "",
//         photo: "",
//       };
//       return signedOutUser;
//       // Sign-out successful.
//     })
//     .catch((error) => {
//       // An error happened.
//     });
// };

// export const createUserWithEmailAndPassword = () => {
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(user.email, user.password)
//     .then((res) => {
//       const newUserInfo = { ...user };
//       newUserInfo.error = "";
//       newUserInfo.success = true;
//       setUser(newUserInfo);
//       updateUserName(user.name);
//     })
//     .catch((error) => {
//       const newUserInfo = { ...user };
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       setUser(newUserInfo);
//     });
// };

// export const signInWithEmailAndPassword = () => {
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(user.email, user.password)
//     .then((res) => {
//       const newUserInfo = { ...user };
//       newUserInfo.error = "";
//       newUserInfo.success = true;
//       setUser(newUserInfo);
//       setLoggedInUser(newUserInfo);
//       history.replace(from);
//     })
//     .catch((error) => {
//       const newUserInfo = { ...user };
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       setUser(newUserInfo);
//     });
// };

// export const updateUserName = (name) => {
//   const user = firebase.auth().currentUser;

//   user
//     .updateProfile({
//       displayName: name,
//     })
//     .then(() => {})
//     .catch((error) => {});
// };
