export interface AbbreviationInterface {
    en: string;
    pt: string;
}

export interface BookInterface {
    abbrev: AbbreviationInterface;
    author: string;
    chapters: number;
    group: string;
    name: string;
    testament: string;
}

export class AbbreviationModel implements AbbreviationInterface {
    en: string;
    pt: string;

    constructor(en: string, pt: string){
        this.en = en;
        this.pt = pt
    }
}

export class BookModel implements BookInterface {
    abbrev: AbbreviationInterface;
    author: string;
    chapters: number;
    group: string;
    name: string;
    testament: string;

    constructor(abbrev: AbbreviationInterface,
                author: string,
                chapters: number,
                group: string,
                name: string,
                testament: string,
                )  {
       this.abbrev = abbrev
       this.author = author
       this.chapters = chapters
       this.group = group
       this.name = name
       this.testament = testament
    }
}