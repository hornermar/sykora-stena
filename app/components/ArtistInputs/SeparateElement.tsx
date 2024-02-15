import { Stack } from "@mui/material";
import Image from "next/image";
import { getElementImage } from "../../utils/getElementImages";
import { clickableColor } from "../Dashboard";
import { useState } from "react";

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

    const handleImageClick = () => {
        setRotation((prev) => (prev + 1) % 4);
    };

    return (
        <Stack alignItems="center">
            <Image
                src={getElementImage(name)}
                width={size}
                height={size}
                alt={"element 1z"}
                style={{
                    transform: `rotate(${
                        -90 * (rotation + defaultRotation)
                    }deg)`,
                    backgroundColor: "white",
                    border: `2px dotted ${clickableColor}`,
                }}
                onClick={handleImageClick}
            />
        </Stack>
    );
};
