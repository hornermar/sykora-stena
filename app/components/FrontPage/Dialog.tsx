import { Button } from "../common/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent } from "@mui/material";
import { IconButton } from "@mui/material";
import Image from "next/image";
import xIcon from "../../../public/xmark-solid.svg";
import { Structure } from "../Structure/Structure";
import { originalGrid } from "@/app/lib/originalGrid";

type FrontPageDialogProp = {
    open: boolean;
    onClose: () => void;
};

export const FrontPageDialog = ({ open, onClose }: FrontPageDialogProp) => {
    return (
        <Dialog
            fullScreen
            onClose={onClose}
            open={open}
            sx={{
                ".MuiPaper-root": {
                    backgroundColor: "white",
                },
            }}
        >
            <DialogTitle sx={{ paddingBottom: 0 }}>Stěna, 1968</DialogTitle>

            <IconButton
                color="inherit"
                onClick={onClose}
                sx={{
                    marginTop: "-5px",
                    position: "absolute",
                    right: 8,
                    top: 8,
                }}
            >
                <Image src={xIcon} width={20} height={20} alt={"close icon"} />
            </IconButton>

            <DialogContent sx={{ paddingTop: "0" }}>
                <p>
                    Stěnu najdete na adrese{" "}
                    <a
                        href="https://maps.app.goo.gl/JE3JmM7rd2TKafbx7"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Jindřišská 832/3
                    </a>
                    . Tato mozaika pochází z roku 1968 a původně byla určena pro
                    pasáž. Z jedné stran s ní sousedilo polské kulturní
                    středisko, z druhé později výlez ze stanice metra Můstek.
                </p>
                <p>
                    Svůj původní účel ztratila v roce 2005, kdy byla pasáž
                    zrušena a zastavěna obchody a bary. Mozaika se stala
                    součástí interiéru kavárny a byla necitlivě přepažena
                    vestavěným patrem. Dnešní provozovatel na cenné keramické
                    destičky vypouští páru při vaření nudlí.
                </p>

                <Structure
                    grid={originalGrid}
                    cellType={"image"}
                    sx={{ paddingTop: "20px" }}
                />
            </DialogContent>
            <DialogActions sx={{ padding: "15px 20px" }}>
                <Button onClick={onClose}>Zavřít</Button>
            </DialogActions>
        </Dialog>
    );
};
