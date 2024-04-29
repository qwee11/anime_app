import { useContext, useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap';
import { SearchPageContext } from '../SearchPageContext';

const DisplayPagination = () => {
    const {states, statesSetters, utils} = useContext(SearchPageContext)!;

    const currentPage = states.currentPage;
    const pageMax = utils.last_visible_page;
    const setCurrentPage = statesSetters.setCurrentPage

    const [displayPages, setDisplayPages] = useState<number[]>([]);

    const countDisplayPages = () => {
        if (currentPage === pageMax) {
            setDisplayPages([pageMax - 2, pageMax - 1, pageMax]);
            return false;
        }
        if (currentPage === 1) {
            setDisplayPages([1, 2, 3])
            return false
        }

        setDisplayPages([currentPage - 1, currentPage, currentPage + 1]);
    }

    useEffect(() => {
        countDisplayPages()
    }, [currentPage])


    const increasePage = () => {
        if (currentPage === pageMax) {
            return false
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

    const decreasePage = () => {
        if (currentPage === 1) {
            return false
        } else {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <Pagination  >
            <Pagination.First onClick={() => setCurrentPage(1)} />
            <Pagination.Prev onClick={decreasePage} />
            {displayPages.map(e => {
                if (e <= 0) {
                    return false;
                }
                if (e >= pageMax + 1) {
                    return <Pagination.Item disabled key={e} >{e}</Pagination.Item>
                } else {
                    return (
                        <Pagination.Item key={e} onClick={() => setCurrentPage(e)} >{e}</Pagination.Item>
                    )
                }
            })}
            <Pagination.Next onClick={increasePage} />
            <Pagination.Last onClick={() => setCurrentPage(pageMax)} />
        </Pagination>
    );
};

export default DisplayPagination;