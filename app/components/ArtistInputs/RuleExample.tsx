import { Stack, Typography } from "@mui/material";
import { Rule } from "../../types/Rule";
import { Structure } from "../Structure";

type RuleExampleProps = {
    rule: Rule;
    color: string;
};

export const RuleExample = ({ rule, color }: RuleExampleProps) => {
    return (
        <Stack
            sx={{
                ".element-10": {
                    outline: `4px solid ${color}`,
                    zIndex: 100,
                },
                marginBottom: "30px",
            }}
        >
            <Typography
                variant="h6"
                component="div"
                sx={{
                    fontWeight: "400",
                    fontSize: "14px",
                }}
            >
                {rule.code}:
            </Typography>
            <Stack
                flexDirection="row"
                alignItems="center"
                sx={{ marginBottom: "30px" }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        fontWeight: "400",
                        fontSize: "16px",
                    }}
                >
                    {rule.text}
                </Typography>
                {/* <div style={{ width: "30%" }}>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => refresh()}
                    >
                        <Image
                            src={rotateIcon}
                            width={20}
                            height={20}
                            alt={"rotate icon"}
                        />
                    </IconButton>
                </div> */}
            </Stack>

            <Structure
                grid={rule.example}
                cellType="image"
                sx={{ width: "60%" }}
                key={rule.code}
            />
        </Stack>
    );
};
