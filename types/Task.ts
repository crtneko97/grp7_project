export interface Task {
  taskTitle: string;
  date: Date;
  time: {
    start: string;
    end: string;
  };
}


/*
    1. Namn på aktivitet = taskTitle - string
    2. Datum = Datum -> 22 April 2023, moment? Datenow string
    3. Tid = Tid 00:00 - 00:00
    4. Skapa aktivitet.
*/