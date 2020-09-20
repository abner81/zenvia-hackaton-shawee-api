export interface UserPhoneModel {
  userphone: string
}

export interface FindCategory {
  find(userphone: UserPhoneModel): Promise<number>
}