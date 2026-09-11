import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  textClassName?: string;
};

export default function BrandLogo({ className, textClassName }: BrandLogoProps) {
  return (
    <span className={cn("flex min-w-0 items-center gap-3", className)}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center" aria-hidden="true">
        <svg
          viewBox="0 0 64 64"
          className="h-10 w-10 drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="30" fill="hsl(var(--primary))" />
          <circle
            cx="32"
            cy="32"
            r="25.75"
            stroke="hsl(var(--secondary))"
            strokeWidth="2.5"
          />
          <path
            d="M19 42.25c4.1-1.95 8.2-1.95 13 0 4.8-1.95 8.9-1.95 13 0"
            stroke="hsl(var(--secondary))"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5 36.25c3.55-1.15 7.2-.8 11.5 1.1 4.3-1.9 7.95-2.25 11.5-1.1"
            stroke="hsl(var(--background))"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />
          <text
            x="32"
            y="31.5"
            textAnchor="middle"
            fill="hsl(var(--background))"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="17"
            fontWeight="700"
          >
            CA
          </text>
          <path
            d="M24 48h16"
            stroke="hsl(var(--secondary))"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <span className={cn("flex min-w-0 flex-col leading-none", textClassName)}>
        <span className="truncate font-serif text-base font-bold text-primary sm:text-lg">
          Dr. Cecilia Agbeh
        </span>
        <span className="mt-1 hidden truncate text-[0.67rem] font-semibold uppercase text-muted-foreground sm:block">
          Academic Leadership
        </span>
      </span>
    </span>
  );
}
