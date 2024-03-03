// import React from "react";
// import "./App.css";
// import Navbar from "./components/Navbar.js";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home.js";
// import About from "./components/About.js";
// import NoteState from "./context/notes/noteState.js";
// import Login from "./components/Login.js";
// import Signup from "./components/Signup.js";
// import { LoginProvider } from "./context/notes/loginContext.js";
// import Todoos from "./components/Todoos.js";
// import NewsApp from "./components/newsapp/NewsApp.js"
// import TextForm from "./components/Word counter/Wordcomp/TextForm.js";
// import Forcast from "./components/weatherApp/Forcast.js";


// function App() {
//   return (
//     <NoteState>
//       <LoginProvider>
//         <Router>
//           <AppContent />
//         </Router>
//       </LoginProvider>
//     </NoteState>
//   );
// }

// function AppContent() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/ToDos" element={<Todoos />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/Signup" element={<Signup />} />
//         <Route path="/news/*" element={<NewsApp/>} />
//         <Route path="/word/*" element={<TextForm/>} />
//         <Route path="/weather/*" element={<Forcast/>} />

//         </Routes>
//     </>
//   );
// }

// export default App;
