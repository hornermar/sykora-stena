import { Stack } from "@mui/material";

type InputLabelProps = {
    coefficient: number;
    rule: number;
    display: boolean;
};

export const InputsLabel = ({
    coefficient,
    rule,
    display,
}: InputLabelProps) => {
    return (
        display && (
            <Stack
                sx={{
                    position: "absolute",
                    right: "0",
                    top: "-28px",
                    float: "right",
                    padding: "5px 10px",
                    fontSize: "12px",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                    color: "white",
                    backgroundColor: "black",
                }}
            >
                <span>
                    C: {coefficient} V: {rule}
                </span>
            </Stack>
        )
    );
};