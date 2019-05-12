import React from "react";


const MarvelItem = ({ name, thumbnail, description, comicCount, comicList }) => {

    // console.log(comicList)
    const comic = comicList.map((comic) => {
        return (
            <li>{comic.name}</li>
        )
    })    

  const fullThumb = `${thumbnail.path}.${thumbnail.extension}`
  return (
    <div className="ui items">
      <div className="item">
        <div className="ui small image">
          <img className="ui avatar" src={fullThumb} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="meta">
            <span className="id"></span>
            <span className="comics-available">{`Appears in ${comicCount} comic series`}</span>
          </div>
          <div className="description">
            <p>{description}</p>
            <div className="ui styled accordion">
                <div className="title">
                    <i className="dropdown icon"></i>
                    Comic titles
                </div>
                <div className="content">
                    <ul>    
                        {comic}
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarvelItem;
