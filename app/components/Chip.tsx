import { Chip as MuiChip, SxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledChip = styled(MuiChip)((props) => ({
    border: props.variant === "filled" ? "2px solid black" : "2px solid white",
    backgroundColor: "white",
    fontSize: "12px",
    fontWeight: "400",
    borderRadius: "40px",
    // width: "min-content",
    // maxWidth: "100%",
    // fontWeight: "400",
    padding: "6px 0px",
    height: "auto",
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
