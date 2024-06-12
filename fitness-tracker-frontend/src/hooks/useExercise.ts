import { useQuery } from "react-query";
import { ExerciseService } from "../services";
import { Exercise } from "../utils/types";
import { AxiosError } from "axios";

// get exercise details by id
const useExercise = (id: string) => {
    return useQuery<Exercise, AxiosError>(['exercise', id],
        () => ExerciseService.getExerciseById(id),
        { refetchOnWindowFocus: false }
    );
}

export default useExercise;