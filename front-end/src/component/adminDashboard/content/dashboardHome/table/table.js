import React, { useState, useEffect } from 'react';
import '../../../../../assets/css/adminDashboard/table/table.scss';
import { useDispatch, useSelector } from 'react-redux';
const Table = props => {
    const dataInput = useSelector(props.state);

    const dispatch = useDispatch();
    const dataOutput = dataInput != undefined ? dataInput : [];
    const initDataShow = props.limit && dataOutput ? dataOutput.slice(0, Number(props.limit)) : dataOutput
    const [dataShow, setDataShow] = useState(initDataShow);
    let pages = 1;
    let range = [];
    if (props.limit !== undefined) {
        let page = Math.floor(dataOutput.length / Number(props.limit));
        pages = dataOutput.length % Number(props.limit) === 0 ? page : page + 1
        range = [...Array(page).keys()];
    }
    const [currPage, setCurrPage] = useState(0);

    const selectPage = page => {
        const start = Number(props.limit) * page
        const end = start + Number(props.limit)
        setDataShow(dataOutput.slice(start, end))
        setCurrPage(page)
    }
    useEffect(() => {
        dispatch(props.action);

    }, [])
    useEffect(() => {
        if (!props.limit) {
            setDataShow(initDataShow)
        }
    })
    return (
        <div className={`card-table card-table--${props.className}`}>
            <h3>
                {
                    props.title
                }
            </h3>
            <table >
                {
                    props.headData && props.renderHead ? (
                        <tbody>
                            {
                                props.headData.map((item, index) => props.renderHead(item, index))
                            }
                        </tbody>
                    ) : null
                }
                {
                    dataOutput && props.renderBody ? (
                        <tbody>
                            {
                                dataShow.map((item, index) => props.renderBody(item, index))
                            }
                        </tbody>
                    ) : null
                }
            </table>
            {
                pages > 1 ? (
                    <div className='table_pagination'>

                        {
                            range.map((item, index) => (
                                <div key={index} className={`table_pagination-item ${currPage === index ? 'active' : ''}`} onClick={() => selectPage(index)}>
                                    {item + 1}
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    );
}

export default Table;
