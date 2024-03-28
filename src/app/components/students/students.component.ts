import { Component } from '@angular/core';
import { Student } from '../../models';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: ``
})
export class StudentsComponent {
  filter = {
    filtered: false,
    approvedFiltered: "estudiantes"
  }

  setFilter(approved: string) {
      return this.filter = {
        filtered: !this.filter.filtered,
        approvedFiltered: approved
      } 
  }

  resetFilter() {
    return this.filter = {
      filtered: false,
      approvedFiltered: "estudiantes"
    }
  }

  students: Student[] = [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "age": 20,
      "email": "john.doe@example.com",
      "image": "https://reqres.in/img/faces/1-image.jpg",
      "grade": 85,
      "approved": true
    },
    {
      "id": 2,
      "firstName": "Jane",
      "lastName": "Smith",
      "age": 22,
      "email": "jane.smith@example.com",
      "image": "https://reqres.in/img/faces/2-image.jpg",
      "grade": 70,
      "approved": false
    },
    {
      "id": 3,
      "firstName": "Michael",
      "lastName": "Johnson",
      "age": 21,
      "email": "michael.johnson@example.com",
      "image": "https://reqres.in/img/faces/3-image.jpg",
      "grade": 92,
      "approved": true
    },
    {
      "id": 4,
      "firstName": "Emily",
      "lastName": "Brown",
      "age": 23,
      "email": "emily.brown@example.com",
      "image": "https://reqres.in/img/faces/4-image.jpg",
      "grade": 65,
      "approved": false
    },
    {
      "id": 5,
      "firstName": "David",
      "lastName": "Wilson",
      "age": 20,
      "email": "david.wilson@example.com",
      "image": "https://reqres.in/img/faces/5-image.jpg",
      "grade": 88,
      "approved": true
    }
  ]

  trackByFn (index : number, student: any) {
    return student.id;
  }
}
