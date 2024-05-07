export class StudentInfo {


    stuName?: string;
    course?: string;
    phNo?: number;


    constructor(a: string,b: string,c: number){

        this.course=b;
        this.stuName=a;
        this.phNo=c;
    }
}
