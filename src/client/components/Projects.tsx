import { useState } from 'react'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "./ui/item"
import { Badge } from './ui/badge'
import './Projects.css'
import { PiggyBankIcon, CircleDollarSignIcon, MessageSquare, ChevronsUpDown } from 'lucide-react'
import { Collapsible } from '@radix-ui/react-collapsible'
import { Button } from './ui/button'
import { CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'

function Projects() {
    const [isOpen, setIsOpen] = useState(false)

    const projects = [
        {
            icon: <PiggyBankIcon />,
            name: "Budget App",
            description: "Finacial tracking application with in-depth reporting and data visualization.",
            skills: ["Vue", "Vuetify", "Node.js", "TypeScript", "MongoDB"]
        },
        {
            icon: <CircleDollarSignIcon />,
            name: "Coin Trader",
            description: "Cryptocurreny paper trading simulator with real-time market data and portfolio management.",
            skills: ["Django", "JavaScript", "Python", "Coinbase API", "HTML/CSS"]
        },
        {
            icon: <MessageSquare />,
            name: "OpenAI Chatbot",
            description: "AI-powered chatbot using OpenAI's API with conversational memory and context awareness.",
            skills: ["Flask", "Python", "OpenAI API", "HTML/CSS" ]
        },
    ]

    const projectsCollapsed = [
        {
            icon: <PiggyBankIcon />,
            name: "Budget App",
            description: "Finacial tracking application with in-depth reporting and data visualization.",
            skills: ["Vue", "Vuetify", "Node.js", "TypeScript", "MongoDB"]
        },
    ]

    return (
        <>
            <div className="projects-wrapper">
                <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                    <CollapsibleTrigger className="float-right" asChild>
                        <Button variant="ghost" size="icon" className="size-8">
                            <ChevronsUpDown />
                            <span className="sr-only">Toggle details</span>
                        </Button>
                    </CollapsibleTrigger>
                    <h1 className='mb-4 scroll-m-20 text-xl tracking-tight text-balance'>
                        Projects
                    </h1>
                    {projects.map((project, index) => (
                        <Item className='mb-2' key={index} variant={'outline'}>
                            <ItemMedia variant="icon">
                                {project.icon}
                            </ItemMedia>
                            <ItemContent>
                                <ItemTitle>{project.name}</ItemTitle>
                                <ItemDescription>
                                    {project.description}
                                </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <div className='flex flex-wrap'>
                                {project.skills.map((skill, skillIndex) => (
                                    <Badge key={skillIndex} className="mr-1 mb-1 sm:mb-0 bg-muted text-muted-foreground">
                                        {skill}
                                    </Badge>
                                ))}
                                </div>
                            </ItemActions>
                        </Item>
                    ))}
                    <CollapsibleContent>
                        {projectsCollapsed.map((project, index) => (
                            <Item className='mb-2' key={index} variant={'outline'}>
                                <ItemMedia variant="icon">
                                    {project.icon}
                                </ItemMedia>
                                <ItemContent>
                                    <ItemTitle>{project.name}</ItemTitle>
                                    <ItemDescription>
                                        {project.description}
                                    </ItemDescription>
                                </ItemContent>
                                <ItemActions>
                                    <div className='flex flex-wrap'>
                                    {project.skills.map((skill, skillIndex) => (
                                        <Badge key={skillIndex} className="mr-1 mb-1 sm:mb-0 bg-muted text-muted-foreground">
                                            {skill}
                                        </Badge>
                                    ))}
                                    </div>
                                </ItemActions>
                            </Item>
                        ))}
                    </CollapsibleContent>
                </Collapsible>
            </div>
        </>
    ) 
}

export default Projects