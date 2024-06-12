import { useQuery } from "react-query";
import { RoutineService } from "../services";
import { Routine } from "../utils/types";
import { AxiosError } from "axios";

// get by user id 
const useRoutines = (userId: string) => {
    return useQuery<Routine[], AxiosError>(['routines', userId],
        () => RoutineService.getRoutines(userId),
        { refetchOnWindowFocus: false }
    );
}

export default useRoutines;