import { useState } from 'react'
import { Card, CardTitle, CardContent, CardDescription, CardFooter, CardHeader } from './ui/card'
import './Description.css'

function Description() {
  return (
    <>
        <div className="description-wrapper">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>About Me</CardTitle>
                    <CardDescription>
                        I'm a software developer passionate about building scalable and maintainable applications.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">
                        With experience in full-stack development, I specialize in creating efficient and robust applications using modern technologies.
                    </p>
                </CardContent>
            </Card>
        </div>
    </>
  )
}

export default Description