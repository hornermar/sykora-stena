import { IconButton, Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import rotateIcon from "../../../public/rotate-solid.svg";
import { getElementImage } from "../../utils/getElementImages";

type SeparateElementProps = {
    size: number;
    name: string;
    onClick?: () => void;
    isRotating?: boolean;
};

export const SeparateElement = ({
    size,
    name,
    onClick,
    isRotating,
}: SeparateElementProps) => {
    const [rotation, setRotation] = useState(0);

    const rotate = () => {
        setRotation((prev) => prev + 1);
        onClick && onClick();
    };

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
            {isRotating && (
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
            )}
        </Stack>
    );
};
