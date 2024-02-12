import { Stack } from "@mui/material";
import Image from "next/image";
import { getElementImage } from "../../utils/getElementImages";

type SeparateElementProps = {
    size: number;
    name: string;
    rotation: number;
};

export const SeparateElement = ({
    size,
    name,
    rotation,
}: SeparateElementProps) => {
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
        </Stack>
    );
};
