import React, { Children } from "react";
import { isValidElement } from "react";
import { FilterProp } from "./type";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FilterGroupProp = {
  children: React.ReactNode;
};

const mobileFiltersTitle = {
  switch: "Tình trạng hàng",
  type: "Loại sản phẩm",
  price: "Giá",
  sort: "Bộ lọc",
};

export default function FilterGroup({ children }: FilterGroupProp) {
  return (
    <Accordion type="multiple">
      {React.Children.map(children, (child) => {
        // Dùng thằng này để tiếp tục lấy props từ FilterGroup
        if (!isValidElement<FilterProp>(child)) {
          return child;
        }
        const { variant } = child.props;
        return (
          <AccordionItem key={variant} value={variant}>
            <AccordionTrigger className="font-bold text-xl">
              {mobileFiltersTitle[variant]}
            </AccordionTrigger>
            <AccordionContent className="mt-2">{child}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
