export interface IRegnskabPost {
    Id: Number;
    PostId: string;
    Linjenummer: Number;
    Enhed: string;
    Tekst: string;
    Maengde: Number;
    Pris: Number;
    Faktor: Number;
    Linjetotal: Number;
    Funktion: string,
    ParentId: Number;
}