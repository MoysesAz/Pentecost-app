import React from "react";
import { useColorScheme } from "react-native";

import BooksView from "../presentation/books/index";

import { ThemeProvider } from "styled-components";
import design_system from "../design_system";
import { DSNavigation, DSNavigator, DSNavigationLink } from "../design_system/components/navigations/dsNavigations";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ChaptersView } from "../presentation/chapters";
import { BookModel } from "../presentation/books/bookModel";
import VersesView from "../presentation/verses";
import { ChapterModel } from "../presentation/verses/vesesModel";


function appDelegate() {
    const deviceTheme = useColorScheme();
    let colors;
  
    if (deviceTheme == 'light') {
      colors = design_system.tokens.colors.lightColors
    } else {
      colors = design_system.tokens.colors.darkColors
    }
  
    return (
      {
        colors: colors,
        fonts: design_system.tokens.fonts,
        spacings: design_system.tokens.spacings,
      }
    );
}

export type StackNavigation = {
    Books: undefined,
    Chapters: {paramets: BookModel},
    Verses: {paramets: ChapterModel}
}


export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent() {
    const luxus = appDelegate();

    return (
        <ThemeProvider theme={luxus}>
        <DSNavigation>
          <DSNavigator>
            <DSNavigationLink name="Books" component={
              BooksView
            } options={{
              title: 'Bible',
              headerStyle: {
                backgroundColor: luxus.colors.background,
              },
              headerTintColor: luxus.colors.fontColor,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />

            <DSNavigationLink name="Chapters" component={
              ChaptersView
            } 
              options={{
              title: 'Chapters',
              headerStyle: {
                backgroundColor: luxus.colors.background,
              },
              headerTintColor: luxus.colors.fontColor,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }
            } />
            <DSNavigationLink name="Verses" component={
              VersesView
            } 
              options={{
              title: 'Verses',
              headerStyle: {
                backgroundColor: luxus.colors.background,
              },
              headerTintColor: luxus.colors.fontColor,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }            } />
          </DSNavigator>
        </DSNavigation>
      </ThemeProvider>
    );
}