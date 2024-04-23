import { DSBackground } from '../../design_system/components/views/dsViews';
import DSTexts from '../../design_system/components/texts/index';
import { FlashList } from "@shopify/flash-list";
import styled from 'styled-components/native';
import { useEffect } from 'react';
import { VersesViewModel } from './versesViewModel';
import { StackNavigation } from '../../routes/stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';

export default function VersesView({route, navigation}: NativeStackScreenProps<StackNavigation, 'Verses'>) {
    const viewModel =  VersesViewModel();

    useEffect(() => {
        viewModel.teste(route.params.paramets.abbrev, route.params.paramets.chapter);
      }, [])

    return (
                <DSBackground>
                    <FlashList
                        data={viewModel.verses}
                        renderItem={({ item }) =>  
                            <Content>
                                <VersesContent>
                                    <VerseContentPT>
                                        <VersePT>{item.versePT.number} - {item.versePT.text}</VersePT>
                                        <Flag>🇧🇷</Flag>
                                    </VerseContentPT>
                                    <VerseContentEN>
                                        <VerseEN>{item.versePT.number} - {item.verseEN.text}</VerseEN>
                                        <Flag>🇺🇸</Flag>
                                    </VerseContentEN>
                                </VersesContent>
                            </Content>
                        }
                        estimatedItemSize={100}
                        numColumns={1}
                    />
                </DSBackground>
    );
};  

export const Flag = styled(DSTexts.Body)(props => ({
    paddingRight: 20
}));

export const Content = styled.View(props =>({
    padding: 15,
    margin: 10,
    opacity: 50,
    backgroundColor: props.theme.colors.body,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center", 
    alignItems: "center"
}))

export const VersesContent = styled.View(props =>({
    borderRadius: 8,
    flexDirection: 'column',
}))

export const VerseContentPT = styled.View(props =>({
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: "flex-start",
    padding: 20,
}))

export const VersePT = styled(DSTexts.Body)(props => ({
    textAlign: "left",
    width: "100%",
}));

export const VerseContentEN = styled.View(props =>({
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: "flex-start",
    padding: 20
}))

export const VerseEN = styled(DSTexts.Body)(props => ({
    textAlign: "left",
    width: "100%",
}));


export const ControlContent = styled.View(props =>({
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: "center", 
    background: "blue",
}))