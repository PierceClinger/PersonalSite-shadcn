import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./ui/chart"
import './SkillsRadar.css';

function SkillsRadar() {
    const chartData = [
        { month: "Architecture", desktop: 7 },
        { month: "Frontend", desktop: 9 },
        { month: "Design", desktop: 7 },
        { month: "CI/CD", desktop: 9 },
        { month: "Backend", desktop: 11 },
    ]
        
    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "var(--chart-1)",
        },
    } satisfies ChartConfig

    return (
        <div className="skillsradar-wrapper min-h-full w-full">
            <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[400px] w-full"
            >
                <RadarChart data={chartData}>
                    <PolarAngleAxis dataKey="month" />
                    <PolarGrid />
                    <Radar
                        fillOpacity={0.6}
                        dataKey="desktop"
                        fill="var(--color-desktop)"
                        dot={{
                            r: 4,
                            fillOpacity: 1,
                        }}
                    />
                </RadarChart>
        </ChartContainer>
        </div>
    );
}

export default SkillsRadar;