import { MouseEventHandler } from "react";

/* Custom Button Props Types */
export interface CustomButtomProps{
    title: string;
    btnType?: "submit" | "reset" | "button" | undefined,
    containerStyles: string;

    handleClick?: MouseEventHandler<HTMLButtonElement>;
}