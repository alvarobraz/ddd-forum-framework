import { Entity } from "../../core/entities/entity"

interface StudentProps {
  name: string
}

// export class Student {
//   public id: string
//   public name: string

//   constructor(name: string, id?: string) {
//     this.name = name
//     this.id = id ?? randomUUID()
//   }
// }
export class Student extends Entity<StudentProps> {
}