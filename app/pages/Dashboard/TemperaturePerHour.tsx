import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CloudLightning,
  CloudDrizzle,
  CloudRain,
  Snowflake,
  CloudFog,
  Sun,
  Cloudy,
} from "lucide-react";

const weatherIcons = {
  cloudy: Cloudy,
  storm: CloudLightning,
  foggy: CloudFog,
  drizzle: CloudDrizzle,
  rainy: CloudRain,
  snowing: Snowflake,
  sunny: Sun,
};

function TemperaturePerHour({
  time,
  temperature,
  weather,
}: {
  time: string;
  temperature: number;
  weather: keyof typeof weatherIcons;
}) {
  return (
    <Card>
      <CardHeader className="flex items-center justify-center">
        <CardTitle className="text-sm">{time}</CardTitle>
      </CardHeader>
      <CardContent className="justify-items-center">
        {React.createElement(weatherIcons[weather], {
          size: 32,
          className: "text-slate-500",
          "aria-label": weather,
        })}
        <div className="pt-5">{`${temperature}°C`}</div>
      </CardContent>
    </Card>
  );
}

export default TemperaturePerHour;
