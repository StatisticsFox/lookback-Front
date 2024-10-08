/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/iMSYA7HVhKo
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
'use client';

import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"
import { Pie, PieChart, CartesianGrid, XAxis, Bar, BarChart, Line } from "recharts"
import { ResponsiveLine } from "@nivo/line"

export function lookbackDashboard_2() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Calendar Insights</h1>
        <p className="text-muted-foreground">Unlock the power of your Google Calendar data.</p>
      </header>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Calendar Statistics</h2>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardDescription>Time Utilization</CardDescription>
                <CardTitle>78%</CardTitle>
              </CardHeader>
              <CardContent>
                <PiechartcustomChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Event Types</CardDescription>
                <CardTitle>
                  <div className="flex gap-2">
                    <div className="bg-primary rounded-full w-3 h-3" />
                    <div className="bg-secondary rounded-full w-3 h-3" />
                    <div className="bg-muted rounded-full w-3 h-3" />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BarchartChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Recurring Events</CardDescription>
                <CardTitle>42%</CardTitle>
              </CardHeader>
              <CardContent>
                <LinechartChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Calendar Retrospective</h2>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardDescription>June 2023</CardDescription>
                <CardTitle>Reflection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Highlights</h3>
                    <p>
                      - Attended a conference and made valuable connections
                      <br />- Completed a major project ahead of schedule
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Lessons Learned</h3>
                    <p>
                      - Importance of time blocking and prioritizing tasks
                      <br />- Benefits of regular breaks and self-care
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Next Steps</h3>
                    <p>
                      - Set a goal to reduce unplanned meetings by 20%
                      <br />- Implement a daily journaling practice
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>May 2023</CardDescription>
                <CardTitle>Reflection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Highlights</h3>
                    <p>
                      - Launched a new product feature that was well-received
                      <br />- Took a much-needed vacation to recharge
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Lessons Learned</h3>
                    <p>
                      - Importance of work-life balance and setting boundaries
                      <br />- Value of delegating tasks and empowering my team
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Next Steps</h3>
                    <p>
                      - Implement a weekly review process to stay on track
                      <br />- Explore opportunities for professional development
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Goal Setting</h2>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardDescription>Q3 2023 Goals</CardDescription>
              <CardTitle>
                <div className="flex gap-2">
                  <div className="bg-primary rounded-full w-3 h-3" />
                  <div className="bg-secondary rounded-full w-3 h-3" />
                  <div className="bg-muted rounded-full w-3 h-3" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Productivity</h3>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Reduce unplanned meetings by 20%</li>
                    <li>Implement a daily journaling practice</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Professional Development</h3>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Attend a relevant conference or workshop</li>
                    <li>Complete an online course in a new skill</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Work-Life Balance</h3>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Take a minimum of 2 personal days per month</li>
                    <li>Implement a weekly digital detox</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function BarchartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px]"
      >
        <BarChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}


function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function LinechartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
  )
}


function PiechartcustomChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          visitors: {
            label: "Visitors",
          },
          chrome: {
            label: "Chrome",
            color: "hsl(var(--chart-1))",
          },
          safari: {
            label: "Safari",
            color: "hsl(var(--chart-2))",
          },
          firefox: {
            label: "Firefox",
            color: "hsl(var(--chart-3))",
          },
          edge: {
            label: "Edge",
            color: "hsl(var(--chart-4))",
          },
          other: {
            label: "Other",
            color: "hsl(var(--chart-5))",
          },
        }}
      >
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Pie
            data={[
              { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
              { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
              { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
              { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
              { browser: "other", visitors: 90, fill: "var(--color-other)" },
            ]}
            dataKey="visitors"
            nameKey="browser"
          />
        </PieChart>
      </ChartContainer>
    </div>
  )
}
