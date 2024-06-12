import { useMutation, useQueryClient } from 'react-query';
import { RoutineService } from '../services';
import { Routine } from '../utils/types';
import { AxiosError } from 'axios';

const useMarkRoutineDone = () => {
    const queryClient = useQueryClient();
    return useMutation<Routine, AxiosError, { id: string, dateCompleted: string }>(
        ({ id, dateCompleted }) => RoutineService.markRoutineCompleted(id, dateCompleted),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('workoutlogs');
            },
        }
    );
};


export default useMarkRoutineDone;
