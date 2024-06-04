import React, { useEffect, useState } from "react";
import Loading from "../../Loading";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useNavigate } from "react-router-dom";

function Tablequizz(props) {
  const navigate = useNavigate();
  const { listquizz } = props;
  return (
    <div className="pt-5">
      {listquizz &&
        listquizz.length > 0 &&
        listquizz.map((item, index) => {
          return (
            <div className="pb-3 " key={index}>
              <div className="flex border-solid border-2 items-center p-2 gap-3 rounded-md">
                <div>
                  <img
                    src={`data:image/jpeg;base64,${item.image}`}
                    alt=""
                    className="max-w-[150px]"
                  />
                </div>
                <div className="flex flex-col gap-[6px] w-full">
                  <div className="flex items-center justify-between">
                    <p
                      className=" uppercase px-2 h-5 rounded-full flex justify-center text-xs "
                      style={{
                        backgroundColor: "rgba(9, 9, 9, 0.05)",
                        border: "1px solid #09090933",
                      }}
                    >
                      {item.difficulty}
                    </p>
                    <div className="block  ">
                      {["Secondary"].map((variant) => (
                        <DropdownButton
                          as={ButtonGroup}
                          key={variant}
                          id={`dropdown-variants-${variant}`}
                          variant={variant.toLowerCase()}
                          title=""
                          size="sm"
                        >
                          <Dropdown.Item eventKey="1">
                            <i className="fa-regular fa-heart pr-2"></i>
                            Thích
                          </Dropdown.Item>

                          <Dropdown.Item
                            eventKey="2"
                            onClick={() => props.handleupdateq(item)}
                          >
                            <i className="fa-regular fa-folder"></i> Thêm người
                            dùng
                          </Dropdown.Item>
                          <Dropdown.Item
                            eventKey="3"
                            onClick={() => props.deletes(item)}
                          >
                            <i className="fa-solid fa-trash"></i> Xóa
                          </Dropdown.Item>
                        </DropdownButton>
                      ))}
                    </div>
                  </div>
                  <div className="text-black font-bold">{item.name}</div>
                  <div className="flex justify-end gap-3">
                    <button
                      className=" uppercase px-2 py-[6px] rounded-md flex justify-center text-xs font-semibold cursor-pointer"
                      style={{
                        backgroundColor: "rgba(9, 9, 9, 0.05)",
                      }}
                      onClick={() =>
                        navigate(`/admin/question/${item.id}`, {
                          state: {
                            quizzd: item.description,
                            id: item.id,
                            img:item.image
                          },
                        })

                      }
                    >
                      Chỉnh sửa câu hỏi
                    </button>
                    <p
                      className=" uppercase px-2 py-[6px] rounded-md flex justify-center text-xs font-semibold cursor-pointer"
                      style={{
                        backgroundColor: "rgba(9, 9, 9, 0.05)",
                      }}
                      onClick={() => props.handleclick(item)}
                    >
                      Chỉnh sửa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Tablequizz;
