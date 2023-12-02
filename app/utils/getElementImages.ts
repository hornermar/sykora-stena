import { default as el1b } from "../../public/elements/1b.svg";
import { default as el1d } from "../../public/elements/1d.svg";
import { default as el1i } from "../../public/elements/1i.svg";
import { default as el1r } from "../../public/elements/1r.svg";
import { default as el1y } from "../../public/elements/1y.svg";
import { default as el1z } from "../../public/elements/1z.svg";
import { default as el2b } from "../../public/elements/2b.svg";
import { default as el2r } from "../../public/elements/2r.svg";
import { default as el2y } from "../../public/elements/2y.svg";
import { default as el2z } from "../../public/elements/2z.svg";
import { default as el3b } from "../../public/elements/3b.svg";
import { default as el3r } from "../../public/elements/3r.svg";
import { default as el3y } from "../../public/elements/3y.svg";
import { default as el3z } from "../../public/elements/3z.svg";
import { default as el4b } from "../../public/elements/4b.svg";
import { default as el4d } from "../../public/elements/4d.svg";
import { default as el4i } from "../../public/elements/4i.svg";
import { default as el4r } from "../../public/elements/4r.svg";
import { default as el4y } from "../../public/elements/4y.svg";
import { default as el4z } from "../../public/elements/4z.svg";
import { default as emptyWhite } from "../../public/elements/emptyWhite.svg";

export const getElementImage = (element: string) => {
    switch (element) {
        case "1b":
            return el1b;
        case "1d":
            return el1d;
        case "1i":
            return el1i;
        case "1y":
            return el1y;
        case "1z":
            return el1z;
        case "1r":
            return el1r;
        case "2z":
            return el2z;
        case "2b":
            return el2b;
        case "2y":
            return el2y;
        case "2r":
            return el2r;
        case "3b":
            return el3b;
        case "3y":
            return el3y;
        case "3z":
            return el3z;
        case "3r":
            return el3r;
        case "4b":
            return el4b;
        case "4d":
            return el4d;
        case "4i":
            return el4i;
        case "4y":
            return el4y;
        case "4z":
            return el4z;
        case "4r":
            return el4r;
        default:
            return emptyWhite;
    }
};
