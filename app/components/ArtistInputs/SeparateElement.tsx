import { IconButton, Stack } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import rotateIcon from "../../../public/arrow-rotate-left-solid.svg";
import { getElementImage } from "../../utils/getElementImages";

type SeparateElementProps = {
    size: number;
    name: string;
    defaultRotation: number;
};

export const SeparateElement = ({
    size,
    name,
    defaultRotation,
}: SeparateElementProps) => {
    const [rotation, setRotation] = useState(0);

    const rotate = () => {
        setRotation((prev) => prev + 1);
    };

    useEffect(() => {
        setRotation((prev) => defaultRotation);
    }, [defaultRotation]);

    return (
        <Stack alignItems="center">
            <Image
                src={getElementImage(name)}
                width={size}
                height={size}
                alt={"element 1z"}
                style={{
                    transform: `rotate(${-90 * rotation}deg)`,
                    backgroundColor: "white",
                }}
            />

            <IconButton
                color="inherit"
                size="large"
                onClick={() => rotate()}
                sx={{ marginTop: "20px" }}
            >
                <Image
                    src={rotateIcon}
                    width={20}
                    height={20}
                    alt={"rotate icon"}
                />
            </IconButton>
        </Stack>
    );
};
