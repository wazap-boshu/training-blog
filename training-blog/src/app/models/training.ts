export class Training {
  constructor(
    id: string,
    userId: string,
    trainingName: string,
    weight: number,
    reps: number,
    set: number,
    date: Date, 
  ) {
    this.id = id
    this.userId = userId
    this.trainingName = trainingName
    this.date = date
    this.set = set
    this.reps = reps
    this.weight = weight
  }

  id: string

  userId: string

  trainingName: string

  date: Date

  weight: number

  reps: number

  set: number

}