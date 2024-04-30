import { AxiosError } from "axios";
import { ExerciseService } from "../services";
import { Exercise } from "../utils/types";
import { useMutation, useQueryClient } from "react-query";

const useDeleteExercise = () => {
    const queryClient = useQueryClient();
    return useMutation<Exercise, AxiosError, { id: string }>(
        ({ id }) => ExerciseService.deleteExercise(id),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('exercises');
            },
        }
    );
};

export default useDeleteExercise;