/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";

const ACHIEVEMENT_GRADIENT =
  "linear-gradient(180deg, #020024 0%, #090979 35%, #00D4FF 100%)";

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-[#090979] via-95% to-transparent" />
            <div
              className="z-10 rounded-xl px-4 py-1 border-0"
              style={{ background: ACHIEVEMENT_GRADIENT }}
            >
              <span className="text-white text-sm font-medium">Achievements</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-[#00D4FF] via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-black dark:text-white">
              Wins and certifications
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              A few highlights from hackathons, academics, and professional certifications along the way.
            </p>
          </div>
        </div>
        <div
          className="rounded-2xl overflow-hidden [&_[data-timeline-line]]:bg-white/40"
          style={{ background: ACHIEVEMENT_GRADIENT }}
        >
          <Timeline>
            {DATA.hackathons.map((hackathon) => (
              <TimelineItem key={hackathon.title + hackathon.dates} className="w-full flex items-start justify-between gap-10">
                <TimelineConnectItem className="flex items-start justify-center">
                  {hackathon.image ? (
                    <img
                      src={hackathon.image}
                      alt={hackathon.title}
                      className="size-10 bg-white z-10 shrink-0 overflow-hidden p-0 border border-white/40 rounded-full shadow ring-2 ring-white/30 object-cover flex-none"
                    />
                  ) : (
                    <div className="size-10 bg-white/15 z-10 shrink-0 overflow-hidden p-1 border border-white/40 rounded-full shadow ring-2 ring-white/30 flex-none" />
                  )}
                </TimelineConnectItem>
                <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                  {hackathon.dates && (
                    <time className="text-xs text-white/70">{hackathon.dates}</time>
                  )}
                  {hackathon.title && (
                    <h3 className="font-semibold leading-none text-white">{hackathon.title}</h3>
                  )}
                  {hackathon.location && (
                    <p className="text-sm text-white/80">{hackathon.location}</p>
                  )}
                  {hackathon.description && (
                    <p className="text-sm text-white/80 leading-relaxed wrap-break-word">
                      {hackathon.description}
                    </p>
                  )}
                  {hackathon.links && hackathon.links.length > 0 && (
                    <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                      {hackathon.links.map((link, idx) => (
                        <Link
                          href={link.href}
                          key={idx}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Badge className="flex items-center gap-1.5 text-xs bg-white text-black">
                            {link.icon}
                            {link.title}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
}
