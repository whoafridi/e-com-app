import React from "react";
import { Input } from "./input";
import { Search } from "lucide-react";

type IFilterProps = {
  table: any;
  filterItem?: string;
  filterPlaceHolder?: string;
};

const FilterInput = ({
  table,
  filterItem,
  filterPlaceHolder,
}: IFilterProps) => {
  return (
    <div className="relative md:grow-0">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder={filterPlaceHolder}
        value={(table.getColumn(filterItem)?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn(filterItem)?.setFilterValue(event.target.value)
        }
        className="max-w-sm w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
      />
    </div>
  );
};

export default FilterInput;
