import { useQuery } from "react-query";
import { WorkoutLogsService } from "../services";
import { WorkoutLog } from "../utils/types";
import { AxiosError } from "axios";

// get all logs per user id 
const useLogsByUser = (userId: string) => {
    return useQuery<WorkoutLog[], AxiosError>(['workout logs', userId],
        () => WorkoutLogsService.getLogsByUserId(userId),
        { refetchOnWindowFocus: false }
    );
}

export default useLogsByUser;