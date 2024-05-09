"use client";
import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
type IOption = {
    value: string;
    label: string;
};

type ISelect = {
    options: IOption[];
    placeholder: string;
    label: string;
};

const ECSelect = ({ options, placeholder, label }: ISelect) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event: string) => {
        setSelectedOption(event);
    };

    console.log("selected options 🚀", selectedOption);

    return (
        <Select onValueChange={handleOptionChange} value={selectedOption}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{label}</SelectLabel>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default ECSelect;
