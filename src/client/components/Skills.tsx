import * as React from "react"
import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip"
import Icon from '@mdi/react';
import { mdiVuejs, mdiLanguageTypescript, mdiNodejs, mdiReact, mdiDatabase, mdiVuetify, mdiKubernetes, mdiLanguageJava, mdiLanguagePython, mdiLanguageHtml5, mdiLanguageCss3, mdiDocker } from '@mdi/js';
import './Skills.css'

function Skills() {
    const skills = [
        { name: 'Node.js', iconPath: mdiNodejs },
        { name: 'TypeScript', iconPath: mdiLanguageTypescript },
        { name: 'Vue', iconPath: mdiVuejs },
        { name: 'Vuetify', iconPath: mdiVuetify },
        { name: 'React', iconPath: mdiReact},
        { name: 'SQL / MongoDB', iconPath: mdiDatabase },
        { name: 'Docker', iconPath: mdiDocker },
        { name: 'Kubernetes', iconPath: mdiKubernetes },
        { name: 'Java', iconPath: mdiLanguageJava },
        { name: 'Python', iconPath: mdiLanguagePython },
        { name: 'HTML', iconPath: mdiLanguageHtml5 },
        { name: 'CSS', iconPath: mdiLanguageCss3 },
    ]

    return (
        <>
            <div className="skills-wrapper pt-5">
                <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="w-full max-w-[15rem] xs:max-w-xl sm:max-w-xl lg:max-w-7xl"
                >
                <CarouselContent>
                    {skills.map((skill, index) => (
                    <CarouselItem key={index} className="basis-1/2 sm:basis-1/4 lg:basis-1/6">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Icon path={skill.iconPath} size={3} />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{skill.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                                </TooltipProvider>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                </Carousel>
            </div>
        </>
    )
}

export default Skills