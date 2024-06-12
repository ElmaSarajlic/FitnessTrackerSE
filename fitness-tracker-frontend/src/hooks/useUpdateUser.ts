import { useMutation, useQueryClient } from "react-query";
import { User } from "../utils/types";
import { UsersService } from "../services";
import { AxiosError } from "axios";

const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation<User, AxiosError, { id: string, user: User }>(
        ({ id, user }) => UsersService.updateUser(id, user),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('user');
            },
        }
    );
};

export default useUpdateUser;