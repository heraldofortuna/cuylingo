export type Translation = {
  id: number
  request: string
  answer: string
  value: string
  isValid: boolean
}

export type TranslationList = Translation[]

export type TranslationListGroup = Translation[][]
