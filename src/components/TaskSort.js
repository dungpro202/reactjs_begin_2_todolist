// import React, { useState } from 'react';

function TaskSort(props) {
    return (

        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sắp Xếp <span className="fa fa-sort ml-5"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                        <a href="/#" role="button">
                            Tên A-Z
                        </a>
                    </li>
                    <li>
                        <a href="/#" role="button">
                            Tên Z-A
                        </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li><a href="/#" role="button">Trạng Thái Kích Hoạt</a></li>
                    <li><a href="/#" role="button">Trạng Thái Ẩn</a></li>
                </ul>
            </div>
        </div>

    );
}

export default TaskSort;