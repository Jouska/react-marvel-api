import React from 'react'
import MarvelItem from './MarvelItem'

const MarvelList = ({ getList, characterList }) => {
    const renderedList = characterList.map(
        (character) => {
            return (
                <MarvelItem 
                    key={character.id} 
                    name={character.name}
                    thumbnail={character.thumbnail}
                    description={character.description}
                    comicCount={character.comics.available}
                    comicList={character.comics.items}
                />
            )
        }
    )

    return (
        <div>
            <button onClick={() => getList()} className="ui button">Render</button>
            <div>{renderedList}</div>
        </div>
    )
}

export default MarvelList