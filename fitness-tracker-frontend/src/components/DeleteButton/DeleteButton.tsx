import { IconButton, SxProps } from "@mui/material";
import { MouseEvent } from "react";
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

type Props = {}

type DeleteButtonProps = {
    color?: "inherit" | "primary" | "secondary" | "action" | "error" | "disabled" | "success";
    size?: "small" | "medium" | "large";
    handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
    sx?: SxProps;
};

const DeleteButton = ({ color = "error", size, handleClick, sx }: DeleteButtonProps) => {
    return (
        <IconButton aria-label="Delete" size={size} onClick={handleClick}>
            <RemoveCircleOutlineOutlinedIcon color={color} sx={{ ...sx }} />
        </IconButton>
    )
}

export default DeleteButton