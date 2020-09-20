export interface MessagesModel {
  category: number
  message: string
  date: string
}

export interface MessagesRepositoryProtocol {
  add(message: MessagesModel): Promise<any>
}