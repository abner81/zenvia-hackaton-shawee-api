export interface AddUserModel {
  userphone: string
  username: string
  internal_category: number
}

export interface AddUser {
  add(user: AddUserModel): Promise<any>
  get(): Promise<any>
}