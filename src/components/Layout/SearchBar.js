import React from 'react'
import {
    SearchBarSegment, FormContainer, Input
} from './styles/SearcBarStyles'

const SearchBar = ({ term, handleSubmit, handleChange, children }) => (
    <SearchBarSegment>
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <Input 
                    type="text"
                    placeholder="Search youtube..."
                    value={term}
                    onChange={handleChange}
                />
            </form>
        </FormContainer>
        {children}
    </SearchBarSegment>
);
export default SearchBar