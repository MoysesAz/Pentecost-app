import * as React from 'react';
import { DSBackground } from '../../design_system/components/views/dsViews';
import { FlashList } from '@shopify/flash-list';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import DSTexts from '../../design_system/components/texts/index';
import { ChaptersViewModel } from './chaptersViewModel'; 
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { StackNavigation } from '../../routes/stack';


export function ChaptersView({route, navigation}: NativeStackScreenProps<StackNavigation, 'Chapters'>) {
  const viewModel = ChaptersViewModel(route.params.paramets);

    return (
      <DSBackground>
          <FlashList
            data={viewModel.listChapters}
            renderItem={({ item }) =>
              <TouchableOpacity onPress={() => {
                  viewModel.eventChapterPress(viewModel.Book.abbrev.pt, item)
              }} style= {{ width: "100%", padding: 5}} >
                <NumberChapterContent>
                  <NumberChapter>{item}</NumberChapter>
                </NumberChapterContent>
              </TouchableOpacity>
            }
            numColumns={6}
            estimatedItemSize={30}
            contentContainerStyle={{paddingHorizontal: 10, paddingBottom: 400}}
        />
      </DSBackground>
    );
  }

  export const NumberChapter = styled(DSTexts.LargeTitle)(props => ({

  }));
  
  export const NumberChapterContent= styled.View(props =>({
    background: props.theme.colors.body,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: 50,
    height: 50,
    margin: 5,
}))