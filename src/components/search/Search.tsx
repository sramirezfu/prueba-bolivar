import React, { FC, useState } from 'react'

interface Props {
    onNewSearch: (value: string) => void,
}

const SearchCp: FC<Props> = ({ onNewSearch }) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value);
    }
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (inputValue.length <= 1) return;
        onNewSearch(inputValue.trim());
    }

    return (
        <div className="max-w-[30%] sm:max-w-[100%] flex-1 px-1 ml-4">
            <form onSubmit={onSubmit} className="w-full flex sm:flex-col">
                <label htmlFor="search-field" className="sr-only">
                    Search
                </label>
                <input
                    className="block sm:my-3 w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Busca tus artistas favoritos..."
                    type="search"
                    value={inputValue}
                    onChange={onInputChange}
                />
                <button type={"submit"} className='rounded-md ml-4 bg-cb-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Buscar</button>
            </form>
        </div >
    )
}

export default SearchCp;