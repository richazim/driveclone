"use client";

import React from "react";
import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"


const chartData = [
    { size: 200, used: 10, fill: "red" },
]
const chartConfig = {
    size: {
        label: "Size",
    },
    used: {
        label: "Used",
        color: "red",
    }
} satisfies ChartConfig



const Chart = () => {
  return (
      <Card className="grid xl:grid-cols-2 grid-cols-1 py-5">
          <CardContent className="py-0 flex justify-center items-center">
              <div className="w-full h-full">
                  <ChartContainer
                      config={chartConfig}
                      className="mx-auto aspect-square max-h-[250px]"
                  >
                      <RadialBarChart
                          data={chartData}
                          startAngle={0}
                          endAngle={250}
                          innerRadius={80}
                          outerRadius={110}
                      >
                          <PolarGrid
                              gridType="circle"
                              radialLines={false}
                              stroke="none"
                              className=""
                              polarRadius={[86, 74]}
                          />
                          <RadialBar dataKey="used" background={false} cornerRadius={10}/>
                          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                              <Label
                                  content={({ viewBox }) => {
                                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                          return (
                                              <text
                                                  x={viewBox.cx}
                                                  y={viewBox.cy}
                                                  textAnchor="middle"
                                                  dominantBaseline="middle"
                                              >
                                                  <tspan
                                                      x={viewBox.cx}
                                                      y={viewBox.cy}
                                                      className="fill-foreground text-4xl font-bold "
                                                  >
                                                      {chartData[0].used.toLocaleString() + "%"}
                                                  </tspan>
                                                  <tspan
                                                      x={viewBox.cx}
                                                      y={(viewBox.cy || 0) + 24}
                                                      className="fill-muted-foreground text-white"
                                                  >
                                                      Used
                                                  </tspan>
                                              </text>
                                          )
                                      }
                                  }}
                              />
                          </PolarRadiusAxis>
                      </RadialBarChart>
                  </ChartContainer>
              </div>
          </CardContent>

          <CardHeader className="text-center">
              <h2 className="font-bold text-[25px]">Available Storage</h2>
              <p>1.2 MB / 2GB</p>
          </CardHeader>
      </Card>
  );
};

export default Chart;
