import React, { useState, useEffect } from 'react';

function TaskForm(props) {

    const [jobs, setJobs] = useState({
        id: '',
        name: '',
        status: false,
    });

    useEffect(() => {

        if (props.task) {
            setJobs({
                id: props.task.id,
                name: props.task.name,
                status: props.task.status,
            })
            console.log(211212)
        } else if (!props.task) {
            setJobs({
                id: '',
                name: '',
                status: false,
            })
        }

    }, [props.task]);


    const onCloseForm = () => {
        props.onSendCloseForm();
    }

    const onChange = (event) => {
        let target = event.target
        let name = target.name
        let value = target.value
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }

        setJobs({ ...jobs, [name]: value })
    }

    const onHandleSubmit = (event) => {
        event.preventDefault();
        props.onHandleSubmit(jobs);
        onClear();
        onCloseForm();
    }

    const onClear = () => {
        setJobs({ name: '', status: '' })
    }


    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">
                    <span
                        className="fas fa-times-circle text-right"
                        onClick={onCloseForm}
                    ></span>{jobs.id === '' ? 'Thêm Công Việc' : 'Cập Nhật Công Việc'}</h3>
            </div>
            <div className="panel-body">
                <form onSubmit={onHandleSubmit}>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input
                            type="text"
                            className="form-control"
                            name='name'
                            value={jobs.name}
                            onChange={onChange}
                        />
                    </div>
                    <label>Trạng Thái :</label>
                    <select
                        className="form-control"
                        required="required"
                        name='status'
                        value={jobs.status}
                        onChange={onChange}
                    >
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    <br />
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={onClear}

                        >Hủy Bỏ</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TaskForm;