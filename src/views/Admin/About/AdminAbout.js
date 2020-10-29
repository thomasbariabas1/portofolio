import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from "react-router-dom";
import API from "../../../api/API";
import Table from "../../../components/Table";
import {Button} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Add";
import {constructEditorsData} from "../../../util/posts";

const columns = [
    {
        title: 'About',
        field: 'about',
        render: (rowData)=>constructEditorsData(rowData.about)
    },
    {
        title: 'Active',
        field: 'active',
        width: '100px'
    }
]
const AdminAbout = props => {
    const history = useHistory()

    const fetchData = (query) => {
        return new Promise(resolve => {
            API.GetAbouts(query).then((response) => {
                const tableData = {}
                tableData.data = response.docs.map(({...about})=>about)
                tableData.page = response.page - 1
                tableData.totalCount = response.totalDocs
                tableData.pageSize = response.limit
                resolve(tableData)
            })
        })
    }

    const onRowClick = (evemt, rowData) => {
        history.push(`/admin/about/${rowData._id}`)
    }

    return (
        <div>
            <Table title={<Button onClick={() => history.push('/admin/about/create')}><InboxIcon/> Add</Button>}
                   columns={columns}
                   onRowClick={onRowClick}
                   data={fetchData}/>
        </div>
    );
}

AdminAbout.propTypes = {
    
};

export default AdminAbout;