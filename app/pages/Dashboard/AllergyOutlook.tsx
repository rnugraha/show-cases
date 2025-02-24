import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CloudLightning } from "lucide-react";
import React from "react";

function AllergyOutlook() {
  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row justify-center">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle className="text-lg">Allergy Outlook</CardTitle>
          <CardDescription>Monday, 30 June 2024 | 09:00</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-4">
        <div className="text-sm">Tree Pollen</div>
        <Separator className="my-4" />
        <div className="text-sm">Grass Pollen</div>
        <Separator className="my-4" />
        <div className="text-sm">Mollen</div>
        <Separator className="my-4" />
        <div className="text-sm">Dust</div>
        <Separator className="my-4" />
        <div className="text-sm">Flower</div>
        <Separator className="my-4" />
        <div className="text-sm">Dust</div>
        <Separator className="my-4" />
        <div className="text-sm">Dust</div>
      </CardContent>
    </Card>
  );
}

export default AllergyOutlook;
