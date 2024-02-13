import { IconButton, Stack } from "@mui/material";
import { Card } from "../common/Card";
import instagramIcon from "../../../public/instagram.svg";
import Image from "next/image";

type ContactProps = {};

export const Contact = ({}: ContactProps) => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <Card
                color="black"
                sx={{
                    color: "white",
                    fontSize: "10px",
                    fontWeight: 300,
                }}
            >
                <p>
                    Struktury na této stránce jsou vygenerované pomocí
                    rekonstruovaného algoritmu.
                </p>
                <Stack flexDirection="row" alignItems="center">
                    <p style={{ marginRight: "20px" }}>
                        ©{" "}
                        <span>
                            {currentYear > 2024
                                ? `2024–⁠⁠⁠⁠⁠${currentYear}`
                                : currentYear}
                        </span>{" "}
                        Markéta Hájková
                    </p>
                    <a
                        href="https://www.instagram.com/marketa_hajek/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconButton size="large">
                            <Image
                                src={instagramIcon}
                                width={20}
                                height={20}
                                alt={"arrow to the top icon"}
                            />
                        </IconButton>
                    </a>
                </Stack>

                {/* <p>Email: hornerova.m@gmail.com</p> */}
            </Card>
        </>
    );
};
