import './App.css';
import {React,useEffect,useState} from 'react'
import axios from 'axios';
import NhmStudenlist from './components/NhmStudenlist';


function NhmApp() {

const [nhmStudenlist, setNhmStudenList]=useState([]);
const nhmGetStudent = async () => {
  try {
    const response = await axios.get("https://666a5d097013419182ceff5e.mockapi.io/api/nhmv1/nhmStudent");
    setNhmStudenList(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
useEffect(() => {
  nhmGetStudent();
}, []);
  return (
    <div className="container border mt-5 p-3">
      <h2 className='text-center'>Xử lý các chức năng CRUD - Hook</h2>
      <hr/>
      <NhmStudenlist renderNhmStudentList = {nhmStudenlist}/>
    </div>
  );
}

export default NhmApp;
