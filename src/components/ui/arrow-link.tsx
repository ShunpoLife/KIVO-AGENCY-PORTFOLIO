import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ArrowLink({ href, children, variant = "solid", className }: { href: string; children: React.ReactNode; variant?: "solid" | "ghost"; className?: string }) {
  return (
    <Link href={href} className={cn("arrow-link", variant === "ghost" && "arrow-link-ghost", className)}>
      <span>{children}</span><ArrowUpRight aria-hidden="true" size={18} />
    </Link>
  );
}
