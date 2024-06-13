import React from 'react';

export default function pvdaStudenlist({ renderpvdaStudentList }) {
  console.log("Data:", renderpvdaStudentList);
  let pvdaElement = renderpvdaStudentList.map((pvdaStudent, index)=>{
return(
    <tr key={index}>
    <th scope="row">{index+1}</th>
    <td>{pvdaStudent.pvdaid}</td>
    <td>{pvdaStudent.pvdaname}</td>
    <td>{pvdaStudent.pvdaage}</td>
    <td>{pvdaStudent.pvdaphone}</td>
    <td>{pvdaStudent.pvdaemail}</td>
    <td>{pvdaStudent.pvdastatus}</td>
    <td>Edit/Delete</td>
  </tr>
)
  })
  return (
    <div>
      <h2>Danh sách SV</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">MSV</th>
            <th scope="col">Họ Tên</th>
            <th scope="col">Điện thoại</th>
            <th scope="col">Email</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Chức năng</th>
          </tr>
        </thead>
        <tbody>
       {pvdaElement}
        </tbody>
      </table>
    </div>
  );
}
