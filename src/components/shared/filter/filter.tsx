import PriceFilter from "./price-filter";
import { SortFilter } from "./sort-filter";
import SwitchFilter from "./switch-filter";
import { FilterProp } from "./type";
import { TypeFilter } from "./type-filter";

export default function Filter(props: FilterProp) {
  switch (props.variant) {
    case "switch":
      return (
        <SwitchFilter
          label={props.label}
          checked={props.checked}
          onCheckedChange={props.onCheckedChange}
        />
      );

    case "type":
      return (
        <TypeFilter
          label={props.label}
          items={props.items}
          selectedValues={props.selectedValues}
          onValueChange={props.onValueChange}
          handleCheckboxChange={props.handleCheckboxChange}
        />
      );

    case "price":
      return (
        <PriceFilter
          label={props.label}
          min={props.min}
          max={props.max}
          step={props.step}
          sliderPrice={props.sliderPrice}
          handleMinInput={props.handleMinInput}
          handleMaxInput={props.handleMaxInput}
          handleSliderChange={props.handleSliderChange}
        />
      );
    case "sort":
      return (
        <SortFilter
          label={props.label}
          items={props.items}
          selectedValue={props.selectedValue}
          handleSelectChange={props.handleSelectChange}
        />
      );
  }
}
