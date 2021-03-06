import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from "material-table";

const Table = ({title, columns, data, onRowClick}) => {
    console.log('data', data)
    return (
        <div style={{ maxWidth: "100%" }}>
            <MaterialTable
                columns={columns}
                data={data}
                options={{
                    search: false
                }}
                onRowClick={onRowClick}
                title={title}/>
        </div>
    );
};

Table.propTypes = {
    
};

export default Table;