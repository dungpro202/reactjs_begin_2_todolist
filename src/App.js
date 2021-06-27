import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';

function App() {

    const [tasks, setTask] = useState([])
    const [taskedSearch, setTaskedSearch] = useState([])
    const [isDisplayfrom, setIsDisplay] = useState(false)
    const [taskEditing, setTaskEditing] = useState(null)
    const [filter, setFilter] = useState(
        {
            name: '',
            status: -1 //all:-1, active:1, deactive:0
        }
    )

    useEffect(() => {

        if (localStorage && localStorage.getItem('tasks')) {

            var tasks = JSON.parse(localStorage.getItem('tasks'))
            setTask(tasks);
        } else {
            alert('dasd')
        }

    }, []);
    const onGenerateData = () => {
        var def_tasks = [
            {
                id: guid(),
                name: 'Học lập trình',
                status: true,
            },
            {
                id: guid(),
                name: 'Đi bơi',
                status: false,
            },
            {
                id: guid(),
                name: 'Ngủ',
                status: true,
            },
        ]
        setTask(def_tasks);

        // localStorage.setItem('task',tasks)  
        localStorage.setItem('tasks', JSON.stringify(def_tasks))
    }


    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    const guid = () => {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    const onToggleForm = () => {
        if (isDisplayfrom && taskEditing !== null) {
            setIsDisplay(true)
            setTaskEditing(null)
            console.log(taskEditing)
        } else {
            setIsDisplay(!isDisplayfrom)
            setTaskEditing(null)
        }
    }

    const onOpenForm = () => {
        setIsDisplay(true)
    }

    const onCloseForm = () => {
        setIsDisplay(false)
    }

    // Nhận dữ liệu tasks từ form và cập nhật, thêm cv
    const onSubmit = (dataform) => {
        let tasks_temp = [...tasks];
        if (dataform.id === '') {
            dataform.id = guid();
            tasks_temp.push(dataform)
        } else {
            var index = findIndex(dataform.id)
            tasks_temp[index] = dataform;
        }
        setTask(tasks_temp)
        setTaskEditing(null)
        localStorage.setItem('tasks', JSON.stringify(tasks_temp));
    }


    //Update Status
    const onUpdateStatus = (id) => {
        var index = findIndex(id);
        if (index !== -1) {
            var tasks_temp = [...tasks];
            tasks_temp[index].status = !tasks_temp[index].status;
            setTask(tasks_temp)
            localStorage.setItem('tasks', JSON.stringify(tasks_temp))
        }

    }

    //Tìm index cv theo id
    const findIndex = (id) => {
        var result = -1;
        tasks.forEach((task, index) => {
            if (task.id === id) {
                result = index;
            }
        })
        return result;
    }

    //Xóa công việc
    const onDelete = (id) => {
        var index = findIndex(id);
        if (index !== -1) {
            var tasks_temp = [...tasks];
            tasks_temp.splice(index, 1);
            setTask(tasks_temp)
            localStorage.setItem('tasks', JSON.stringify(tasks_temp))
        }
        onCloseForm();
    }

    //Cập Nhật Công Việc
    const onUpdate = (id) => {
        var index = findIndex(id);
        if (index !== -1) {
            setTaskEditing(tasks[index])
        }
        onOpenForm()
    }

    //filter task
    const onFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus, 10)
        setFilter({
            name: filterName,
            status: filterStatus
        });
    }


    useEffect(()=>{
        if (filter) {
            if (filter.name) {
                var yyy = tasks.filter((task) => {
                    console.log(task.name.toLowerCase().indexOf(filter.name))
                    return task.name.toLowerCase().indexOf(filter.name) !== -1
                })
                setTaskedSearch(yyy)
            }
        }
    },[filter])
    



    /////////////////////////////////
    //Đóng, mở TaskForm 
    var elmTasksForm = isDisplayfrom
        ? <TaskForm
            onHandleSubmit={onSubmit}
            onSendCloseForm={onCloseForm}
            task={taskEditing} />
        : '';
    return (


        <div className="container">
            <div className="text-center">
                <h1>Quản Lý Công Việc</h1>
                <hr />
            </div>
            <div className="row">
                <div className={isDisplayfrom === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                    {/* FORM */}
                    {elmTasksForm}
                </div>
                <div className={isDisplayfrom === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={onToggleForm}
                    >
                        <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                    </button>&nbsp;
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={onGenerateData}>
                        Generate Data
                    </button>
                    {/* SEARCH-SORT */}
                    <TaskControl />
                    {/* LIST */}
                    <div className="row mt-15">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <TaskList tasks={filter.name?taskedSearch:tasks} onUpdateStatus={onUpdateStatus} onDelete={onDelete} onUpdate={onUpdate} onFilter={onFilter} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
