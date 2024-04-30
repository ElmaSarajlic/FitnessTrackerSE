export type Exercise = {
    id: string, 
    name: string,
    muscleGroup: string,
    description: string,
    imageUrl: string
}

export type ExerciseDetail = {
    id: string,
    exerciseName: string, 
    weight: number,
    sets: number, 
    reps: number
}

export type Routine = {
    id: string, 
    name: string, 
    exercises: ExerciseDetail[]
}

export type User = {
    id: string, 
    firstName: string, 
    lastName: string,
    email: string,
    password: string
}

export type WorkoutLog = {
    id: string, 
    date: string, 
    exercises: ExerciseDetail[],
    userId: string
}