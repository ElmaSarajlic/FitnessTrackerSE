import Grid from '@mui/material/Grid';
import ExerciseDetailCard from '../ExerciseDetailCard';
import { ExerciseDetail } from '../../utils/types';

type Props = {
  exerciseDetailList: ExerciseDetail[];
  onExerciseDetailsChange: (updatedList: ExerciseDetail[]) => void;
  onDeleteExercise: (exerciseDetailId: string) => void;
};

const ExerciseDetailList = ({ exerciseDetailList, onExerciseDetailsChange, onDeleteExercise }: Props) => {
  const handleDetailChange = (updatedDetail: ExerciseDetail) => {
    const updatedList = exerciseDetailList.map(detail =>
      detail.detailId === updatedDetail.detailId ? updatedDetail : detail
    );
    onExerciseDetailsChange(updatedList);
  };

  return (
    <Grid container direction="column" spacing={0}>
      {exerciseDetailList.map(detail => (
        <Grid item key={detail.detailId}>
          <ExerciseDetailCard 
            exerciseDetail={detail} 
            onDetailChange={handleDetailChange} 
            onDeleteExercise={onDeleteExercise}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ExerciseDetailList;
