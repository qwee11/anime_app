import React, { useContext } from 'react'
import { Form } from 'react-bootstrap';
import { SearchPageContext } from '../SearchPageContext';

const years: number[] = [];
(() => {
    const date = new Date;
    for (let i = date.getFullYear(); i > 1920; i--) {
        years.push(i);
    }
})()

const SelectYears = () => {
    const searchPageContext = useContext(SearchPageContext)!;

    return (
        <Form.Select onChange={e => searchPageContext.statesSetters.setChoosenYear(+e.target.value === 0 ? null : +e.target.value)} aria-label="years select">
            <option value={0} >All years</option>
            {years.map(year => {
                if (year === searchPageContext.states.choosenYear) {
                    return <option key={year} className='bg-primary text-light' value={year}>{year}</option>
                } else {
                    return <option key={year} value={year}>{year}</option>
                }
            })}
        </Form.Select>
    )
}

export default SelectYears