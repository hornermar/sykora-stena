import { Chip as MuiChip } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledChip = styled(MuiChip)(() => ({
    // border: "2px solid black",
    border: "none",
    // backgroundColor: props.variant === "filled" ? green : "black",
    backgroundColor: "white",
    // color: "white",
    fontSize: "18px",
    padding: "20px 10px",
    borderRadius: "25px",
    "&:active": {
        boxShadow: "none",
        backgroundColor: "white",
    },
    "&:focus": {
        backgroundColor: "white",
    },
}));

type ChipProps = {
    label: string;
    onClick?: () => void;
};

export const Chip = ({ label, onClick }: ChipProps) => {
    return (
        <div>
            <StyledChip label={label} onClick={onClick} />
        </div>
    );
};
