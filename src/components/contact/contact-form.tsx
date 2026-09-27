import { contactFormSchema } from '@/lib/schema'
import {  useForm } from '@tanstack/react-form'
import { Field, FieldError, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';


export default function ContactForm() {
    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            company: "",
            helpWith: "Agentic AI Consulting",
            phone: "",
            message: ""
        },
        validators: {
            onChange: ({ value }) => {
                const result = contactFormSchema.safeParse(value);

                if (result.success) return undefined;

                return result.error.issues.map((issue) => ({
                    path: issue.path,
                    message: issue.message,
                }));
            },
        }, 
        
        onSubmit: async ({ value}) => {
        console.log("Form Submitted:", value);
     },
    });


  return (
    <div className='mx-auto w-full rounded-2xl bg-card p-8 shadow-sm'>
        <form 
        onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
        }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:pb-10 pb-4 lg:gap-10 gap-x-4">
                {/* Name */}
                <form.Field name="name">
                    {(field) => (
                        <Field className="w-full" 
                        data-invalid={field.state.meta.isValid}>
                            <FieldLabel 
                            htmlFor="name"
                            className='text-black text-base'>Name*</FieldLabel>
                            <Input 
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            onBlur={field.handleBlur}
                            placeholder="John Doe"
                            type="name"
                            aria-invalid={!field.state.meta.isValid}
                            className='h-12 bg-[#F8FAFC] text-black lg:text-base text-md'
                         />
                         { !field.state.meta.isValid && (
                            <FieldError errors={field.state.meta.errors} />
                         )}
                        </Field>
                    )}
                </form.Field>
                
                {/* Email */}
                <form.Field name="email">
                    {(field) => (
                        <Field className="w-full" 
                        data-invalid={field.state.meta.isValid}>
                            <FieldLabel 
                            htmlFor="email"
                            className='text-black text-base'>Email*</FieldLabel>
                            <Input 
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            onBlur={field.handleBlur}
                            placeholder="johndoe@example.com"
                            type="email"
                            aria-invalid={!field.state.meta.isValid}
                            className='h-12 bg-[#F8FAFC] text-black lg:text-base text-md'
                         />
                         { !field.state.meta.isValid && (
                            <FieldError errors={field.state.meta.errors} />
                         )}
                        </Field>
                    )}
                </form.Field>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 space-y-4 lg:gap-10 gap--x-4">
                {/* Company */}
                <form.Field name="company">
                    {(field) => (
                        <Field className="w-full" 
                        data-invalid={field.state.meta.isValid}>
                            <FieldLabel 
                            htmlFor="company"
                            className='text-black text-base'>Company</FieldLabel>
                            <Input 
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            onBlur={field.handleBlur}
                            placeholder="John Doe Enterprises Ltd"
                            type="text"
                            aria-invalid={!field.state.meta.isValid}
                            className='h-12 bg-[#F8FAFC] text-black lg:text-base text-md'
                         />
                         { !field.state.meta.isValid && (
                            <FieldError errors={field.state.meta.errors} />
                         )}
                        </Field>
                    )}
                </form.Field>

                {/* Phone Number */}
                <form.Field name="phone">
                    {(field) => (
                        <Field className="w-full" 
                        data-invalid={field.state.meta.isValid}>
                            <FieldLabel 
                            htmlFor="phone"
                            className='text-black text-base'>Phone*</FieldLabel>
                            <Input 
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            onBlur={field.handleBlur}
                            placeholder="+234..."
                            type="email"
                            aria-invalid={!field.state.meta.isValid}
                            className='h-12 bg-[#F8FAFC] text-black lg:text-base text-md'
                         />
                         { !field.state.meta.isValid && (
                            <FieldError errors={field.state.meta.errors} />
                         )}
                        </Field>
                    )}
                </form.Field>
            </div>

            {/* Dropdown: What can we help you with */}
            <div className="mt-4 lg:mt-6">
            <form.Field name="helpWith" >
                {(field) => (
                    <Field className='w-full' data-invalid={field.state.meta.isValid}>
                        <FieldLabel 
                            htmlFor="phone"
                            className='text-black text-base'>
                                What can we help with? *
                        </FieldLabel>
                          <Select
                              value={field.state.value}
                              
                              onValueChange={(val) => {
                                  if (val !== null) field.handleChange(val)
                              }}
                          >
                              <SelectTrigger className="w-full rounded-xl border-gray-200  focus:bg-white h-12 bg-[#F8FAFC] text-muted-foreground lg:text-base py-4 lg:py-6 text-md">
                                  <SelectValue placeholder="Select an option" className="" />
                              </SelectTrigger>
                              <SelectContent className="top-20">
                                  <SelectItem value="Agentic AI Consulting" className="h-12 bg-white text-black lg:text-base py-4 lg:py-6 text-md hover:bg-neutral-100">
                                      Agentic AI Consulting
                                  </SelectItem>
                                  <SelectItem value="Custom AI Development" className="h-12 bg-white text-black lg:text-base py-4 lg:py-6 text-md">
                                      Custom AI Development
                                  </SelectItem>
                                  <SelectItem value="Process Automation" className="h-12 bg-white text-black lg:text-base py-4 lg:py-6 text-md">
                                      Process Automation
                                  </SelectItem>
                                  <SelectItem value="General Enquiry" className="h-12 bg-white text-black lg:text-base py-4 lg:py-6 text-md">
                                      General Enquiry
                                  </SelectItem>
                              </SelectContent>
                          </Select>
                    </Field>
                )}
            </form.Field>
            </div>

            {/* Textarea: Tell us about your project */}
            <div className="mt-4 lg:mt-6">
            <form.Field
            name="message">
            {(field) => (
                <Field className='w-full' data-invalid={field.state.meta.isValid}>
                    <FieldLabel
                        htmlFor="message"
                        className='text-black text-base'>
                            Tell us about your project *
                    </FieldLabel>
                          <Textarea
                              id={field.name}
                              rows={4}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) => field.handleChange(e.target.value)}
                              placeholder="Where are you based, what processes do you want to automate, and what does success look like?"
                              className="resize-y rounded-xl border-gray-200 min-h-40 bg-gray-50/50 placeholder:text-gray-400 focus:bg-white text-xl placeholder:text-base"
                          />
                </Field>
            )}
          </form.Field>

          {/* Submit Button */}
          <div className="mt-4 lg:mt-6">
                <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                children={([canSubmit, isSubmitting]) => (
                    <Button
                    type="submit"
                    disabled={!canSubmit || isSubmitting}
                    className="w-full rounded-xl bg-[#005c3d] py-6 font-medium text-white hover:bg-[#004a31] transition-colors text-xl"
                    >
                    {isSubmitting ? "Sending..." : "Send enquiry"}
                    </Button>
                )}
                />
            </div>

            {/* Footer Disclaimer */}
            <p className="text-center text-sm lg:text-md text-muted-foreground mt-4 lg:mt-6">
            We respect your privacy. Your enquiry goes straight to our Dubai team
            — we never share it.
            </p>
          </div>
        </form>
    </div>
  )
}
