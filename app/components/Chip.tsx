import { Chip as MuiChip, SxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledChip = styled(MuiChip)((props) => ({
    border: "1px solid black",
    backgroundColor:
        props.variant === "filled" ? "black !important" : "white !important",
    color: props.variant === "filled" ? "white !important" : "black !important",
    fontSize: "12px",
    fontWeight: "400",
    borderRadius: "40px",
    padding: "4px 0px",
    height: "auto",
    "&:active": {
        boxShadow: "none",
        backgroundColor: "black !important",
    },
    "&:focus": {
        backgroundColor: "black !important",
    },
    "&:hover": {
        backgroundColor: "black !important",
    },
    "&.MuiButtonBase-root": {
        marginBottom: "4px",
    },
    ".MuiChip-label": {
        whiteSpace: "normal",
    },
}));

type ChipProps = {
    label: string;
    onClick?: () => void;
    selected?: boolean;
    disabled?: boolean;
    sx?: SxProps;
};

export const Chip = ({ label, onClick, selected, disabled, sx }: ChipProps) => {
    return (
        <StyledChip
            label={label}
            onClick={onClick}
            variant={selected ? "filled" : "outlined"}
            disabled={disabled}
            sx={sx}
        />
    );
};
