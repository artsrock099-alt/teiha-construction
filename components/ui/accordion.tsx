"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Plus, Minus } from "lucide-react";

interface AccordionContextValue {
  openItem: string | null;
  setOpenItem: (id: string | null) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(
  undefined
);

function useAccordionContext() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
}

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  collapsible?: boolean;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, type = "single", defaultValue, collapsible = true, children, ...props }, ref) => {
    const [openItem, setOpenItem] = React.useState<string | null>(
      typeof defaultValue === "string" ? defaultValue : null
    );

    return (
      <AccordionContext.Provider value={{ openItem, setOpenItem }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const { openItem, setOpenItem } = useAccordionContext();
    const isOpen = openItem === value;

    const handleToggle = () => {
      if (isOpen) {
        setOpenItem(null);
      } else {
        setOpenItem(value);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "border-b border-border py-4",
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<any>, {
                isOpen,
                onToggle: handleToggle,
              })
            : child
        )}
      </div>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean;
  onToggle?: () => void;
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ className, children, isOpen, onToggle, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "flex w-full items-center justify-between text-left font-medium",
        className
      )}
      onClick={onToggle}
      {...props}
    >
      {children}
      {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
}

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, children, isOpen, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden text-body transition-all duration-300",
        isOpen ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0",
        className
      )}
      {...props}
    >
      <div className="pb-2">{children}</div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
