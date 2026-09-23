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
import { SlidersHorizontal, X, XCircle } from "lucide-react";
import { ReactNode } from "react";
import FilterGroup from "./filter-group";

type SheetFilterProp = {
  children: ReactNode;
};
export function SheetFilter({ children }: SheetFilterProp) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="p-5 rounded-4xl text-white bg-black hover:bg-black/80">
          <SlidersHorizontal />
          Bộ lọc
        </Button>
      </SheetTrigger>
      <div className="relative z-0">
        <SheetContent showCloseButton={false} side="bottom">
          <SheetTitle className="sr-only">Bộ lọc sản phẩm</SheetTitle>
          <SheetClose className="absolute z-100 left-1/2 -translate-x-1/2 -top-15">
            <div className="flex size-9 items-center justify-center rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
              <X size={18} className="text-gray-600" />
            </div>
          </SheetClose>
          <div className="flex h-[50dvh] overflow-auto gap-6 px-4 relative">
            <FilterGroup>{children}</FilterGroup>
          </div>
          <SheetFooter>
            <Button className="text-white" type="submit">
              Áp dụng
            </Button>
          </SheetFooter>
        </SheetContent>
      </div>
    </Sheet>
  );
}
