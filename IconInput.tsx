import { Input } from "@/components/ui/input";
import { ReactNode } from "react";

export function IconInput({ icon, ...props }: { icon: ReactNode } & React.ComponentProps<typeof Input>) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>
      <Input {...props} className="pl-10" />
    </div>
  );
}