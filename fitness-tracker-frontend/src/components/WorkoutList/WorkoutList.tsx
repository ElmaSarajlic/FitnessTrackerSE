// WorkoutList.js
import { user } from '../../constants'
import WorkoutCard from '../WorkoutCard'
import { useState } from 'react'
import { Container, Grid } from '@mui/material'
import { WorkoutLog } from '../../utils/types'

type Props = {
  workoutLogsList: WorkoutLog[]
}

const WorkoutList = ({ workoutLogsList }: Props) => {
  const [workoutLogs, setWorkoutLogs] = useState(workoutLogsList)

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {workoutLogs.map((workoutLog, i) => (
          <WorkoutCard user={user} workoutLog={workoutLog} />
      ))}
    </Container>
  )
}

export default WorkoutList