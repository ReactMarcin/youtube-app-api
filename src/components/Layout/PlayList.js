import React, { useState, useEffect } from 'react'
import {
    SectionList, ListHeader, ContainerList, List, ListItem, Img, Button
} from './styles/PlayListStyles'

const PlayList = ({ selectedItem, items, selectedVideo, params, mode }) => {
    const [currentItems,setCurrentItems] = useState(1)
    const [itemsPerPage] = useState(5)

    useEffect(() => {
        for(let x = 0; x <= items.length -1; x++){
            items[x]._id = x
        }
    })
    
    const indexOfLastPost = currentItems * itemsPerPage
    const indexOfFirstPost = indexOfLastPost - itemsPerPage
    const currentItem = items.slice(indexOfFirstPost, indexOfLastPost)

    const totalPages = Math.ceil(items.length / itemsPerPage)

    const nextPlayList = () => setCurrentItems(currentItems + 1)
    const prevPlayList = () => setCurrentItems(currentItems - 1)

    return(
    <SectionList>
        <ListHeader>
            <p>
                <span>
                    {selectedItem ? selectedItem.snippet.title.substring(0, selectedItem.snippet.title.length / 2) : null} ...
                </span>
            </p>
        </ListHeader>

        <ContainerList>

            <Button
                mode={mode}
                right
                totalPages={totalPages}
                currentItems={currentItems}
                onClick={nextPlayList}
            >
                &#10095;
            </Button>

            <Button
                mode={mode}
                left
                currentItems={currentItems}
                onClick={prevPlayList}
            >
                &#10094;
            </Button>

            {currentItem.map((item) => (<List key={item._id} onClick={() => selectedVideo(item._id)} active={item.id.videoId === params.activeVideo ? true : false}>
                <ListItem>
                    {item._id + 1}
                </ListItem>
                <ListItem>
                    <Img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
                </ListItem>
                <ListItem>
                    <p>
                        {item.snippet.title}
                    </p>
                </ListItem>
            </List>))}
        </ContainerList>
    </SectionList>
    );
}
export default PlayList