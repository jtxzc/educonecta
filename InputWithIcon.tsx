import { InputHTMLAttributes } from "react";
import { LucideIcon } from "lucide-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon;
}

export function InputWithIcon({ icon: Icon, ...props }: InputProps) {
  return (
    <div className="flex items-center gap-2 border rounded-xl px-4 py-2 w-full">
      <Icon className="w-5 h-5 text-gray-500" />
      <input
        className="w-full outline-none bg-transparent text-sm"
        {...props}
      />
    </div>
  );
}