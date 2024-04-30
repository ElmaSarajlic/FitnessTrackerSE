import RoutineCard from "../RoutineCard";
import { Grid } from '@mui/material';
import { useState } from 'react';
import { routineList } from "../../constants";

type Props = {}

const RoutineList = (props: Props) => {
const [routines, setRoutines] = useState(routineList);

  return (
    <Grid container spacing={1}>
    {routines.map((routine, i) => (
      <Grid item key={i} xs={12} sm={10} md={10} lg={4}>
        <RoutineCard routine={routine} />
      </Grid>
    ))}
  </Grid>
  )
}

export default RoutineList