import { useQuery } from "react-query";
import { RoutineService } from "../services";
import { Routine } from "../utils/types";
import { AxiosError } from "axios";


// get routine details by id
const useRoutine = (id: string) => {
    return useQuery<Routine, AxiosError>(['routine', id],
        () => RoutineService.getRoutineById(id),
        { refetchOnWindowFocus: false }
    );
}

export default useRoutine;