import React from 'react';
import { Input } from './input';

type IFilterProps = {
    table: any;
    filterItem?: string;
    filterPlaceHolder?: string;
};

const FilterInput = ({ table, filterItem, filterPlaceHolder }: IFilterProps) => {
    return (
        <div>
            <Input
                placeholder={filterPlaceHolder}
                value={(table.getColumn(filterItem)?.getFilterValue() as string) ?? ""}
                onChange={(event) =>
                    table.getColumn(filterItem)?.setFilterValue(event.target.value)
                }
                className="max-w-sm"
            />
        </div>
    );
};

export default FilterInput;