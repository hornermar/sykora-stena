"use client";
import { IconButton } from "@mui/material";
import Image from "next/image";
import github from "../../../public/github.svg";
import instagram from "../../../public/instagram.svg";
import linkedIn from "../../../public/linkedin-in.svg";
import { Card } from "../Card";

type ContactProps = {};

export const Contact = ({}: ContactProps) => {
    //this year
    const year = new Date().getFullYear();
    return (
        <>
            <Card
                color="black"
                sx={{ color: "white", fontSize: "14px", fontWeight: 300 }}
            >
                <a
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
                </a>
                <a
                    href="https://github.com/hornermar/sykora-stena"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconButton size="large">
                        <Image
                            src={github}
                            width={20}
                            height={20}
                            alt={"arrow to the top icon"}
                        />
                    </IconButton>
                </a>
                <a
                    href="https://www.linkedin.com/in/marketahornerova/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconButton size="large">
                        <Image
                            src={linkedIn}
                            width={20}
                            height={20}
                            alt={"arrow to the top icon"}
                        />
                    </IconButton>
                </a>
                {/* <p>Email: hornerova.m@gmail.com</p> */}
            </Card>
        </>
    );
};
