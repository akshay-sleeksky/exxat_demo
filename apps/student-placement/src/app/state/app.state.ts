import { Student } from "./student/student.model";

export interface AppState {
    student : ReadonlyArray<Student>;
}
