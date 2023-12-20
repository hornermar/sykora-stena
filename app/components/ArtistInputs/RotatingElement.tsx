import { Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import rotateIcon from "../../../public/rotate-solid.svg";
import { getElementImage } from "../../utils/getElementImages";
import { Button } from "../Button";

type RotatingElementProps = {
    size: number;
    name: string;
    onClick?: () => void;
};

export const RotatingElement = ({
    size,
    name,
    onClick,
}: RotatingElementProps) => {
    const [rotation, setRotation] = useState(0);

    const rotate = () => {
        setRotation((prev) => prev + 1);
        onClick && onClick();
    };

    return (
        <Stack>
            <Image
                src={getElementImage(name)}
                width={size}
                height={size}
                alt={"element 1z"}
                style={{
                    transform: `rotate(${-90 * rotation}deg)`,
                    marginBottom: "20px",
                }}
            />
            <Button variant="text" onClick={() => rotate()}>
                <Image
                    src={rotateIcon}
                    width={15}
                    height={15}
                    alt={"rotate icon"}
                />
            </Button>
        </Stack>
    );
};
