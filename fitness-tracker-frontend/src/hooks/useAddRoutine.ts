import { useMutation, useQueryClient } from "react-query";
import { Routine } from "../utils/types";
import { RoutineService } from "../services";
import { AxiosError } from "axios";

const useAddRoutine = () => {
    const queryClient = useQueryClient();
    return useMutation<Routine, AxiosError, { routine: Routine }>(
        ({routine }) => RoutineService.createRoutine(routine),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('routines');
            },
        }
    );
};

export default useAddRoutine;