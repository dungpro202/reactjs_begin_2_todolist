
function TaskItem(props) {

    var{task,index}=props;// var task = props.task ; var index = props.index

    return (
        <tr>
            <td>{index+1}</td>
            <td>{task.name}</td>
            <td className="text-center">
                <span className={task.status===true?'label label-success':'label label-danger'}>
                {task.status===true?'Kích Hoạt':'Ẩn'}
                </span>
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-warning">
                    <span className="fa fa-pencil mr-5"></span>Sửa
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger">
                    <span className="fa fa-trash mr-5"></span>Xóa
                </button>
            </td>
        </tr>
    );
}

export default TaskItem;

