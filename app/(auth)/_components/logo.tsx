import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const Logo = () => {
  return (
    <div className=" flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full p-2">
        <Image src="/smile.svg" alt="streamo" height="90" width="90" />
      </div>
      <div
        className={cn(
          " flex flex-col items-center justify-center ",
          font.className
        )}
      >
        <p className={cn("text-xl font-semibold", font.className)}>Streamo</p>
        <p className="text-sm text-muted-foreground">Game onn</p>
      </div>
    </div>
  );
};
