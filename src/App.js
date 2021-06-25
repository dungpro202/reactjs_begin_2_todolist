import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';

function App() {

    const [tasks, setTask] = useState([])
    const [isDisplayfrom, setIsDisplay] = useState(false)

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
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }


    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    const guid = () => {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    const onToggleForm = () => {
        setIsDisplay(!isDisplayfrom)
    }

    const onCloseForm = () => {
        setIsDisplay(false)
    }
    const onSubmit=(dataform)=> {
        dataform.id=guid(); 
        // tasks.push(dataform)
        setTask([...tasks,dataform])
        
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }

    var elmTasksForm = isDisplayfrom
        ? <TaskForm onHandleSubmit={onSubmit} onSendCloseForm={onCloseForm} />
        : '';
    console.log('render')
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
                            <TaskList tasks={tasks} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
