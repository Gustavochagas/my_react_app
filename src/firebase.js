import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDiaudr74uzkaedZ9eOPi5OKX5_85Oq4o0",
  authDomain: "my-dashboard-a871d.firebaseapp.com",
  databaseURL: "https://my-dashboard-a871d.firebaseio.com",
  projectId: "my-dashboard-a871d",
  storageBucket: "my-dashboard-a871d.appspot.com",
  messagingSenderId: "738772205628"
};
firebase.initializeApp(config);
export default firebase;