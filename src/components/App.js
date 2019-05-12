import React from 'react'
import marvel from '../api/marvel'
import MarvelList from './MarvelList'
import './App.css'

class App extends React.Component {
    state = { characterList: [] }

    getList = async () => {
        
        const getList = await marvel.get(
        '/v1/public/characters')
        this.setState({ 
            characterList: getList.data.data.results 
        })
        console.log(this.state.characterList)
    }

    componentDidMount() {
        // this.getList()
    }

    render() {
        return (
            <div className="ui container">
                <MarvelList getList={this.getList} characterList={this.state.characterList} />
            </div>
        )
    }
}

export default App