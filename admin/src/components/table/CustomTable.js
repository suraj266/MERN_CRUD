import React, { useState } from "react";
import { Table, Pagination } from "react-bootstrap";

const CustomTable = ({ data, columns, pageSize }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / pageSize);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return data.slice(startIndex, endIndex);
    };

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {getPaginatedData().map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {Object.values(row).map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                    <Pagination.Item key={pageNumber} active={pageNumber === currentPage} onClick={() => handleClick(pageNumber)}>
                        {pageNumber}
                    </Pagination.Item>
                ))}
            </Pagination>
        </div>
    );
};

export default CustomTable;