import React ,{ useEffect, useState } from 'react';
import Title from '../../pages/Dashboard/Title';


const PointSetting = () => {
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);

  
    useEffect(() => {
      fetch('http://localhost:3001/points')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);
  
    const handleEdit = (item) => {
      setEditItem(item);
    };
  
    const handleSave = () => {
      fetch(`http://localhost:3001/setting/point/${editItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editItem),
      })
        .then(response => response.json())
        .then(updatedItem => {
          console.log(item.id)
          console.log(updatedItem.id)
          setData(data.map(item => (item.id === updatedItem.id ? updatedItem : item)));
          setEditItem(null);
          console.log("EditItem:", editItem)
        });
    };

    const handleDelete = () => {

    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditItem(prevItem => ({
        ...prevItem,
        [name]: value,
      }));
    };
    return (
  <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
  <Title>Point Setting</Title>
   
      <table border="1" width="100%">
          <thead>
            <tr align="center">
              <th>Location</th>
              <th>Point</th>
              <th>Point X</th>
              <th>Point Y</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.location}</td>
                <td>{item.point}</td>
                <td align="center">{item.pointX}</td>
                <td align="center">{item.pointY}</td>
                <td align="center">
                  <button onClick={() => handleEdit(item)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br></br>
        {editItem && (
          <div className="edit-form">
            <h5>Edit Item</h5>
            <table>
              <tbody>
                <tr>
                <td>Location:</td>
                <td><input
                type="text"
                name="location"
                value={editItem.location}
                onChange={handleChange}
              /></td>
              </tr>
              <tr>
                <td>Point:</td>
                <td><input
                type="text"
                name="point"
                value={editItem.point}
                onChange={handleChange}
              /></td>
              </tr>
              <tr>
                <td>Point X:</td>
                <td>
                <input
                type="text"
                name="pointX"
                value={editItem.pointX}
                onChange={handleChange}
              />
                </td>
              </tr>
              <tr>
                <td>Point Y:</td>
                <td>
                <input
                type="text"
                name="pointY"
                value={editItem.pointY}
                onChange={handleChange}
              />
                </td>
              </tr>
              </tbody>
              
            </table>
           <br></br>
            <button onClick={handleSave}>Update</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
    )
}

export default PointSetting