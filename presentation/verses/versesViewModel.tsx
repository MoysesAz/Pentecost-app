import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { VerseModal, VerseInterface, VersesModal, VersesInterface, TwoVersesModal } from "./vesesModel";
import { StackTypes } from "../../routes/stack";
import { VersePT } from ".";


export const VersesViewModel = () => {
    const [verses, setVerses] = useState<TwoVersesModal[]>([]);
    const tokenJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiJGcmkgQXByIDE5IDIwMjQgMTY6NDk6NDkgR01UKzAwMDAubS5taXJhemV2QGdtYWlsLmNvbSIsImlhdCI6MTcxMzU0NTM4OX0.NHzGsQT-DuBNqzzgl46arxjEmCqrU4Ww-57FV70woQQ";

    const navigation = useNavigation<StackTypes>();

    function getVersesMock(abbrev: string, chapter: number) {
      const newVerse1 = new VerseModal(1, "Assim foram concluidos os ceus e a terra e tudo o que neles há");
      const newVerse2 = new VerseModal(2, "Assim foram concluidos os ceus e a terra e tudo o que neles há");
      const twoVerses = new TwoVersesModal(newVerse1, newVerse2)
      setVerses([twoVerses])
    }

    async function getVersesApiPT(abbrev: string, chapter: number): Promise<VerseModal[]> {
      return new Promise((resolve, reject) => {
        fetch(`https://www.abibliadigital.com.br/api/verses/nvi/${abbrev}/${chapter}`, {
          headers: {
            'Authorization': `Bearer ${tokenJWT}`,
            'Content-Type': 'application/json' // Se necessário, ajuste o tipo de conteúdo
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Erro ao buscar versículos');
            }
            return response.json();
          })
          .then((result: VersesInterface) => {
            const newVerse: VerseModal[] = result.verses.map((verseData: VerseModal) => (
              new VerseModal(
                verseData.number, verseData.text
              )
            ));
            resolve(newVerse); // Resolve a Promise com os versículos processados
          })
          .catch((error) => {
            console.error('Erro:', error);
            reject(error); // Rejeita a Promise em caso de erro
          });
      });
    }
    
      
    async function getVersesApiEn(abbrev: string, chapter: number): Promise<VerseModal[]> {
      return new Promise((resolve, reject) => {
        fetch(`https://www.abibliadigital.com.br/api/verses/kjv/${abbrev}/${chapter}`, {
          headers: {
            'Authorization': `Bearer ${tokenJWT}`,
            'Content-Type': 'application/json' // Se necessário, ajuste o tipo de conteúdo
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Erro ao buscar versículos');
            }
            return response.json();
          })
          .then((result: VersesInterface) => {
            const newVerse: VerseModal[] = result.verses.map((verseData: VerseModal) => (
              new VerseModal(
                verseData.number, verseData.text
              )
            ));
            resolve(newVerse); // Resolve a Promise com os versículos processados
          })
          .catch((error) => {
            console.error('Erro:', error);
            reject(error); // Rejeita a Promise em caso de erro
          });
      });
    }
      
    async function createInterleavedList(newVersePT: VerseModal[], newVerseEN: VerseModal[]) {
      const interleavedList: TwoVersesModal[] = [];
      for (let i = 0; i < newVersePT.length; i++) {
        const twoVerses = new TwoVersesModal(newVersePT[i], newVerseEN[i]);
        interleavedList.push(twoVerses)     
      }
      console.log(interleavedList)
      setVerses(interleavedList);
    } 


    async function teste(abbrev: string, chapter: number) {
      try {
        const newVersePT = await getVersesApiPT(abbrev, chapter);
        const newVerseEN = await getVersesApiEn(abbrev, chapter);
        await createInterleavedList(newVersePT, newVerseEN); // Aguarde a conclusão de createInterleavedList
    
      } catch (error) {
        console.error('Erro:', error);
      }
    }
    
    

    return { verses, teste, getVersesMock};
  };