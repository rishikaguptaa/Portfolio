import { skillIcon } from "@/components/skill-icon";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import type { ComponentType } from "react";

const JavaScript = skillIcon("/icons/javascript.png", "JavaScript");
const DotNet = skillIcon("/icons/dotnet.png", "ASP.NET Core");
const Bootstrap = skillIcon("/icons/bootstrap.png", "Bootstrap");
const Gemini = skillIcon("/icons/gemini.png", "Gemini");
const MySql = skillIcon("/icons/mysql.png", "MySQL");
const Sql = skillIcon("/icons/sql.png", "SQL");
const Prisma = skillIcon("/icons/prisma.png", "Prisma");
const GitHub = skillIcon("/icons/github.png", "GitHub");
const Postman = skillIcon("/icons/postman.png", "Postman");
const TensorFlow = skillIcon("/icons/tensorflow.png", "TensorFlow");
const AgenticAi = skillIcon("/icons/agentic-ai.png", "NLP");
const MetaMask = skillIcon("/icons/metamask.png", "MetaMask");
const Aptos = skillIcon("/icons/aptos.jpg", "Aptos");

type TechIcon = ComponentType<{ className?: string }>;

const MATCHERS: { test: (name: string) => boolean; icon: TechIcon }[] = [
  { test: (n) => n.includes("asp.net") || n.includes(".net"), icon: DotNet },
  { test: (n) => n.includes("entity"), icon: Prisma },
  { test: (n) => n.includes("rest") || n.includes("api"), icon: Postman },
  { test: (n) => n.includes("mysql"), icon: MySql },
  { test: (n) => n.includes("bootstrap"), icon: Bootstrap },
  { test: (n) => n.includes("github"), icon: GitHub },
  { test: (n) => n.includes("gemini"), icon: Gemini },
  { test: (n) => n.includes("metamask"), icon: MetaMask },
  { test: (n) => n.includes("aptos"), icon: Aptos },
  { test: (n) => n.includes("typescript"), icon: Typescript },
  { test: (n) => n.includes("javascript"), icon: JavaScript },
  { test: (n) => n.includes("react"), icon: ReactLight },
  { test: (n) => n.includes("sql"), icon: Sql },
  { test: (n) => n.includes("machine") || n.includes("ml"), icon: TensorFlow },
  { test: (n) => n.includes("nlp"), icon: AgenticAi },
];

export function getTechIcon(name: string): TechIcon | null {
  const normalized = name.toLowerCase();
  return MATCHERS.find(({ test }) => test(normalized))?.icon ?? null;
}
