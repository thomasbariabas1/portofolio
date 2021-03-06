import React from 'react';
import PropTypes from 'prop-types';
import Table from "../../../components/Table";
import InboxIcon from "@material-ui/icons/Add";
import {Button} from "@material-ui/core";
import API from "../../../api/API";
import {useHistory} from "react-router-dom";

const columns = [
    {
        title: 'Title',
        field: 'title'
    }
]
const AdminPosts = props => {
    const history = useHistory()

    const fetchData = (query) => {
        return API.GetPosts(query).then((response) => {
                const tableData = {}
                tableData.data = response.docs.map(({ ...post})=>post)
                tableData.page = response.page -1
                tableData.totalCount = response.totalDocs
                tableData.pageSize = response.limit
                return tableData
            })
    }

    const onRowClick = (event, rowData)=>{history.push(`/admin/posts/${rowData._id}`)}

    return (
        <div>
        <Table title={<Button onClick={()=>history.push('/admin/posts/create')}><InboxIcon/> Add</Button>}
               columns={columns}
               onRowClick={onRowClick}
               data={fetchData}/>
        </div>
    );
};

AdminPosts.propTypes = {
    
};

export default AdminPosts;