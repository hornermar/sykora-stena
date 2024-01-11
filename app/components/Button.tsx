import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(MuiButton)((props) => ({
    boxShadow: "none",
    padding: "4px 20px",
    borderRadius: "25px",
    color: "white",
    backgroundColor: props.variant === "contained" ? "black" : "transparent",
    textTransform: "none",
    "&:hover": {
        boxShadow: "none",
        backgroundColor:
            props.variant === "contained" ? "black" : "transparent",
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "black",
    },
    "&:focus": {
        backgroundColor:
            props.variant === "contained" ? "black" : "transparent",
    },
}));

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    fullWidth?: boolean;
    variant?: "contained" | "text";
    endIcon?: React.ReactNode;
};

export const Button = ({
    children,
    onClick,
    fullWidth,
    variant,
    endIcon,
}: ButtonProps) => {
    return (
        <StyledButton
            fullWidth={fullWidth}
            onClick={onClick}
            size="small"
            variant={variant ?? "contained"}
            endIcon={endIcon}
        >
            {children}
        </StyledButton>
    );
};
