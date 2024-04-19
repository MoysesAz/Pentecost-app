import { BookModel, BookInterface } from "./bookModel";
import { DSHapticSucess } from "../../design_system/components/haptics/dsHaptics";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";
import { useState, useEffect } from "react";

export const BookViewModel = () => {
    const [books, setBooks] = useState<BookModel[]>([]);
    const navigation = useNavigation<StackTypes>();

    function getMock() {
      const newBook = new BookModel({en: "pl", pt: "pl"}, "Moises", 117, "", "Salmos", "");
      setBooks([newBook]);
    }
    function getBooksApi() {
      const tokenJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiJGcmkgQXByIDE5IDIwMjQgMTY6NDk6NDkgR01UKzAwMDAubS5taXJhemV2QGdtYWlsLmNvbSIsImlhdCI6MTcxMzU0NTM4OX0.NHzGsQT-DuBNqzzgl46arxjEmCqrU4Ww-57FV70woQQ";
        fetch("https://www.abibliadigital.com.br/api/books", {
          headers: {
            'Authorization': `Bearer ${tokenJWT}`,
            'Content-Type': 'application/json' // Se necessário, ajuste o tipo de conteúdo
          },
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error('Erro ao buscar livros');
            }
            return res.json();
          })
          .then((result: BookInterface[]) => {
            const newBooks: BookModel[] = result.map((bookData: BookInterface) => (
              new BookModel(
                { en: bookData.abbrev.en, pt: bookData.abbrev.pt },
                bookData.author,
                bookData.chapters,
                bookData.group,
                bookData.name,
                bookData.testament,
              )
            ));
            setBooks(newBooks);
          })
          .catch((error) => {
            console.error('Erro:', error);
            throw error;
          });
      }
      

    function eventBookPress(paramets: BookModel): void {
        navigation.navigate("Chapters", {paramets: paramets});
        DSHapticSucess();
    };
  
    return { books, eventBookPress, getBooksApi, getMock };
  };