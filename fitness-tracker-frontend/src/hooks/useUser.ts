import { useQuery } from "react-query";
import { UsersService } from "../services";
import { User } from "../utils/types";
import { AxiosError } from "axios";

// get user details by id
const useUser = (id: string) => {
    return useQuery<User, AxiosError>(['user', id],
        () => UsersService.getUserById(id),
        { refetchOnWindowFocus: false }
    );
}

export default useUser;