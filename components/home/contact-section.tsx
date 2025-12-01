"use client";

import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiSparkles,
  HiUser,
  HiChat,
} from "react-icons/hi";
import { Loader2 } from "lucide-react";
import { SectionBadge } from "@/components/section-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // TODO: Integrate with email service or API endpoint
    console.log("Form Data:", data);

    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent successfully!", {
      description: "We'll get back to you as soon as possible.",
    });

    reset();
  };

  return (
    <section id="contact" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block md:mb-6"
          >
            <SectionBadge icon={HiSparkles}>Contact Us</SectionBadge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display mb-4 text-3xl leading-tight font-bold text-gray-900 md:mb-6 md:text-4xl"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base leading-relaxed text-gray-600 md:text-lg"
          >
            We&apos;re only one click away. Contact QDAS Global for inquiries,
            collaborations, or tailored IT solutions that fit your business.
          </motion.p>
        </div>

        {/* Main Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-[#F9FAFB] p-5 md:rounded-[40px] md:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">
            {/* Left Column: Contact Info */}
            <div className="flex flex-col justify-between space-y-10 md:space-y-12">
              <div>
                <h3 className="font-display mb-3 text-2xl font-bold text-gray-900 md:mb-4 md:text-3xl">
                  Contact Information
                </h3>
                <p className="mb-6 text-base text-gray-600 md:mb-8 md:text-lg">
                  Tell us how we can help and we&apos;ll get in touch shortly
                </p>

                <div className="space-y-5 md:space-y-6">
                  <a
                    href="mailto:info@qdasglobal.com"
                    className="group hover:text-primary flex items-center gap-3 text-gray-600 transition-colors md:gap-4"
                  >
                    <div className="bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-transform">
                      <HiMail className="h-5 w-5" />
                    </div>
                    <span className="text-base font-medium md:text-lg">
                      info@qdasglobal.com
                    </span>
                  </a>

                  <a
                    href="tel:+2348027891614"
                    className="group hover:text-primary flex items-center gap-3 text-gray-600 transition-colors md:gap-4"
                  >
                    <div className="bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-transform">
                      <HiPhone className="h-5 w-5" />
                    </div>
                    <span className="text-base font-medium md:text-lg">
                      +234 802789 1614
                    </span>
                  </a>

                  <div className="group flex items-start gap-3 text-gray-600 md:gap-4">
                    <div className="bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white">
                      <HiLocationMarker className="h-5 w-5" />
                    </div>
                    <span className="text-base leading-tight font-medium md:text-lg">
                      No 10 Sequela Street, Wuse II, Abuja, Nigeria
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display mb-4 text-xl font-bold text-gray-900 md:mb-6 md:text-2xl">
                  Business Hours
                </h3>
                <div className="space-y-2 text-base md:space-y-3 md:text-lg">
                  <p className="flex items-center gap-2">
                    <span className="text-primary font-semibold">
                      Monday – Friday :
                    </span>
                    <span className="text-gray-600">9am to 5pm</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-primary font-semibold">
                      Saturday :
                    </span>
                    <span className="text-gray-600">11 am to 3 pm</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-primary font-semibold">Sunday :</span>
                    <span className="text-gray-600">closed</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="rounded-2xl bg-white p-6 shadow-sm md:rounded-3xl md:p-10">
              <h3 className="font-display mb-3 text-2xl font-bold text-gray-900 md:mb-4 md:text-3xl">
                Start The Conversation
              </h3>
              <p className="mb-6 text-base text-gray-600 md:mb-8 md:text-lg">
                Connect with us by filling out the form below — we&apos;ll make
                sure your inquiry gets to the right team.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-6"
                noValidate
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className="sr-only">
                    Name
                  </Label>
                  <div className="relative">
                    <HiUser className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <Input
                      id="name"
                      placeholder="Name"
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={cn(
                        "focus-visible:ring-primary h-12 rounded-xl border-gray-200 bg-white pr-4 pl-11 text-base placeholder:text-gray-400 md:h-14",
                        errors.name &&
                          "border-red-500 focus-visible:ring-red-500",
                      )}
                      {...register("name")}
                    />
                  </div>
                  {errors.name && (
                    <p
                      id="name-error"
                      className="text-sm font-medium text-red-500"
                      role="alert"
                    >
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="sr-only">
                    Email
                  </Label>
                  <div className="relative">
                    <HiMail className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      className={cn(
                        "focus-visible:ring-primary h-12 rounded-xl border-gray-200 bg-white pr-4 pl-11 text-base placeholder:text-gray-400 md:h-14",
                        errors.email &&
                          "border-red-500 focus-visible:ring-red-500",
                      )}
                      {...register("email")}
                    />
                  </div>
                  {errors.email && (
                    <p
                      id="email-error"
                      className="text-sm font-medium text-red-500"
                      role="alert"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="sr-only">
                    Project description
                  </Label>
                  <div className="relative">
                    <HiChat className="absolute top-4 left-4 h-5 w-5 text-gray-400" />
                    <Textarea
                      id="description"
                      placeholder="Project description"
                      aria-invalid={!!errors.description}
                      aria-describedby={
                        errors.description ? "description-error" : undefined
                      }
                      className={cn(
                        "focus-visible:ring-primary min-h-[120px] rounded-xl border-gray-200 bg-white py-4 pr-4 pl-11 text-base placeholder:text-gray-400 md:min-h-[160px]",
                        errors.description &&
                          "border-red-500 focus-visible:ring-red-500",
                      )}
                      {...register("description")}
                    />
                  </div>
                  {errors.description && (
                    <p
                      id="description-error"
                      className="text-sm font-medium text-red-500"
                      role="alert"
                    >
                      {errors.description.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 h-12 w-full rounded-full text-base font-semibold text-white disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
