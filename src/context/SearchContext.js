import {CreateContext} from 'react';

export const SearchContext = createContext({
    term: '',
    handleSearch: () => {}
})