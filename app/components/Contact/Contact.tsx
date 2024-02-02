"use client";
import { Card } from "../Card";

type ContactProps = {};

export const Contact = ({}: ContactProps) => {
    //this year
    const year = new Date().getFullYear();
    return (
        <>
            <Card
                color="black"
                sx={{ color: "white", fontSize: "10px", fontWeight: 300 }}
            >
                <p>
                    Veškeré struktury na této stránce jsou vygenerované pomocí
                    rekonstruovaného algoritmu.
                </p>
                <p>@ 2024 Markéta Hájková</p>
                {/* <a
                    href="https://www.instagram.com/marketa_hajek/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconButton size="large">
                        <Image
                            src={instagram}
                            width={20}
                            height={20}
                            alt={"arrow to the top icon"}
                        />
                    </IconButton>
                </a> */}

                <p>Email: hornerova.m@gmail.com</p>
            </Card>
        </>
    );
};
