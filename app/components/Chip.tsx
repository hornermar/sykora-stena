import { Chip as MuiChip, SxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledChip = styled(MuiChip)((props) => ({
    border: props.variant === "filled" ? "2px solid black" : "2px solid white",
    backgroundColor: "white",
    fontSize: "20px",
    padding: "20px 4px",
    borderRadius: "20px",
    fontWeight: "400",
    width: "100%",
    "&:active": {
        boxShadow: "none",
        backgroundColor: "white",
    },
    "&:focus": {
        backgroundColor: "white",
    },
    "&:hover": {
        backgroundColor: "white",
    },
    "&.MuiButtonBase-root": {
        margin: "0",
    },
}));

type ChipProps = {
    label: string;
    onClick?: () => void;
    selected?: boolean;
    sx?: SxProps;
};

export const Chip = ({ label, onClick, selected, sx }: ChipProps) => {
    return (
        <StyledChip
            label={label}
            onClick={onClick}
            variant={selected ? "filled" : "outlined"}
            sx={sx}
        />
    );
};
