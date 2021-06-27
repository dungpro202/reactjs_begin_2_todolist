import React, { useEffect, useState } from 'react';

function TaskSort(props) {

    const [sort, setSort] = useState({
        by: 'name',
        value: 1
    })

    // useEffect(() => {
    //     console.log('Prop Received: ', props);
    // }, [props])


    const onClickSort = (sortBy, sortValue) => {
        setSort({
            by: sortBy,
            value: sortValue
        })
        props.onSort(sortBy,sortValue)
    }
    return (

        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sắp Xếp <span className="fa fa-sort ml-5"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li
                        onClick={() => onClickSort('name', 1)}
                    >
                        <a href="/#" role="button"
                            className={sort.by === 'name' & sort.value === 1 ? 'sort_selected' : ''}>
                            <span className="fa fa-sort-alpha-asc pr-5">
                                Tên A-Z
                            </span>
                        </a>
                    </li>
                    <li
                        onClick={() => onClickSort('name', -1)}

                    >
                        <a href="/#" role="button"
                            className={sort.by === 'name' & sort.value === -1 ? 'sort_selected' : ''}
                        >

                            <span className="fa fa-sort-alpha-asc pr-5">
                                Tên Z-A
                            </span>
                        </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li
                        onClick={() => onClickSort('status', 1)}
                    >
                        <a href="/#" role="button"
                            className={sort.by === 'status' & sort.value === 1 ? 'sort_selected' : ''}
                        >
                            Trạng Thái Kích Hoạt</a>
                    </li>
                    <li
                        onClick={() => onClickSort('status', -1)}
                    >
                        <a href="/#" role="button"
                            className={sort.by === 'status' & sort.value === -1 ? 'sort_selected' : ''}
                        >
                            Trạng Thái Ẩn</a>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default TaskSort;