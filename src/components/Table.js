import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from "material-table";

const Table = ({title, columns, data, onRowClick}) => {
    return (
        <div style={{ maxWidth: "100%" }}>
            <MaterialTable
                columns={columns}
                data={data}
                onRowClick={onRowClick}
                title={title}/>
        </div>
    );
};

Table.propTypes = {
    
};

export default Table;