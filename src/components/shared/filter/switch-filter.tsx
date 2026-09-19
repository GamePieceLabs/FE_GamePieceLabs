import { Switch } from "@/components/ui/switch";
import { SwitchFilterProp } from "./type";
import { Badge } from "@/components/ui/badge";
import { XIcon } from "lucide-react";

export default function SwitchFilter({
  checked,
  onCheckedChange,
  label,
}: SwitchFilterProp) {
  const clearFilter = () => {
    onCheckedChange?.(false);
  };
  return (
    <>
      {/* DESKTOP UI and State */}
      <div className="flex items-center gap-3 mb-2">
        {/* Label + Switch */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">{label}</span>
          <Switch
            size="default"
            checked={checked}
            onCheckedChange={(v) => onCheckedChange?.(v)}
          />
        </div>

        {/* Badge hiển thị kế bên trên cùng 1 hàng */}
        {checked && (
          <Badge
            className="inline-flex items-center gap-2 px-3 py-1 text-sm cursor-pointer"
            variant="outline"
          >
            <span>In stock</span>
            <XIcon size="1em" onClick={clearFilter} className="shrink-0" />
          </Badge>
        )}
      </div>
    </>
  );
}
