export interface getStudent {
    data:    Student;
}

export interface Student {
    id:        number;
    firstName: string;
    lastName:  string;
    age:       number;
    email:     string;
    image:     string;
    grade:     number;
    approved:  boolean;
}
