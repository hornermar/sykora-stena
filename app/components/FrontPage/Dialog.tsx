import * as React from "react";
import { Button } from "../Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent } from "@mui/material";
import { IconButton, Stack } from "@mui/material";
import Image from "next/image";
import xIcon from "../../../public/xmark-solid.svg";

type FrontPageDialogProp = {
    open: boolean;
    onClose: () => void;
};

export const FrontPageDialog = ({ open, onClose }: FrontPageDialogProp) => {
    return (
        <Dialog onClose={onClose} open={open} sx={{}}>
            <DialogTitle>Stěna, 1968</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <IconButton
                    color="inherit"
                    onClick={onClose}
                    sx={{ marginTop: "-5px" }}
                >
                    <Image
                        src={xIcon}
                        width={20}
                        height={20}
                        alt={"close icon"}
                    />
                </IconButton>
            </IconButton>
            <DialogContent>
                <p>
                    Stěnu na adrese{" "}
                    <a
                        href="https://maps.app.goo.gl/JE3JmM7rd2TKafbx7"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Jindřišská 832/3
                    </a>
                    . Tato mozaika pochází z roku 1968 a původně byla určena pro
                    pasáž.
                </p>
                <p>
                    Svůj původní účel ztratila v roce 2005, kdy byla pasáž
                    zrušena a zastavěna obchody a bary. Mozaika se stala
                    součástí interiéru kavárny a byla necitlivě přepažena
                    vestavěným patrem. Dnešní provozovatel na cenné keramické
                    destičky vypouští páru při vaření nudlí.
                </p>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Zavřít</Button>
            </DialogActions>
        </Dialog>
    );
};
