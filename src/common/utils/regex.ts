export const formattedDescription = (text: string) => text.replace(/\\n/g, '\n')
export const isUrl = (text: string) => /^(http|https):\/\/[^ "]+$/.test(text)
