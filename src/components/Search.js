import React, { useState } from 'react';
import '../styles/Search.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function Search({ search, isLoading }) {
    
    const [query, setQuery] = useState('');

    return (
        <div className="search">
            <div className="search-area">
                <input
                    className="search-box"
                    placeholder="search.."
                    onChange={e => setQuery(e.target.value)}
                    />
                <button
                    className="search-btn"
                    onClick={() => search(query)}
                    disabled={isLoading}
                    >
                        { !isLoading && <FontAwesomeIcon icon={faSearch} /> }
                        { isLoading && <FontAwesomeIcon icon={faSpinner} className="spin" /> }
                    </button>
            </div>
        </div>
    )
}
