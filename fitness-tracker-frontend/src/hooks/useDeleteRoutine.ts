import { AxiosError } from "axios";
import { RoutineService } from "../services";
import { Routine } from "../utils/types";
import { useMutation, useQueryClient } from "react-query";

const useDeleteRoutine = () => {
    const queryClient = useQueryClient();
    return useMutation<Routine, AxiosError, { id: string }>(
        ({ id }) => RoutineService.deleteRoutine(id),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('routines');
            },
        }
    );
};

export default useDeleteRoutine;