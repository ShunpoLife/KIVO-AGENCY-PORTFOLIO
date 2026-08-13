import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className, showWord = true }: { className?: string; showWord?: boolean }) {
  return (
    <span className={cn("brand-logo", className)}>
      <Image src="/brand/kivo-mark.png" alt="" width={42} height={42} priority className="brand-mark" />
      {showWord && <span>KIVO</span>}
    </span>
  );
}
