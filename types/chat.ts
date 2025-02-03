export interface ChatMessage {
    id: string
    userId: string
    prompt: string
    response: string
    createdAt: string
    updatedAt: string
  }
  
  export interface ChatResponse {
    data: ChatMessage[]
  }
  
  