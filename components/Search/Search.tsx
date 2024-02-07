import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

const Search: React.FC = ({ className }: { className?: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger title="Shorcut menu" className="hidden md:block">
        <SearchIcon className="cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <div className={cn("w-full bg-gray-200 rounded-md", className)}>
          <form>
            <div className="flex items-center justify-between h-12">
              <input
                type="text"
                placeholder="Search for products..."
                name="search"
                className="w-full h-full rounded-l-md focus:border-none focus:outline-none pl-5 bg-gray-100"
              />
              <button
                type="submit"
                className="group px-5 hover:bg-orange-600 h-full transition-all rounded-r-md"
              >
                <SearchIcon
                  className="text-orange-600 group-hover:text-white "
                  size={20}
                />
              </button>
            </div>
          </form>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Search;
