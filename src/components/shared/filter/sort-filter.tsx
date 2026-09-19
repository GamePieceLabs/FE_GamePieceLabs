"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SortFilterProp } from "./type";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function SortFilter({
  label,
  items,
  selectedValue,
  handleSelectChange,
}: SortFilterProp) {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenChange = (nextChanges: boolean) => {
    setOpen(nextChanges);
  };

  return (
    <>
      {/*  DESKTOP UI and STATE */}
      <div className="hidden tablet:block">
        <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
          <DropdownMenuTrigger asChild>
            <Button className="text-lg font-bold" variant="ghost">
              {label}
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-zinc-200">
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "size-4 transition-transform duration-300",
                    open && "rotate-180",
                  )}
                />
              </span>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="start"
            className="p-1.5 mr-15 max-h-[500px] w-48"
          >
            {items.map((item) => {
              const isSelected = selectedValue === item.value;

              return (
                <div
                  key={item.value}
                  className="flex items-center gap-2.5 px-2 py-1.5 rounded-sm hover:accent hover:bg-accent hover:text-accent-foreground cursor-pointer select-none"
                >
                  <DropdownMenuItem
                    key={item.value}
                    onClick={() => handleSelectChange(item.value)}
                    className={`${isSelected ? "font-bold text-black" : "text-zinc-600 font-normal"}`}
                  >
                    {item.name}
                  </DropdownMenuItem>
                </div>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/*  MOBILE UI and STATE */}
      <div className="block tablet:hidden">
        <div className="flex flex-col gap-3">
          {items.map((item) => {
            const isSelected = selectedValue === item.value;
            const itemId = `mobile-${item.value}`;

            return (
              <div key={item.value} className="flex items-center gap-2.5">
                <Checkbox
                  id={itemId}
                  checked={isSelected}
                  onCheckedChange={() => handleSelectChange(item.value)}
                />
                <Label
                  htmlFor={itemId}
                  className="cursor-pointer text-sm font-medium text-zinc-700"
                >
                  {item.name}
                </Label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
