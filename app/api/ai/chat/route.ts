import { NextResponse } from "next/server";
import { ChatRequestSchema } from "@/modules/ai/schemas/ai.schema";
import { getOpenRouterService } from "@/modules/ai/services/openrouter.service";
import { PROJECT_ADVISOR_PROMPT } from "@/modules/ai/prompts/project-advisor";
import type { ChatResponse, Message } from "@/modules/ai/types/ai";

export async function POST(request: Request) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validationResult = ChatRequestSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json<ChatResponse>(
        {
          success: false,
          error: "Invalid request data. Please check your input and try again.",
        },
        { status: 400 }
      );
    }

    const { messages } = validationResult.data;

    // Prepare messages for OpenRouter
    const openRouterMessages = [
      {
        role: "system" as const,
        content: PROJECT_ADVISOR_PROMPT,
      },
      ...messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
    ];

    // Call OpenRouter service
    const openRouterService = getOpenRouterService();
    const response = await openRouterService.chat(openRouterMessages);

    // Extract the assistant's message
    const assistantMessage = response.choices[0]?.message;
    if (!assistantMessage) {
      throw new Error("No response from AI");
    }

    // Create response message
    const newMessage: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: assistantMessage.content,
      timestamp: new Date(),
    };

    return NextResponse.json<ChatResponse>({
      success: true,
      message: newMessage,
    });
  } catch (error) {
    console.error("Error in chat API route:", error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unexpected error occurred. Please try again later.";

    return NextResponse.json<ChatResponse>(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
