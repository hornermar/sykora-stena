import { Button } from "../common/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { DialogContent } from "@mui/material";
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
                    Na konci 60. let pomocí tohoto algoritmu vytvořil Stěnu pro
                    pasáž. Původně z jedné strany sousedila s polským kulturním
                    střediskem, z druhé později s výlezem ze stanice metra
                    Můstek.
                </p>
                <p>
                    V roce 2005 byla pasáž zrušena a zastavěna obchody a bary a
                    Sýkorova mozaika se tak stala součástí interiéru kavárny.
                    Prostor byl doplněn patrem, což necitlivě rozdělilo mozaiku
                    na dvě části a znemožnilo tak pohled na celé dílo. Dnes se
                    zde nachází asijské bistro a v těsné blízkosti mozaiky se
                    smaží nudle. To k uchchování uměleckého díla pravděpodobně
                    příliš nepřidává.
                </p>

                <p>
                    Mozaiku najdete na adrese{" "}
                    <a
                        href="https://maps.app.goo.gl/YAtsMNmorrUaSU3h7"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Jindřišská 832/3
                    </a>
                    .
                </p>

                <Structure
                    grid={originalGrid}
                    cellType={"image"}
                    sx={{ paddingTop: "20px" }}
                />
            </DialogContent>
        </Dialog>
    );
};
