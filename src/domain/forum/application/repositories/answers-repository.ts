import type { Answer } from '@/domain/forum/enterprise/entities/answer'

export interface AnswersRepository {
  findById(id: string): Promise<Answer | null>
  save(question: Question): Promise<void>
  create(answer: Answer): Promise<void>
  delete(answer: Answer): Promise<void>
}
