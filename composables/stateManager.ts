export const useShowAnswer = () => useState<boolean>('answer', () => false)
export const useQuizEnded = () => useState<boolean>('quizEnded', () => false)
export const useScore = () => useState<number>('score', () => 0)
export const useSubject = () => useState<number>('subject', () => 0)