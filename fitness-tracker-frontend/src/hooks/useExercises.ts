import { useQuery } from "react-query";
import { ExerciseService } from "../services";
import { Exercise } from "../utils/types";
import { AxiosError } from "axios";


const useExercises = () => {
   return useQuery<Exercise[], AxiosError>('exercises',
       () => ExerciseService.getExercises(),
       { refetchOnWindowFocus: false }
   );
}


export default useExercises;