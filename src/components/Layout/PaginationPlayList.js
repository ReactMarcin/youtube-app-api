import React, { useState } from 'react'

const PaginationList = ({ items, selectedItem, selectedVideo, params }) => {
    const [currentItems,setCurrentItems] = useState(1)
    const [itemsPerPage] = useState(5)

    const indexOfLastPost = currentItems * itemsPerPage
    const indexOfFirstPost = indexOfLastPost - itemsPerPage
    const currentItem = items.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = pageNumber => setCurrentItems(pageNumber)

    return(
        <div>
            {/* {currentItem.map((item,index) => (
                <PlayList 
                    key={index}
                    selectedItem={selectedItem}
                    items={items}
                    selectedVideo={selectedVideo}
                    params={params}
                />
            ))} */}
        </div>
    );
}
export default PaginationList