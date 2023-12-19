import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(MuiButton)((props) => ({
    boxShadow: "none",
    padding: "15px 20px",
    borderRadius: "25px",
    color: "black",
    backgroundColor: props.variant === "contained" ? "#b5b5b5" : "transparent",
    textTransform: "none",
    "&:hover": {
        boxShadow: "none",
        backgroundColor:
            props.variant === "contained" ? "#b5b5b5" : "transparent",
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "#b5b5b5",
    },
    "&:focus": {
        backgroundColor:
            props.variant === "contained" ? "#b5b5b5" : "transparent",
    },
}));

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    fullWidth?: boolean;
    variant?: "contained" | "text";
};

export const Button = ({
    children,
    onClick,
    fullWidth,
    variant,
}: ButtonProps) => {
    return (
        <StyledButton
            fullWidth={fullWidth}
            onClick={onClick}
            size="small"
            variant={variant}
        >
            {children}
        </StyledButton>
    );
};
