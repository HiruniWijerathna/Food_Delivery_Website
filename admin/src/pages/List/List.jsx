import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import './List.css'



const List = ({url}) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.foods)
      } else {
        setList([]); // fallback to empty array
        toast.error("Error");
      }
    } catch (err) {
      setList([]); // fallback to empty array
      toast.error("Server Error");
    }
  }

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message)
      } else {
        toast.error("Error");
      }
    } catch (err) {
      toast.error("Server Error");
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='list add flex-col'>
      <p>All Foods list</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {Array.isArray(list) && list.map((item, index) => (
          <div key={index} className='list-table-format'>
            <img src={`${url}/image/` + item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
            <p className='cursor' onClick={() => startEditing(item)}>✏️</p>
            <p className='cursor' onClick={() => removeFood(item._id)} title="Delete">🗑️</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List