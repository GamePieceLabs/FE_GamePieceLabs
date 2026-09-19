"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TypeFilterProp } from "./type";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Checkbox } from "@/components/ui/checkbox";

export function TypeFilter({
  label,
  items,
  selectedValues,
  onValueChange,
  handleCheckboxChange,
}: TypeFilterProp) {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenChange = (nextChanges: boolean) => {
    setOpen(nextChanges);
  };

  return (
    <>
      {/* DESKTOP UI and STATE  */}
      <div className="hidden tablet:block">
        <Popover open={open} onOpenChange={handleOpenChange}>
          <PopoverTrigger asChild>
            <Button className="text-lg font-bold" variant="ghost">
              {label} type
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
          </PopoverTrigger>

          <PopoverContent className="w-full">
            <ToggleGroup
              variant="outline"
              type="multiple"
              value={selectedValues}
              onValueChange={onValueChange}
            >
              {items.map((item) => (
                <ToggleGroupItem
                  key={item.value}
                  value={item.value}
                  aria-label={`${item.name} (${item.count})`}
                  className="rounded-full border-none px-10 h-15 text-sm font-medium transition-colors data-[state=on]:bg-gray-200 data-[state=on]:text-black"
                >
                  <span>{item.name}</span>
                  <span className="ml-1 text-muted-foreground">
                    ({item.count})
                  </span>
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </PopoverContent>
        </Popover>
      </div>

      {/* MOBILE UI and STATE  */}
      <div className="block tablet:hidden">
        {items.map((item) => (
          <div key={item.value} className="flex items-center gap-2">
            <Checkbox
              id={`terms-checkbox-${item.value}`}
              name={`terms-checkbox-${item.value}`}
              checked={selectedValues.includes(item.value)}
              defaultChecked
              value={selectedValues}
              onCheckedChange={(checked) =>
                handleCheckboxChange?.(item.value, checked as boolean)
              }
            />
            <label
              htmlFor={`terms-checkbox-${item.value}`}
              className="cursor-pointer text-sm"
            >
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
