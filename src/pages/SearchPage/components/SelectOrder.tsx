import React, { useContext } from 'react'
import { Form } from 'react-bootstrap';
import { SearchPageContext } from '../SearchPageContext';

const orderValues = ['title', 'start_date', 'end_date', 'episodes', 'score', 'popularity']

const SelectOrder = () => {
    const searchPageContext = useContext(SearchPageContext)!;

    const setChoosedOrder = (e: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
        const element = e.target as HTMLSelectElement;
        searchPageContext.statesSetters.setChoosenOrder(element.value === 'none' ? null : element.value)
    }

    return (
        <div>
            <Form.Select
                className='capitalize'
                onClick={e => setChoosedOrder(e)}
            >
                <option disabled >Order</option>
                <option value={'none'} >None</option>
                {orderValues.map(order => {
                    if (order === searchPageContext.states.choosenOrder) {
                        return <option key={order} className='bg-primary text-light capitalize' value={order}>{order.split('_').join(' ')}</option>
                    }
                    return <option key={order} className='capitalize' value={order}>{order.split('_').join(' ')}</option>
                })}
            </Form.Select>
        </div>
    );
};

export default SelectOrder;