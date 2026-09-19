"use client";
import { Slider } from "@/components/ui/slider";
import { PriceFilterProp } from "./type";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function PriceFilter({
  label,
  min = 1000000,
  max = 5000000,
  step = 50000,
  sliderPrice,
  handleMinInput,
  handleMaxInput,
  handleSliderChange,
}: PriceFilterProp) {
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

          <PopoverContent className="w-2xl px-5 py-6">
            <div className="flex">
              <Input
                type="number"
                className="flex-1/4 rounded-md border-2 border-black focus-visible:border-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="VND ₫"
                min={0}
                max={max}
                step={step}
                value={sliderPrice?.[0]}
                onChange={handleMinInput}
              />
              <Slider
                defaultValue={[min, max]}
                min={min}
                max={max}
                value={sliderPrice}
                step={step}
                minStepsBetweenThumbs={1}
                className="w-full mx-5"
                onValueChange={(price) => handleSliderChange(price)}
              />
              <Input
                type="number"
                className="flex-1/4 rounded-md border-2 border-black focus-visible:border-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="VND ₫"
                min={0}
                max={max}
                step={step}
                value={sliderPrice?.[1]}
                onChange={handleMaxInput}
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* MOBILE UI and STATE */}
      <div className="flex flex-col gap-4 tablet:hidden w-full">
        {/* Thanh Slider đặt trên cùng */}
        <Slider
          defaultValue={[min, max]}
          min={min}
          max={max}
          value={sliderPrice}
          step={step}
          minStepsBetweenThumbs={1}
          className="w-full px-2"
          onValueChange={(price) => handleSliderChange(price)}
        />

        {/* 2 ô Input Min - Max nằm song song phía dưới */}
        <div className="flex items-center gap-3">
          <Input
            type="number"
            className="flex-1 rounded-md border-2 border-black focus-visible:border-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="VND ₫"
            min={0}
            max={max}
            step={step}
            value={sliderPrice?.[0]}
            onChange={handleMinInput}
          />
          <span className="text-gray-500 font-medium">-</span>
          <Input
            type="number"
            className="flex-1 rounded-md border-2 border-black focus-visible:border-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="VND ₫"
            min={0}
            max={max}
            step={step}
            value={sliderPrice?.[1]}
            onChange={handleMaxInput}
          />
        </div>
      </div>
    </>
  );
}
