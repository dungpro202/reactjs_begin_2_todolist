import { useState } from 'react'
import TaskItem from './TaskItem';

function TaskList(props) {


    const [filter, setFilter] = useState(
        {
            filterName: '',
            filterStatus: -1 //all:1, active:1, deactive:0
        }
    )


    
    const onChange=(e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        props.onFilter(
            name==='filterName'?value:filter.filterName,
            name==='filterStatus'?value:filter.filterStatus,
        )
        setFilter({ ...filter, [name]: value })
    }

    // if(filter){
    //     if(filter.name){
    //     console.log('ww')

    //         props.tasks.filter((task)=>{
                
    //             console.log(task.name.toLowerCase().indexOf(filter.name))
    //             return task.name.toLowerCase().indexOf(filter.name) !== -1
    //         })
            
    //     }

    // }


    var elmTasks = props.tasks.map((task, index) => {
        return <TaskItem
            key={task.id}
            index={index}
            task={task}
            onUpdateStatus={props.onUpdateStatus}
            onDelete={props.onDelete}
            onUpdate={props.onUpdate}
        />
    })
    return (
        <table className="table table-bordered table-hover mt-15">
            <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Trạng Thái</th>
                    <th className="text-center">Hành Động</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            name="filterName"
                            value={filter.filterName}
                            onChange={onChange}
                        />
                    </td>
                    <td>
                        <select
                            className="form-control"
                            name="filterStatus"
                            value={filter.filterStatus}
                            onChange={onChange}

                        >
                            <option value="-1">Tất Cả</option>
                            <option value="0">Ẩn</option>
                            <option value="1">Kích Hoạt</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
                {elmTasks}
            </tbody>
        </table>
    );
}

export default TaskList;
