"use client";
import React from "react";
import { Button } from "../ui/moving-border";

export function Border() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-[#ff7b6f] dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Borders are cool
      </Button>
    </div>
  );
}
