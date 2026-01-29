import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

export function Dropdown({ className }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`flex justify-center items-center ${className || ""}`}
        >
          Categories
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to="/beauty">Beauty</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/fragrances">Fragrances</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/groceries">Groceries</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/furniture">Furniture</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
