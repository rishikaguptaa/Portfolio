/* eslint-disable @next/next/no-img-element */
import type { HTMLAttributes } from "react";

export function skillIcon(src: string, alt: string) {
  function SkillIcon({ className }: HTMLAttributes<HTMLImageElement>) {
    return <img src={src} alt={alt} className={className} />;
  }
  SkillIcon.displayName = alt;
  return SkillIcon;
}
