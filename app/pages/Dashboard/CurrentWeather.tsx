import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CloudLightning } from "lucide-react";
import * as React from "react";

function CurrentWeather() {
  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row justify-center">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle className="text-lg">Current Weather</CardTitle>
          <CardDescription>Monday, 30 June 2024 | 09:00</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="justify-items-center mt-8">
        <CloudLightning size={100} />
        <div className="pt-5 text-5xl">17°C</div>
        <div className="pt-5 text-m">Feels like 15°C</div>
      </CardContent>
    </Card>
  );
}

export default CurrentWeather;
