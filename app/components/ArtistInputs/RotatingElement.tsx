import { Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import rotateIcon from "../../../public/rotate-solid.svg";
import { getElementImage } from "../../utils/getElementImages";
import { Button } from "../Button";

type RotatingElementProps = {
    size: number;
    name: string;
};

export const RotatingElement = ({ size, name }: RotatingElementProps) => {
    const [rotation, setRotation] = useState(0);

    return (
        <Stack>
            <Button
                variant="text"
                onClick={() => setRotation((prev) => prev + 1)}
            >
                <Image
                    src={rotateIcon}
                    width={15}
                    height={15}
                    alt={"rotate icon"}
                />
            </Button>
            <Image
                src={getElementImage(name)}
                width={size}
                height={size}
                alt={"element 1z"}
                style={{
                    transform: `rotate(${90 * rotation}deg)`,
                    marginTop: "20px",
                }}
            />
        </Stack>
    );
};
