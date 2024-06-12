import { AxiosError } from "axios";
import { RoutineService } from "../services";
import { Routine } from "../utils/types";
import { useMutation, useQueryClient } from "react-query";

const useUpdateRoutine = () => {
    const queryClient = useQueryClient();
    return useMutation<Routine, AxiosError, { id: string; data: Routine }>(
        ({ id, data }) => RoutineService.updateRoutine(id, data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('routine');
            },
        }
    );
};

export default useUpdateRoutine;