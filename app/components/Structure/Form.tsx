import { Stack, Typography } from "@mui/material";
import { Chip } from "../common/Chip";
import { Dispatch, SetStateAction, memo, useCallback, useState } from "react";
import { Button } from "../common/Button";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent } from "@mui/material";
import { IconButton } from "@mui/material";
import Image from "next/image";
import xIcon from "../../../public/xmark-solid.svg";
import { useSwitch } from "../../hooks/useSwitch";
import { Slider } from "../common/Slider";
import { map } from "lodash";
import { rulesItems } from "../../lib/formItems";
import { Rule } from "../../types/Rule";

type InputLabelProps = {
    display: boolean;
    form: { coefficient: number; rule: number };
    setForm?: Dispatch<
        SetStateAction<{
            coefficient: number;
            rule: number;
        }>
    >;
};

export const StructureForm = memo(function InputsLabel({
    display,
    form,
    setForm,
}: InputLabelProps) {
    const [temporatyForm, setTemporaryForm] = useState({
        coefficient: form.coefficient,
        rule: form.rule,
    });
    const [open, onOpen, onClose] = useSwitch(false);

    const handleSubmit = useCallback(() => {
        setForm && setForm(temporatyForm);
        onClose();
    }, [temporatyForm, setForm, onClose]);

    return (
        display && (
            <>
                <Stack
                    onClick={onOpen}
                    sx={{
                        position: "absolute",
                        right: "0",
                        top: "-28px",
                        float: "right",
                        padding: "5px 10px",
                        fontSize: "12px",
                        borderTopLeftRadius: "15px",
                        borderTopRightRadius: "15px",
                        color: "white",
                        backgroundColor: "black",
                        cursor: "pointer",
                    }}
                >
                    <span>
                        Koeficient: {form.coefficient} Pravidlo: {form.rule}
                    </span>
                </Stack>
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
                            <Stack
                                sx={{ marginTop: "10px", marginBottom: "20px" }}
                            >
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

                            <Stack
                                flexDirection="row"
                                flexWrap="wrap"
                                width="100%"
                            >
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
                            <Button onClick={handleSubmit}>Potvrdit</Button>
                            <Button onClick={onClose}>Zavřít</Button>
                        </DialogActions>
                    </Dialog>
                )}
            </>
        )
    );
});
