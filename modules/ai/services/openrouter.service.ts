import type { OpenRouterChatRequest, OpenRouterChatResponse } from "../types/ai";

const DEFAULT_MODEL = "openai/gpt-5";
const DEFAULT_BASE_URL = "https://openrouter.ai/api/v1";
const DEFAULT_TEMPERATURE = 0.7;
const DEFAULT_MAX_TOKENS = 2048;

/**
 * OpenRouter Service for handling AI requests
 */
export class OpenRouterService {
  private apiKey: string;
  private baseUrl: string;
  private model: string;

  constructor() {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      throw new Error("OPENROUTER_API_KEY environment variable is required");
    }

    this.apiKey = apiKey;
    this.baseUrl = process.env.OPENROUTER_BASE_URL || DEFAULT_BASE_URL;
    this.model = process.env.OPENROUTER_MODEL || DEFAULT_MODEL;
  }

  /**
   * Send a chat completion request to OpenRouter
   */
  async chat(
    messages: Array<{ role: "system" | "user" | "assistant"; content: string }>,
    options?: Partial<{
      temperature: number;
      maxTokens: number;
      model: string;
      stream: boolean;
    }>
  ): Promise<OpenRouterChatResponse> {
    const requestBody: OpenRouterChatRequest = {
      model: options?.model || this.model,
      messages,
      temperature: options?.temperature ?? DEFAULT_TEMPERATURE,
      max_tokens: options?.maxTokens ?? DEFAULT_MAX_TOKENS,
      stream: options?.stream ?? false,
    };

    try {
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
          "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
          "X-Title": process.env.NEXT_PUBLIC_SITE_NAME || "TEI-HA Construction Services",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error("OpenRouter API error:", {
          status: response.status,
          statusText: response.statusText,
          data: errorData,
        });

        switch (response.status) {
          case 401:
            throw new Error("Invalid API key. Please check your OpenRouter API key.");
          case 429:
            throw new Error("Rate limit exceeded. Please try again later.");
          case 500:
            throw new Error("OpenRouter service is currently unavailable. Please try again later.");
          default:
            throw new Error(`OpenRouter request failed: ${response.statusText}`);
        }
      }

      const data = (await response.json()) as OpenRouterChatResponse;
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      console.error("Unexpected error in OpenRouter service:", error);
      throw new Error("An unexpected error occurred. Please try again later.");
    }
  }
}

// Create and export a singleton instance
let openRouterServiceInstance: OpenRouterService | null = null;

export function getOpenRouterService(): OpenRouterService {
  if (!openRouterServiceInstance) {
    openRouterServiceInstance = new OpenRouterService();
  }
  return openRouterServiceInstance;
}
