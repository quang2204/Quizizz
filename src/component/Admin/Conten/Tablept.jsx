import React, { useEffect, useState } from "react";
import { getAlluser, Phantrang } from "../../../Server/ApiServer";
import ReactPaginate from "react-paginate";

function Tablept(props) {
  const handlePageClick = (event) => {
    props.fetchListuserPage(+event.selected + 1);
    console.log(`User requested page number ${event.selected}`);
    // props.setCurrentPage(+event.selected + 1);
  };

  const { listuser, pageCount } = props;

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col" className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {listuser &&
            listuser.length > 0 &&
            listuser.map((item, index) => {
              return (
                <tr key={`table-user-${index}`}>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td className="text-center">
                    <button
                      className="bg-indigo-500 border-none text-white hover:bg-sky-300 py-1 px-3 rounded-lg"
                      onClick={() => props.handleclick(item)}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => props.deletes(item)}
                      className="ml-4 bg-red-600 border-none text-white hover:bg-red-900 py-1 px-3 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          {listuser && listuser.length === 0 && (
            <tr>
              <td colSpan={"4"}>Không có dữ liệu</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex justify-center">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          //  forcePage={props.CurrentPage > 0 ? props.CurrentPage - 1 : 0}
        />
      </div>
    </div>
  );
}

export default Tablept;
