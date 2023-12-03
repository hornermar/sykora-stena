import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(MuiButton)({
    boxShadow: "none",
    padding: "15px 20px",
    borderRadius: "25px",
    color: "black",
    backgroundColor: "#d5d4d6",
    textTransform: "none",
    "&:hover": {
        boxShadow: "none",
        backgroundColor: "#b5b5b5",
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "#b5b5b5",
    },
    "&:focus": {
        backgroundColor: "#b5b5b5",
    },
});

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    fullWidth?: boolean;
};

export const Button = ({ children, onClick, fullWidth }: ButtonProps) => {
    return (
        <StyledButton fullWidth={fullWidth} onClick={onClick} size="small">
            {children}
        </StyledButton>
    );
};
