import { Box, Collapse, Stack, Typography } from "@mui/material";
import { Chip } from "../common/Chip";
import { Dispatch, SetStateAction, memo, useCallback, useState } from "react";
import { Button } from "../common/Button";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent } from "@mui/material";
import { IconButton } from "@mui/material";
import Image from "next/image";
import slidersIcon from "../../../public/sliders-solid.svg";
import xIcon from "../../../public/xmark-solid.svg";
import { useSwitch } from "../../hooks/useSwitch";
import { Slider } from "../common/Slider";
import { map } from "lodash";
import { rulesItems } from "../../lib/formItems";
import { Rule } from "../../types/Rule";
import arrowLeftIcon from "../../../public/arrow-left-solid.svg";
import { GridSwitch } from "../common/Switch";

type InputLabelProps = {
    display?: boolean;
    form: { coefficient: number; rule: number };
    setForm?: Dispatch<
        SetStateAction<{
            coefficient: number;
            rule: number;
        }>
    >;
    isSwichChecked?: boolean;
    onSwitchChange?: () => void;
    defaultExpanded?: boolean;
};

export const StructureForm = memo(function InputsLabel({
    display,
    form,
    setForm,
    isSwichChecked,
    onSwitchChange,
    defaultExpanded,
}: InputLabelProps) {
    const [temporatyForm, setTemporaryForm] = useState({
        coefficient: form.coefficient,
        rule: form.rule,
    });
    const [open, onOpen, onClose] = useSwitch(false);
    const [expanded, setExpanded] = useState(defaultExpanded ?? false);
    // const [display2, setDisplay] = useState(false);

    const handleSubmit = useCallback(() => {
        setForm && setForm(temporatyForm);
        onClose();
    }, [temporatyForm, setForm, onClose]);

    return (
        <>
            <Collapse
                in={expanded}
                orientation="horizontal"
                collapsedSize={25}
                onClick={!expanded ? () => setExpanded(true) : undefined}
                sx={{
                    marginTop: "-50px",
                    marginLeft: "-25px",
                    borderTopRightRadius: "40px",
                    borderBottomRightRadius: "40px",

                    zIndex: 1000,
                }}
            >
                <Stack
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    flexWrap="nowrap"
                    sx={{
                        float: "right",
                        padding: "5px 10px",
                        borderTopRightRadius: "40px",
                        borderBottomRightRadius: "40px",
                        height: "50px",
                        width: "100%",
                        minWidth: "25px",
                        fontSize: "14px",
                        backgroundColor: "rgb(224, 217, 211)",
                        cursor: "pointer",
                        color: expanded ? "black" : "transparent",
                        zIndex: 1000,
                    }}
                >
                    <>
                        <p>
                            Koeficient:&nbsp;{form.coefficient}
                            &nbsp;Pravidlo:&nbsp;
                            {form.rule}
                        </p>
                        <Box sx={{ marginLeft: "30px", overflow: "hidden" }}>
                            <IconButton
                                color="inherit"
                                onClick={() => setExpanded(false)}
                                sx={{
                                    backgroundColor: "transparent",
                                    color: "black",
                                }}
                            >
                                <Image
                                    src={arrowLeftIcon}
                                    width={20}
                                    height={20}
                                    alt={"arrow left icon"}
                                />
                            </IconButton>

                            {setForm && (
                                <IconButton
                                    color="inherit"
                                    onClick={onOpen}
                                    sx={{
                                        backgroundColor: "white",
                                        color: "black",
                                    }}
                                >
                                    <Image
                                        src={slidersIcon}
                                        width={20}
                                        height={20}
                                        alt={"edit icon"}
                                    />
                                </IconButton>
                            )}
                            {onSwitchChange && (
                                <GridSwitch
                                    checked={isSwichChecked ?? false}
                                    onChange={onSwitchChange}
                                />
                            )}
                        </Box>
                    </>
                </Stack>
            </Collapse>
            {setForm && (
                <Dialog
                    onClose={onClose}
                    open={open}
                    sx={{
                        ".MuiPaper-root": {
                            backgroundColor: "rgb(224, 217, 211)",
                            padding: "15px 0px",
                        },
                        ".MuiDialogActions-root": {
                            padding: "0 24px",
                        },
                    }}
                >
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
                        <Image
                            src={xIcon}
                            width={20}
                            height={20}
                            alt={"close icon"}
                        />
                    </IconButton>
                    <DialogContent>
                        <Stack sx={{ marginTop: "10px", marginBottom: "20px" }}>
                            <Typography sx={{ marginBottom: "40px" }}>
                                Koeficient
                            </Typography>

                            <Slider
                                value={temporatyForm.coefficient}
                                step={0.1}
                                min={0.01}
                                max={3.99}
                                onChange={(
                                    e: Event,
                                    newValue: number | number[]
                                ) =>
                                    setTemporaryForm((prev) => ({
                                        ...prev,
                                        coefficient: newValue as number,
                                    }))
                                }
                            />
                        </Stack>

                        <Stack flexDirection="row" flexWrap="wrap" width="100%">
                            <Typography sx={{ marginBottom: "20px" }}>
                                Pravidlo
                            </Typography>
                            {map(rulesItems, (rule: Rule) => (
                                <Stack key={rule.code}>
                                    <Chip
                                        label={`${rule.code}:\u00A0${rule.text}`}
                                        onClick={() =>
                                            setTemporaryForm((prev) => ({
                                                ...prev,
                                                rule: rule.code,
                                            }))
                                        }
                                        selected={
                                            temporatyForm.rule === rule.code
                                        }
                                    />
                                </Stack>
                            ))}
                        </Stack>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onClose}>Zrušit</Button>
                        <Button onClick={handleSubmit}>Potvrdit</Button>
                    </DialogActions>
                </Dialog>
            )}
        </>
    );
});
