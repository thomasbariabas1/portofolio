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
        return new Promise(resolve => {
            API.GetPosts(query).then((response) => {
                const tableData = {}
                tableData.data = response.docs
                tableData.page = response.page -1
                tableData.totalCount = response.totalDocs
                tableData.pageSize = response.limit
                resolve(tableData)
            })
        })
    }

    const onRowClick = (evemt, rowData)=>{console.log('rowData',rowData)}

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