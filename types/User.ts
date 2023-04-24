
export type User = {
  email: string
  password: string
}


/*
    Vad är types/user.ts ?

    + Definerar en datatyp
    + Exporterar datatypen vilket gör att vi
      kan importera den fritt inom hela projektet(globalt)

    Värt att notera:

    - Eftersom att den är global, så kan vi nu återvända
      denna datatyp så multipla ställen istället för att
      definera om den inom varje fil där vi använder 'User'
*/