import './App.css'
import AddButton from './components/AddButton'
import DeleteButton from './components/DeleteButton'
import EditButton from './components/EditButton'
import ExerciseList from './components/ExerciseList'
import ExerciseModal from './components/ExerciseModal'
import LoginForm from './components/LoginForm'
import MuscleGroupChart from './components/MuscleGroupChart'
import NavBar from './components/NavBar/NavBar'
import RoutineList from './components/RoutineList'
import SignUpForm from './components/SignUpForm'
import RegisterForm from './components/SignUpForm/SignUpForm'
import UserInfo from './components/UserInfo'
import WorkoutList from './components/WorkoutList'
import WorkoutWeightGraph from './components/WorkoutWeightGraph'
import { routineList, user, workoutLogsList } from './constants'

function App() {

  // dummy click handler for testing buttons
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <>
      {/* <WorkoutWeightGraph /> */}
      {/* <ExerciseList /> */}
      {/* <UserInfo user={user}/> */}
      {/* <WorkoutList workoutLogsList={workoutLogsList} /> */}
      {/* <RoutineList /> */}
      {/* <LoginForm /> */}
      {/* <RegisterForm /> */}
      {/* <MuscleGroupChart /> */}
      <AddButton handleClick={handleButtonClick} />
      {/* <ExerciseModal /> */}
      <DeleteButton handleClick={handleButtonClick} />
      <NavBar />
      <EditButton handleClick={handleButtonClick} />
    </>
  )
}

export default App
