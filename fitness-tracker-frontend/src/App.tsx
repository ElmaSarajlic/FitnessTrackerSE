import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage, RoutineDetails, RoutinePage, UserPage, ExplorePage, ExercisePage, NotFoundPage } from './pages';
import ProtectedRoute from './utils/ProtectedRoutes';
import Notifications from './components/Notifications/Notifications';

function App() {
  const location = useLocation();

  // check login or register page
  const hideNavBar = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!hideNavBar && <NavBar />} {/*hide navbar on login and register page*/}
      {!hideNavBar && <Notifications />} 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="/routines/:id" element={<RoutineDetails />} />
          <Route path="/routines" element={<RoutinePage />} />
          <Route path="/routines/:id" element={<RoutineDetails />} />
          <Route path="/exercises/:id" element={<ExercisePage />} />
        </Route>
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
