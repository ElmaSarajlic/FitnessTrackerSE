import { useMutation, useQueryClient } from "react-query";
import { ExerciseService } from "../services";
import { Exercise } from "../utils/types";
import { AxiosError } from "axios";

const useUpdateExercise = () => {
    const queryClient = useQueryClient();
    return useMutation<Exercise, AxiosError, { id: string; formData: FormData }>(
        ({ id, formData }) => ExerciseService.updateExercise(id, formData),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('exercises');
            },
        }
    );
};

export default useUpdateExercise;
