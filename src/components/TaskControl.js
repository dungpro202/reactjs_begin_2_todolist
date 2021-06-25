// import React, { useState } from 'react';
import TaskSearch from "./TaskSearch";
import TaskSort from "./TaskSort";

function TaskForm(props) {
    return (
        <div className="row mt-15">
            {/* SEARCH */}
           <TaskSearch/>
            {/* SORT */}
            <TaskSort/>
        </div>
    );
}

export default TaskForm;