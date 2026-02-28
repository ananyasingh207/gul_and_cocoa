import { useState } from 'react'
import './searchbar.css'

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        const value = e.target.value
        setQuery(value)
        onSearch(value)
    }

    const handleClear = () => {
        setQuery('')
        onSearch('')
    }

    return (
        <div className="search-bar-wrapper">
            <div className={`search-bar ${query ? 'has-value' : ''}`}>
                <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search our menu..."
                    value={query}
                    onChange={handleChange}
                />
                {query && (
                    <button className="search-clear" onClick={handleClear} aria-label="Clear search">
                        ×
                    </button>
                )}
            </div>
        </div>
    )
}

export default SearchBar
