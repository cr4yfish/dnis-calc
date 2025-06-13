"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { formatBinary, formatHex} from "@/utils/helpers";

type Cat = "dec" | "bin" | "hex";

type CalcFieldProps = {
    setDec: (value: number | undefined) => void;
    setBin: (value: string | undefined) => void;
    setHex: (value: string | undefined) => void;
    label: string;
    value?: string;
    type: Cat;
}

export const CalcField = (props: CalcFieldProps) => {

    return (
        <div className="w-full flex flex-col px-4 items-center justify-center max-w-xl">
            <Label className="text-lg w-full text-start">{props.label}</Label>
            <Textarea 
                className="w-full resize-none"
                value={props.value}
                onChange={(e) => {
                    let value = e.target.value;

                    if (!value) {
                        props.setDec(undefined);
                        props.setBin(undefined);
                        props.setHex(undefined);
                        return;
                    }

                    switch (props.type) {
                        case "dec":
                                const decValue = parseInt(value, 10);
                                props.setDec(parseInt(value, 10));
                                props.setBin(formatBinary(decValue.toString(2)));
                                props.setHex(formatHex(decValue.toString(16).toUpperCase()));
                            break;
                        case "bin":
                                value = value.replace(/[^01]/g, ""); // Remove non-binary characters

                                props.setDec(parseInt(value, 2));
                                props.setBin(formatBinary(value));
                                props.setHex(formatHex(parseInt(value, 2).toString(16).toUpperCase()));
                            
                            break;
                        case "hex":
                                props.setDec(parseInt(value, 16));
                                props.setBin(formatBinary(parseInt(value, 16).toString(2)));
                                props.setHex(value);
                            break;

                    }

                }}
                placeholder={props.label}
            />

        </div>
    )
}

export const Calculator = () => {
    const [dec, setDec] = useState<number | undefined>(undefined);
    const [bin, setBin] = useState<string | undefined>(undefined);
    const [hex, setHex] = useState<string | undefined>(undefined);

    return (
        <>
        <div className="flex flex-col items-center justify-center h-screen w-full">

            <h1 className="text-2xl font-bold mb-4">Realtime Number Converter</h1>
            <div className="flex flex-col items-center justify-center gap-4 mb-4 w-full">
                <CalcField 
                    label="Decimal" 
                    type="dec"
                    value={dec !== undefined ? dec.toString() : ""}
                    setDec={setDec} 
                    setBin={setBin} 
                    setHex={setHex} 
                />

                <CalcField 
                    label="Hex"
                    type="hex" 
                    value={hex !== undefined ? hex.toString() : ""}
                    setDec={setDec} 
                    setBin={setBin} 
                    setHex={setHex} 
                />

                <CalcField 
                    label="Binary"
                    type="bin"
                    value={bin !== undefined ? bin.toString() : ""} 
                    setDec={setDec} 
                    setBin={setBin} 
                    setHex={setHex} 
                />

            </div>
        </div>
        </>
    )
}