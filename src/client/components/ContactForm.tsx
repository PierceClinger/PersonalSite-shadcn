import { useState } from 'react'
import { Card, CardTitle, CardContent, CardDescription, CardFooter, CardHeader } from './ui/card'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "./ui/field"
import './ContactFormAlt.css'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Input } from './ui/input'

function ContactFormAlt() {
  return (
    <>
        <div className="contactform-wrapper justify-center lg:justify-start mt-6 w-full lg:w-1/2">
            <form action="">
                <Card className="">
                    <CardHeader>
                        <CardTitle>Contact me</CardTitle>
                        <CardDescription>
                            Feel free to reach out if you have any questions.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FieldGroup>
                            <Field>
                                <FieldLabel>Name</FieldLabel>
                                <FieldContent>
                                    <Input type="text" name="name" />
                                </FieldContent>
                            </Field>
                            <Field>
                                <FieldLabel>Email Address</FieldLabel>
                                <FieldContent>
                                    <Input type="email" name="email" />
                                </FieldContent>
                            </Field>
                            <Field>
                                <FieldLabel>Message</FieldLabel>
                                <FieldContent>
                                    <Textarea name="message" rows={5}></Textarea>
                                </FieldContent>
                            </Field>
                        </FieldGroup>
                    </CardContent>
                    <CardFooter className='flex justify-end'>
                        <Button type="submit" className="">
                            Send Message
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    </>
  )
}

export default ContactFormAlt