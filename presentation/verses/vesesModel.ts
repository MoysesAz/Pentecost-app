import { NumberChapter } from "../chapters";

export interface VerseInterface {
    number: number,
    text: string
}

export interface ChapterInterface {
    abbrev: string,
    chapter: number
}

export class ChapterModel implements ChapterInterface {
    abbrev: string;
    chapter: number;

    constructor(abbrev: string, chapter: number) {
        this.abbrev = abbrev;
        this.chapter = chapter;
    }
}

export class VerseModal implements VerseInterface {
    number: number;
    text: string;

    constructor(
        number: number,
        text: string) {
            this.number = number
            this.text = text
    }
    
}

export interface VersesInterface {
    verses: VerseModal[]

}

export class VersesModal implements VersesInterface {
    verses: VerseModal[]

    constructor(
        verses: VerseModal[]
    ) {
        this.verses = verses
    }
}

export interface TwoVersesInterface {
    versePT: VerseModal;
    verseEN: VerseModal;
}

export class TwoVersesModal implements TwoVersesInterface {
    versePT: VerseModal;
    verseEN: VerseModal;

    constructor(versePT: VerseModal, verseEN: VerseModal){
        this.versePT = versePT
        this.verseEN = verseEN
    }
}