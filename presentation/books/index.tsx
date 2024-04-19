import { DSBackground } from '../../design_system/components/views/dsViews';
import DSTexts from '../../design_system/components/texts/index';
import { FlashList } from "@shopify/flash-list";
import { BookViewModel } from './booksViewModel';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useEffect } from 'react';

export default function BooksView() {
    const viewModel =  BookViewModel();

    useEffect(() => {
        viewModel.getBooksApi();
      }, [])

    return (
                <DSBackground>
                    <FlashList
                        data={viewModel.books}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => {
                                viewModel.eventBookPress(item)
                            }
                            } style= {{ width: "100%", padding: 5 }} >
                                <BookContent>
                                    <BookContentAbbrev>
                                        <BookAbbrev>{item.abbrev.en.toUpperCase()}</BookAbbrev>
                                    </BookContentAbbrev>
                                    <BookContentName>
                                        <BookName>{item.name}</BookName>
                                    </BookContentName>
                                </BookContent>
                            </TouchableOpacity>
                        }
                        estimatedItemSize={2}
                        numColumns={2}
                    />
                </DSBackground>
    );
};


export const BookAbbrev = styled(DSTexts.LargeTitle)(props => ({

}));

export const BookName = styled(DSTexts.Body)(props => ({
}));

export const BookContent = styled.View(props =>({
    height: 200,
    width: "100%",
    padding: 10,
    opacity: 50,
    flex: 1,
    backgroundColor: props.theme.colors.body,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center"    
}))

export const BookContentAbbrev = styled.View(props =>({
    height: "50%",
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "flex-end"    
}))

export const BookContentName = styled.View(props =>({
    height: "50%",
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end"    
}))

