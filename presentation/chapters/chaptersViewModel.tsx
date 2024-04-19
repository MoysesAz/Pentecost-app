import { DSHapticSucess } from "../../design_system/components/haptics/dsHaptics";
import { BookModel } from "../books/bookModel";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";

export const ChaptersViewModel = (book: BookModel) => {
    const Book: BookModel = book
    const navigation = useNavigation<StackTypes>();

    const listChapters: number[] = [...Array(Book.chapters).keys()].map((_, index) => index + 1);
    
    function eventChapterPress(abbrev: string, chapter: number) {
        navigation.navigate('Verses', {paramets: {abbrev: abbrev, chapter: 4}});
        DSHapticSucess();
      };

    return {eventChapterPress, Book, listChapters};
}