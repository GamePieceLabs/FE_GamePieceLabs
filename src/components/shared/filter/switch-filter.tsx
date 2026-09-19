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
      <div className="flex items-center gap-x-2 mb-2">
        <span className="font-bold text-lg">{label}</span>
        <Switch
          size="default"
          checked={checked}
          onCheckedChange={(v) => onCheckedChange?.(v)}
        />
      </div>

      {/* DƯỚI MOBILE ẨN */}
      {checked ? (
        <Badge
          className="max-mobile:hidden inline-flex items-center gap-2 px-8 py-5 text-lg -ml-2 cursor-pointer"
          variant="outline"
        >
          <span>In stock</span>
          <XIcon size="1em" onClick={clearFilter} className="shrink-0" />
        </Badge>
      ) : null}
    </>
  );
}
