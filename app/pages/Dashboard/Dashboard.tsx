import * as React from "react";
import TemperatureChart from "./TemperatureChart";
import TemperaturePerHour from "./TemperaturePerHour";
import { CloudLightning } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CurrentWeather from "./CurrentWeather";
import AllergyOutlook from "./AllergyOutlook";
import RainDrops from "./RainDrops";

type WeatherType =
  | "storm"
  | "cloudy"
  | "rainy"
  | "drizzle"
  | "foggy"
  | "sunny"
  | "snowing";

const temperaturePerHour: {
  time: string;
  temperature: number;
  weather: WeatherType;
}[] = [
  { time: "09:00", temperature: 17, weather: "storm" },
  { time: "10:00", temperature: 18, weather: "cloudy" },
  { time: "11:00", temperature: 19, weather: "cloudy" },
  { time: "12:00", temperature: 20, weather: "rainy" },
  { time: "13:00", temperature: 21, weather: "drizzle" },
  { time: "14:00", temperature: 22, weather: "drizzle" },
  { time: "15:00", temperature: 22, weather: "rainy" },
  { time: "16:00", temperature: 23, weather: "foggy" },
  { time: "17:00", temperature: 23, weather: "sunny" },
  { time: "18:00", temperature: 23, weather: "sunny" },
];

function Dashboard() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-5">
        <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min col-span-4">
          <TemperatureChart />
        </div>
        <div>
          <CurrentWeather />
        </div>
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-10">
        {temperaturePerHour.map(({ time, weather, temperature }) => (
          <TemperaturePerHour
            time={time}
            temperature={temperature}
            weather={weather}
          />
        ))}
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-2">
        <div className="aspect-video rounded-xl bg-muted/50">
          <AllergyOutlook />
        </div>
        <div className="aspect-video rounded-xl bg-muted/50">
          <RainDrops />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
