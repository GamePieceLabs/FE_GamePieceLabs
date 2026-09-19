import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import { ReactNode } from "react";
import FilterGroup from "./filter-group";

type SheetFilterProp = {
  children: ReactNode;
};
export function SheetFilter({ children }: SheetFilterProp) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="p-5 rounded-4xl bg-black hover:bg-black/70">
          <SlidersHorizontal /> Filter and sort
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[70dvh]">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <div className="flex h-[50vh] overflow-auto gap-6 px-4">
          <FilterGroup>{children}</FilterGroup>
        </div>
        <SheetFooter>
          <Button type="submit">Apply</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
