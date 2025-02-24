import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
const chartData1 = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];
const chartData = [
  { time: "09:00", drop: 0.45 },
  { time: "10:00", drop: 0.5 },
  { time: "11:00", drop: 0.6 },
  { time: "12:00", drop: 0.7 },
  { time: "13:00", drop: 0.8 },
  { time: "14:00", drop: 0.9 },
  { time: "15:00", drop: 0.7 },
  { time: "16:00", drop: 0.7 },
  { time: "17:00", drop: 0.5 },
  { time: "18:00", drop: 0.5 },
  { time: "19:00", drop: 0.4 },
  { time: "20:00", drop: 0.3 },
  { time: "21:00", drop: 0.9 },
  { time: "22:00", drop: 0.6 },
  { time: "23:00", drop: 0.5 },
];

const chartConfig = {
  drop: {
    label: "Rain Drop",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

function RainDrops() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rain Drop</CardTitle>
        <CardDescription>Monday, 30 June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              tickMargin={10}
              minTickGap={32}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="drop" fill="var(--color-drop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing rain falls for the next 15 hours
        </div>
      </CardFooter>
    </Card>
  );
}

export default RainDrops;
