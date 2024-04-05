import { createContext } from "react";
import { searchPageContext } from "./models";

export const SearchPageContext = createContext<searchPageContext | null>(null);