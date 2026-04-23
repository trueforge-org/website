export type ChartListChart = {
  name: string;
  description?: string;
  link?: string;
  version?: string;
  icon?: string;
};

export type ChartListTrain = {
  name: string;
  charts: ChartListChart[];
};

export type ChartListData = {
  totalCount?: number;
  trains: ChartListTrain[];
};

const resolveData = (data?: ChartListData): ChartListData => {
  if (!data) {
    throw new Error(
      "chart-list utils: a `data` prop is required (no default dataset is bundled in shared)."
    );
  }
  return data;
};

export const normalizeTrainName = (train: string) => {
  return train.toLowerCase();
};

export const titleCase = (str: string) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const getTrains = (data?: ChartListData) => {
  return resolveData(data).trains.map((t) => t.name);
};

export const getChartsFromTrain = (train: string, data?: ChartListData) => {
  const found = resolveData(data).trains.find((t) => t.name === train);
  return found ? found.charts : [];
};

export const getChartDescription = (chart: string, data?: ChartListData) => {
  for (const t of resolveData(data).trains) {
    const c = t.charts.find((c) => c.name === chart);
    if (c) return c.description;
  }
  return undefined;
};

export const getChartCountFromTrain = (train: string, data?: ChartListData) => {
  return getChartsFromTrain(train, data).length;
};

export const getChartCount = (data?: ChartListData) => {
  const d = resolveData(data);
  if (typeof d.totalCount === "number") return d.totalCount;
  let count = 0;
  getTrains(d).forEach((train) => (count += getChartCountFromTrain(train, d)));
  return count;
};
