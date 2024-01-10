import { Switch as MuiSwitch, SxProps, styled } from "@mui/material";

const StyledSwitch = styled(MuiSwitch)(() => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
        margin: 1,
        padding: 0,
        transform: "translateX(6px)",
        "&.Mui-checked": {
            color: "#fff",
            transform: "translateX(22px)",
            "& .MuiSwitch-thumb:before": {
                backgroundImage: `url('/border-all-solid.svg')`,
            },
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: "#8796A5",
            },
        },
    },
    "& .MuiSwitch-thumb": {
        backgroundColor: "black",
        width: 32,
        height: 32,
        "&::before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url('/square-regular.svg')`,
        },
    },
    "& .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#aab4be",
        borderRadius: 20 / 2,
    },
}));

type SwitchProps = {
    onChange: () => void;
    checked: boolean;
    sx?: SxProps;
};

export const Switch = ({ onChange, checked, sx }: SwitchProps) => {
    return <StyledSwitch checked={checked} onChange={onChange} />;
};
