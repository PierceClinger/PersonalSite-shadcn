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
import './ContactForm.css'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Input } from './ui/input'
import { toast } from "sonner"
import { ApiService } from "../service/ApiService"
import React from "react"
import { EmailRequest, EmailResponse } from "../../common/dataStructures/email"

function ContactForm() {
    let formMessage: EmailResponse | null = null;
    const formRef = React.useRef<HTMLFormElement | null>(null);

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        formMessage = null;
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
        };
        try {
            const response = await ApiService.sendEmail(data);
            formMessage = response;
        } catch (error) {
            formMessage = { success: false, message: "An error occurred while sending your message. Please try again later." };
            console.error(error);
        }

        if (formMessage?.success) {
            clearForm();
            toast.success("Success", { description: formMessage.message });
        } else {
            toast.error("Error", { description: formMessage?.message || "An error occurred while sending your message. Please try again later." });
        }
    };

    function clearForm() {
        formRef.current?.reset();
    }

    return (
        <>
            <div className="contactformalt-wrapper flex justify-center mt-6 w-full">
                <form ref={formRef} action="" className='w-full sm:w-1/2 py-5' onSubmit={handleSubmit}>
                    <h3 className='text-4xl mb-6'>Contact me</h3>
                    <FieldGroup>
                        <Field>
                            <FieldLabel>Name</FieldLabel>
                            <FieldContent>
                                <Input type="text" name="name" required />
                            </FieldContent>
                        </Field>
                        <Field>
                            <FieldLabel>Email Address</FieldLabel>
                            <FieldContent>
                                <Input type="email" name="email" required />
                            </FieldContent>
                        </Field>
                        <Field>
                            <FieldLabel>Message</FieldLabel>
                            <FieldContent>
                                <Textarea name="message" rows={5} required></Textarea>
                            </FieldContent>
                        </Field>
                    </FieldGroup>
                    <div className="flex flex-row mt-6">
                        <Button type="submit" className="ml-auto">
                            Send Message
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm