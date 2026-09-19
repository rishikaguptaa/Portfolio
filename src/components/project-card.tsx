"use client";

import { cn } from "@/lib/utils";
import { getTechIcon } from "@/lib/tech-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  className?: string;
}

export function ProjectCard({
  title,
  description,
  dates,
  tags,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl p-4 gap-3",
        className
      )}
    >
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-sm leading-snug">{title}</h3>
        <time className="text-xs text-muted-foreground">{dates}</time>
      </div>
      <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
        <Markdown>{description}</Markdown>
      </div>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {tags.map((tag) => {
            const Icon = getTechIcon(tag);
            return (
              <Tooltip key={tag}>
                <TooltipTrigger asChild>
                  <span className="size-7 rounded-lg border border-border bg-background flex items-center justify-center">
                    {Icon ? (
                      <Icon className="size-4 rounded-sm overflow-hidden object-contain" />
                    ) : (
                      <span className="text-[10px] font-semibold leading-none">
                        {tag.charAt(0)}
                      </span>
                    )}
                  </span>
                </TooltipTrigger>
                <TooltipContent side="top">{tag}</TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      )}
    </div>
  );
}
