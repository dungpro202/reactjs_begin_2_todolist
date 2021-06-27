 import React from 'react';
import TaskSearch from "./TaskSearch";
import TaskSort from "./TaskSort";

function TaskForm(props) {

    return (
        <div className="row mt-15">
            {/* SEARCH */}
           <TaskSearch onSearch={props.onSearch}/>
            {/* SORT */}
            <TaskSort onSort={props.onSort} />
        </div>
    );
}

export default TaskForm;