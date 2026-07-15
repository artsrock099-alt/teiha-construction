import { z } from "zod";

// Define message schema
export const MessageSchema = z.object({
  id: z.string(),
  role: z.enum(["user", "assistant"]),
  content: z.string().max(4000), // Limit input length
  timestamp: z.coerce.date(),
});

// Define chat request schema
export const ChatRequestSchema = z.object({
  messages: z.array(MessageSchema).min(1).max(50), // Limit number of messages
});

// Define tool-specific request schemas (for future use)
export const CostEstimatorRequestSchema = z.object({
  projectType: z.string(),
  squareFootage: z.number().min(100).max(100000),
  location: z.string(),
  details: z.string().max(2000).optional(),
});

export const FloorPlanRequestSchema = z.object({
  projectType: z.string(),
  squareFootage: z.number().min(100).max(100000),
  bedrooms: z.number().min(0).max(20).optional(),
  bathrooms: z.number().min(0).max(20).optional(),
  requirements: z.string().max(2000).optional(),
});
