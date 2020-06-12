import React, { Component } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { ThemeProvider } from 'styled-components'
import { withRouter } from 'react-router-dom'
import { Container, GridContainer } from './styles/CoreStyles'
import SearchBar from './SearchBar'
import NightMode from './SwitchButtonNightMode'
import PlayList from './PlayList'
import PlayerVideo from './PlayerVideo'
import { darkTheme, themeLight } from './styles/ThemeBase'
import { saveNightModeToLocalStorage } from '../../helpers'

const url = 'https://www.googleapis.com/youtube/v3/search'

class StartPage extends Component {
    state = {
        term: '',
        items: [],
        loading: false,
        selectedItem: null,
        nightMode: true
    }

    async componentDidMount(){
        if(!this.state.items.length){
            const response = await axios.get(url, {
                params:{
                    q: 'raf camora',
                    key: process.env.REACT_APP_API_KEY,
                    part: 'snippet',
                    type: 'video',
                    maxResults: 25
                }
            })
            this.setState({
                items: response.data.items,
                selectedItem: response.data.items[0]
            })
            this.props.history.push(`/${response.data.items[0].id.videoId}`)
        }
        const value = localStorage.getItem('mode')
        this.setState({ nightMode: JSON.parse(value) })
    }

    selectedVideo = index => {
        this.setState({
            selectedItem: this.state.items[index]
        })
        this.props.history.push(`/${this.state.items[index].id.videoId}`)
    }

    callBackEnd = () => {
        const videoId = this.props.match.params.activeVideo
        const currentIndex = this.state.items.findIndex(video => video.id.videoId === videoId)
        const nextVideo = currentIndex === this.state.items.length -1 ? 0 : currentIndex + 1

        this.setState({
            selectedItem: this.state.items[nextVideo]
        })

        this.props.history.push(`/${this.state.items[nextVideo].id.videoId}`)
    }

    handleChange = e => {
        this.setState({ term: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.get(url, {
            params:{
                q: this.state.term,
                key: process.env.REACT_APP_API_KEY,
                part: 'snippet',
                type: 'video',
                maxResults: 25
            }
        })
        this.setState({
            items: response.data.items,
            selectedItem: response.data.items[0]
        })
        this.props.history.push(`/${response.data.items[0].id.videoId}`)
    }

    handleNightMode = () => this.setState({ nightMode: !this.state.nightMode }, saveNightModeToLocalStorage(!this.state.nightMode))

    render(){
        return(
            <ThemeProvider theme={this.state.nightMode ? darkTheme : themeLight}>
                
                <Container>

                    <SearchBar
                        term={this.state.term}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                    >
                    
                        <NightMode 
                            nightMode={this.state.nightMode}
                            handleNightMode={this.handleNightMode}
                        />
                    
                    </SearchBar>

                    
                    <GridContainer>
                        
                        <PlayerVideo
                            callBackEnd={this.callBackEnd}
                            match={this.props.match}
                            progressCallback={this.progressCallback}
                        />

                            <PlayList 
                                mode={this.state.nightMode}
                                selectedItem={this.state.selectedItem}
                                items={this.state.items}
                                selectedVideo={this.selectedVideo}
                                params={this.props.match.params}
                            />
                        
                    </GridContainer>

                </Container>

            </ThemeProvider>
        );
    }
}
export default withRouter(StartPage)