import raw from "./containers.json";
import type { ChartListData } from "../../../shared/src/components/chart-list/utils";

const hasSource = (s: string | null | undefined) =>
  !!s && s !== "null" && s !== "UNKNOWNSOURCE";

const data: ChartListData = {
  totalCount: raw.containers.length,
  trains: [
    {
      name: "containers",
      charts: raw.containers.map((c) => ({
        name: c.name,
        version: c.version,
        description: `${c.license}${hasSource(c.source) ? ` — ${c.source}` : ""}`,
        link: hasSource(c.source) ? c.source : `/containers/${c.name}/`,
        icon: "/svg/logo.svg",
      })),
    },
  ],
};

export default data;
