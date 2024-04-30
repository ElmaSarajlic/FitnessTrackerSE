import { IconButton, SxProps } from "@mui/material";
import { MouseEvent } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

type Props = {}

type AddButtonProps = {
  color?: "inherit" | "primary" | "secondary" | "action" | "error" | "disabled" | "success";
  size?: "small" | "medium" | "large";
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  sx?: SxProps;
};

const AddButton = ({ color = "success", size, handleClick, sx }: AddButtonProps) => {
  return (
    <IconButton aria-label="add" size={size} onClick={handleClick}>
      <AddCircleOutlineIcon color={color} sx={{ ...sx }} />
    </IconButton>
  )
}

export default AddButton