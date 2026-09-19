export type FilterProp = FilterVariantProps;

export type FilterVariantProps =
  | ({ variant: "switch" } & SwitchFilterProp)
  | ({ variant: "type" } & TypeFilterProp)
  | ({ variant: "price" } & PriceFilterProp)
  | ({ variant: "sort" } & SortFilterProp);

export interface FilterItem {
  name: string;
  value: string;
  count?: number;
}

// switch FilterProp
export interface SwitchFilterProp {
  label?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

// switch FilterType
export interface TypeFilterProp {
  label?: string;
  items: FilterItem[];
  selectedValues: string[];
  onValueChange?: (value: string[]) => void;
  handleCheckboxChange?: (selectedValue: string, checked: boolean) => void;
}

// price filter
export interface PriceFilterProp {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  sliderPrice: number[];
  handleMinInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMaxInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSliderChange: (price: number[]) => void;
}

// sort filter
export interface SortFilterProp {
  label?: string;
  items: FilterItem[];
  selectedValue?: string;
  handleSelectChange: (item: string) => void;
}
