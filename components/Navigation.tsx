"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  { path: "/", label: "Home" },
  { path: "/start", label: "Start" },
  { path: "/register", label: "Register" },
  { path: "/baseline", label: "Baseline" },
  { path: "/plan", label: "Plan" },
  { path: "/videos", label: "Videos" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-foreground">
              Healing
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === route.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
