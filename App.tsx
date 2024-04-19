import React from "react";
import { useColorScheme } from "react-native";

import BooksView from "./presentation/books/index";

import { ThemeProvider } from "styled-components";
import design_system from "./design_system";
import { DSNavigation, DSNavigator, DSNavigationLink } from "./design_system/components/navigations/dsNavigations";
import StackComponent from "./routes/stack";


export default function App() {
  return <StackComponent />;
};