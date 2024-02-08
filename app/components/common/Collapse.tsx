import { Collapse as MuiCollapse, Stack } from "@mui/material";
import { memo, useState } from "react";
import arrowLeftIcon from "../../../public/arrow-left-solid.svg";
import { IconButton } from "@mui/material";
import Image from "next/image";

type CollapseProps = {
    children: React.ReactNode;
    defaultExpanded?: boolean;
};

export const Collapse = memo(function Collapse({
    children,
    defaultExpanded,
}: CollapseProps) {
    const [expanded, setExpanded] = useState(defaultExpanded ?? false);

    return (
        <MuiCollapse
            in={expanded}
            orientation="horizontal"
            collapsedSize={35}
            onClick={!expanded ? () => setExpanded(true) : undefined}
            sx={{
                marginLeft: "-35px",
                marginTop: "10px",
                borderTopRightRadius: "60px",
                borderBottomRightRadius: "60px",
                zIndex: 100,
            }}
        >
            <Stack
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="nowrap"
                sx={{
                    float: "right",
                    padding: "5px 10px",
                    borderTopRightRadius: "40px",
                    borderBottomRightRadius: "40px",
                    minWidth: "25px",
                    fontSize: "14px",
                    backgroundColor: "rgb(224, 217, 211)",
                    cursor: "pointer",
                    color: expanded ? "black" : "transparent",
                    zIndex: 100,
                }}
            >
                <>
                    {children}
                    <IconButton
                        color="inherit"
                        onClick={() => setExpanded(false)}
                        sx={{
                            marginLeft: "15px",
                        }}
                    >
                        <Image
                            src={arrowLeftIcon}
                            width={20}
                            height={20}
                            alt={"arrow left icon"}
                        />
                    </IconButton>
                </>
            </Stack>
        </MuiCollapse>
    );
});
