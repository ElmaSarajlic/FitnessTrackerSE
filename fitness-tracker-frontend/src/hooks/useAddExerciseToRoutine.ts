import { useMutation, useQueryClient } from 'react-query';
import { RoutineService } from '../services';
import { ExerciseDetail } from '../utils/types';


const useAddExerciseToRoutine = () => {
    const queryClient = useQueryClient();
    return useMutation(
       (variables: { id: string, exercise: ExerciseDetail }) => 
          RoutineService.addExerciseToRoutine(variables.id, variables.exercise),
       {
          onSuccess: () => {
             queryClient.invalidateQueries('routine');
          },
       }
    );
};


export default useAddExerciseToRoutine;
