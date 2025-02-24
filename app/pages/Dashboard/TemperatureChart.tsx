import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const chartData = [
  { date: "2024-04-01", maxTemp: 16, minTemp: 8 },
  { date: "2024-04-02", maxTemp: 17, minTemp: 8 },
  { date: "2024-04-03", maxTemp: 17, minTemp: 7 },
  { date: "2024-04-04", maxTemp: 20, minTemp: 9 },
  { date: "2024-04-05", maxTemp: 18, minTemp: 7 },
  { date: "2024-04-06", maxTemp: 19, minTemp: 11 },
  { date: "2024-04-07", maxTemp: 19, minTemp: 11 },
  { date: "2024-04-08", maxTemp: 17, minTemp: 8 },
  { date: "2024-04-09", maxTemp: 18, minTemp: 8 },
  { date: "2024-04-10", maxTemp: 17, minTemp: 7 },
  { date: "2024-04-11", maxTemp: 25, minTemp: 12 },
  { date: "2024-04-12", maxTemp: 19, minTemp: 12 },
  { date: "2024-04-13", maxTemp: 19, minTemp: 12 },
  { date: "2024-04-14", maxTemp: 23, minTemp: 13 },
  { date: "2024-04-15", maxTemp: 19, minTemp: 10 },
  { date: "2024-04-16", maxTemp: 21, minTemp: 11 },
  { date: "2024-04-17", maxTemp: 21, minTemp: 11 },
  { date: "2024-04-18", maxTemp: 22, minTemp: 9 },
  { date: "2024-04-19", maxTemp: 22, minTemp: 8 },
  { date: "2024-04-20", maxTemp: 25, minTemp: 13 },
  { date: "2024-04-21", maxTemp: 20, minTemp: 11 },
  { date: "2024-04-22", maxTemp: 20, minTemp: 11 },
  { date: "2024-04-23", maxTemp: 21, minTemp: 12 },
  { date: "2024-04-24", maxTemp: 22, minTemp: 11 },
  { date: "2024-04-25", maxTemp: 22, minTemp: 12 },
  { date: "2024-04-26", maxTemp: 22, minTemp: 11 },
  { date: "2024-04-27", maxTemp: 23, minTemp: 13 },
  { date: "2024-04-28", maxTemp: 24, minTemp: 14 },
  { date: "2024-04-29", maxTemp: 21, minTemp: 11 },
  { date: "2024-04-30", maxTemp: 21, minTemp: 11 },
  { date: "2024-05-01", maxTemp: 26, minTemp: 14 },
  { date: "2024-05-02", maxTemp: 22, minTemp: 11 },
  { date: "2024-05-03", maxTemp: 23, minTemp: 12 },
  { date: "2024-05-04", maxTemp: 23, minTemp: 11 },
  { date: "2024-05-05", maxTemp: 23, minTemp: 11 },
  { date: "2024-05-06", maxTemp: 24, minTemp: 13 },
  { date: "2024-05-07", maxTemp: 25, minTemp: 13 },
  { date: "2024-05-08", maxTemp: 25, minTemp: 14 },
  { date: "2024-05-09", maxTemp: 26, minTemp: 15 },
  { date: "2024-05-10", maxTemp: 27, minTemp: 13 },
  { date: "2024-05-11", maxTemp: 26, minTemp: 15 },
  { date: "2024-05-12", maxTemp: 23, minTemp: 11 },
  { date: "2024-05-13", maxTemp: 23, minTemp: 11 },
  { date: "2024-05-14", maxTemp: 25, minTemp: 12 },
  { date: "2024-05-15", maxTemp: 24, minTemp: 15 },
  { date: "2024-05-16", maxTemp: 25, minTemp: 14 },
  { date: "2024-05-17", maxTemp: 26, minTemp: 15 },
  { date: "2024-05-18", maxTemp: 24, minTemp: 15 },
  { date: "2024-05-19", maxTemp: 24, minTemp: 14 },
  { date: "2024-05-20", maxTemp: 25, minTemp: 13 },
  { date: "2024-05-21", maxTemp: 25, minTemp: 15 },
  { date: "2024-05-22", maxTemp: 26, minTemp: 15 },
  { date: "2024-05-23", maxTemp: 27, minTemp: 15 },
  { date: "2024-05-24", maxTemp: 28, minTemp: 16 },
  { date: "2024-05-25", maxTemp: 26, minTemp: 16 },
  { date: "2024-05-26", maxTemp: 24, minTemp: 14 },
  { date: "2024-05-27", maxTemp: 23, minTemp: 14 },
  { date: "2024-05-28", maxTemp: 23, minTemp: 14 },
  { date: "2024-05-29", maxTemp: 24, minTemp: 13 },
  { date: "2024-05-30", maxTemp: 26, minTemp: 16 },
  { date: "2024-05-31", maxTemp: 28, minTemp: 17 },
  { date: "2024-06-01", maxTemp: 29, minTemp: 16 },
  { date: "2024-06-02", maxTemp: 27, minTemp: 16 },
  { date: "2024-06-03", maxTemp: 26, minTemp: 16 },
  { date: "2024-06-04", maxTemp: 25, minTemp: 15 },
  { date: "2024-06-05", maxTemp: 27, minTemp: 15 },
  { date: "2024-06-06", maxTemp: 26, minTemp: 14 },
  { date: "2024-06-07", maxTemp: 26, minTemp: 15 },
  { date: "2024-06-08", maxTemp: 27, minTemp: 16 },
  { date: "2024-06-09", maxTemp: 31, minTemp: 16 },
  { date: "2024-06-10", maxTemp: 30, minTemp: 17 },
  { date: "2024-06-11", maxTemp: 33, minTemp: 18 },
  { date: "2024-06-12", maxTemp: 33, minTemp: 18 },
  { date: "2024-06-13", maxTemp: 32, minTemp: 18 },
  { date: "2024-06-14", maxTemp: 27, minTemp: 17 },
  { date: "2024-06-15", maxTemp: 25, minTemp: 17 },
  { date: "2024-06-16", maxTemp: 28, minTemp: 17 },
  { date: "2024-06-17", maxTemp: 28, minTemp: 17 },
  { date: "2024-06-18", maxTemp: 29, minTemp: 17 },
  { date: "2024-06-19", maxTemp: 30, minTemp: 18 },
  { date: "2024-06-20", maxTemp: 31, minTemp: 17 },
  { date: "2024-06-21", maxTemp: 25, minTemp: 15 },
  { date: "2024-06-22", maxTemp: 26, minTemp: 16 },
  { date: "2024-06-23", maxTemp: 29, minTemp: 17 },
  { date: "2024-06-24", maxTemp: 27, minTemp: 16 },
  { date: "2024-06-25", maxTemp: 29, minTemp: 18 },
  { date: "2024-06-26", maxTemp: 30, minTemp: 18 },
  { date: "2024-06-27", maxTemp: 31, minTemp: 19 },
  { date: "2024-06-28", maxTemp: 31, minTemp: 18 },
  { date: "2024-06-29", maxTemp: 31, minTemp: 18 },
  { date: "2024-06-30", maxTemp: 32, minTemp: 19 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  maxTemp: {
    label: "maxTemp",
    color: "hsl(var(--chart-1))",
  },
  minTemp: {
    label: "minTemp",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function TemperatureChart() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Temperature</CardTitle>
          <CardDescription>
            Showing temperatures for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillmaxTemp" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-maxTemp)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-maxTemp)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillminTemp" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-minTemp)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-minTemp)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="minTemp"
              type="natural"
              fill="url(#fillminTemp)"
              stroke="var(--color-minTemp)"
              stackId="a"
            />
            <Area
              dataKey="maxTemp"
              type="natural"
              fill="url(#fillmaxTemp)"
              stroke="var(--color-maxTemp)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default TemperatureChart;
