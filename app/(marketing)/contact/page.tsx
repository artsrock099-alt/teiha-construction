import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactOptionCard } from "@/components/sections/contact/contact-option-card";
import { FadeUp } from "@/lib/animations";
import { GradientBlob } from "@/components/decorative/gradient-blob";
import { GridBackground } from "@/components/decorative/grid-background";
import { 
  Mail, 
  Phone, 
  Users, 
  Briefcase, 
  MapPin, 
  Globe, 
  Clock, 
  ArrowRight, 
  MessageCircle,
  Shield,
  Zap,
  Leaf,
  Award,
  CheckCircle2
} from "lucide-react";

const CONTACT_OPTIONS = [
  {
    icon: Mail,
    title: "General Enquiries",
    description: "Have questions about our services or want to learn more? We're here to help.",
    contactMethod: "teihaconstructionservices@gmail.com",
  },
  {
    icon: Briefcase,
    title: "Project Consultation",
    description: "Ready to start your next project? Schedule a personalized consultation with our team.",
    contactMethod: "teihaconstructionservices@gmail.com",
  },
  {
    icon: Users,
    title: "Partnership Opportunities",
    description: "Interested in collaborating with TEI-HA? We'd love to explore partnerships.",
    contactMethod: "teihaconstructionservices@gmail.com",
  },
  {
    icon: Shield,
    title: "Technical Support",
    description: "For existing clients. Client portal coming soon.",
    contactMethod: "teihaconstructionservices@gmail.com",
  },
];

const WHY_WORK_WITH_US = [
  {
    icon: Zap,
    title: "AI-assisted Workflows",
    description: "Streamlined processes powered by artificial intelligence",
  },
  {
    icon: Leaf,
    title: "Sustainable Design",
    description: "Eco-friendly solutions that respect the environment",
  },
  {
    icon: Award,
    title: "Global Standards",
    description: "Quality and excellence in every project we deliver",
  },
  {
    icon: Users,
    title: "Experienced Professionals",
    description: "A team of seasoned architects, engineers, and builders",
  },
  {
    icon: CheckCircle2,
    title: "Transparent Communication",
    description: "Clear, honest, and regular updates throughout your project",
  },
];

const FAQ = [
  {
    question: "What is your consultation process?",
    answer: "Our consultation process begins with an initial discovery call to understand your project goals. We then conduct a site analysis and provide preliminary recommendations. We follow up with a detailed proposal outlining scope, timeline, and budget.",
  },
  {
    question: "Do you work on international projects?",
    answer: "Yes! We have experience working on projects across East Africa and are equipped to handle international projects. Please contact us to discuss your specific project needs.",
  },
  {
    question: "What is your typical response time?",
    answer: "We aim to respond to all enquiries within 24-48 hours. For urgent matters, please call our office directly.",
  },
  {
    question: "What is your project timeline?",
    answer: "Project timelines vary depending on scope, size, and complexity. During your initial consultation, we'll provide a detailed timeline estimate tailored to your project.",
  },
  {
    question: "What are your payment terms?",
    answer: "Our payment terms are flexible and tailored to each project. We typically use a milestone-based payment structure. We'll outline all payment details in your proposal.",
  },
  {
    question: "How do we collaborate?",
    answer: "We use modern collaboration tools and provide regular updates via email, video calls, and a dedicated project dashboard (coming soon).",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                mainEntity: FAQ.map((q) => ({
                  "@type": "Question",
                  name: q.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: q.answer,
                  },
                })),
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://teiha-construction.com" },
                  { "@type": "ListItem", position: 2, name: "Contact", item: "https://teiha-construction.com/contact" },
                ],
              },
            ],
          }),
        }}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-primary/20">
        {/* Decorative Elements */}
        <GridBackground className="absolute inset-0 opacity-20" />
        <GradientBlob 
          size="xl" 
          className="top-0 -left-20 -rotate-45" 
        />
        <GradientBlob 
          size="lg" 
          className="bottom-0 -right-10 rotate-12" 
          color1="#0ea5e9" 
          color2="#8b5cf6" 
          color3="#22c55e"
        />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading mb-6">
              Let's Build Something Great Together
            </h1>
            <p className="text-lg md:text-xl text-body mb-8">
              Ready to start your next project or have questions about our services? We're here to help. Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#form">Schedule Consultation</Link>
              </Button>
              <Button size="lg" variant="secondary">
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="How Can We Help?"
            subtitle="Choose the best way to get in touch"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_OPTIONS.map((option, index) => (
              <ContactOptionCard
                key={option.title}
                icon={option.icon}
                title={option.title}
                description={option.description}
                contactMethod={option.contactMethod}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Consultation Booking Form */}
      <Section id="form" size="xl" variant="muted">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Schedule Your Consultation"
            subtitle="Let's discuss your project in detail"
            className="mb-12"
          />
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Contact Information */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Contact Information"
            subtitle="Find us, call us, or email us"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeUp>
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Office Address</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-body">
                     Nansana Municipality along Hoima Rd DT Complex<br />
                    P. O. Box 115420, Wakiso
                  </p>
                  <Button variant="ghost" className="p-0 mt-2 h-auto text-primary" asChild>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=TEI-HA+Construction+Services+Nansana+Uganda"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions on Google Maps →
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </FadeUp>

            <FadeUp delay={0.05}>
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm text-body space-y-1">
                    <li><a href="mailto:teihaconstructionservices@gmail.com">teihaconstructionservices@gmail.com</a></li>
                  </ul>
                </CardContent>
              </Card>
            </FadeUp>

            <FadeUp delay={0.1}>
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Phone Numbers</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm text-body space-y-1">
                    <li><a href="https://wa.me/256741190078">WhatsApp: +256-741190078</a></li>
                    <li><a href="tel:+256200911184">Phone: +256 200911184</a></li>
                  </ul>
                </CardContent>
              </Card>
            </FadeUp>

            <FadeUp delay={0.15}>
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <div className="h-6 w-6 text-primary font-bold">ID</div>
                    </div>
                    <CardTitle className="text-lg">Business Details</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-body">TIN: 1047520346</p>
                </CardContent>
              </Card>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* Google Maps Embed */}
      <Section size="xl" variant="muted">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Find Us on the Map"
            subtitle="Visit our office in Nansana"
            className="mb-12"
          />
          <div className="max-w-5xl mx-auto">
            <FadeUp>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7583194040885!2d32.5825!3d-0.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNansana!5e0!3m2!1sen!2sug!4v1"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TEI-HA Construction Services Ltd - Office Location"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* Why Work With TEI-HA */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Why Work With TEI-HA?"
            subtitle="What sets us apart from the rest"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {WHY_WORK_WITH_US.map((item, index) => (
              <FadeUp key={item.title} delay={index * 0.05}>
                <Card className="h-full">
                  <CardHeader className="pb-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-body">{item.description}</p>
                  </CardContent>
                </Card>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section size="xl" variant="muted">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Got questions? We've got answers"
            className="mb-12"
          />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {FAQ.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-body">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg text-body mb-8">
              Let's work together to bring your vision to life. Book a consultation or explore our portfolio to see what we've been working on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#form">Book Consultation</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/projects">Explore Our Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

