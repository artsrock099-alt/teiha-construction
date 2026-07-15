"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface NewsletterSectionProps {
  title: string;
  description?: string;
  privacyText?: string;
  className?: string;
}

type NewsletterState = "idle" | "loading" | "success" | "error";

export function NewsletterSection({
  title,
  description,
  privacyText = "By subscribing you agree to our Privacy Policy.",
  className,
}: NewsletterSectionProps) {
  const [email, setEmail] = React.useState("");
  const [state, setState] = React.useState<NewsletterState>("idle");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");

    setTimeout(() => {
      setState("success");
      setMessage("Thanks for subscribing! We'll be in touch soon.");
      setEmail("");
      setTimeout(() => {
        setState("idle");
        setMessage("");
      }, 5000);
    }, 1500);
  };

  return (
    <section className={className}>
      <Container size="text">
        <FadeUp className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-body mb-8">{description}</p>
          )}

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
                disabled={state === "loading" || state === "success"}
              />
              <Button
                type="submit"
                disabled={state === "loading" || state === "success"}
              >
                {state === "loading" ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>

            {message && (
              <p
                className={cn(
                  "mt-4 text-sm",
                  state === "success" ? "text-green-600" : "text-red-500"
                )}
              >
                {message}
              </p>
            )}

            {privacyText && (
              <p className="mt-4 text-xs text-body opacity-70">{privacyText}</p>
            )}
          </form>
        </FadeUp>
      </Container>
    </section>
  );
}
