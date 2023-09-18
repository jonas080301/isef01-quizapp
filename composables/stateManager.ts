export const useShowAnswer = () => useState<Boolean>('answer', () => false)
export const useQuizEnded = () => useState<Boolean>('quizEnded', () => false)
export const useScore = () => useState<Number>('score', () => 0)
export const useSubject = () => useState<Number>('subject', () => 0)