import React ,{ useEffect, useState } from 'react'
import Title from '../../pages/Dashboard/Title';

const ThresholdSetting = () => {
const [data, setData] = useState([]);
const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/setting/threshold')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const handleEdit = (item) => {
    setEditItem(item);
  };

  const handleSave = () => {
    fetch(`http://localhost:3001/setting/threshold/${editItem.location}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editItem),
    })
      .then(response => response.json())
      .then(updatedItem => {
        setData(data.map(item => (item.location === updatedItem.location ? updatedItem : item)));
        setEditItem(null);
      });
  };

  const handleDelete = () => {

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name)
    // console.log(value)
    setEditItem(prevItem => ({
      ...prevItem,
      [name]: value,
    }));
  };
  return (
    <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
<Title>Threshold Setting</Title>
 
    <table border="1" width="100%"> 
        <thead>
          <tr align="center">
            <th>Location</th>
            <th>L1 mm</th>
            <th>L2 mm</th>
            <th>L3 mm</th>
            <th>L4 mm</th>
            <th>L1 wl</th>
            <th>L2 wl</th>
            <th>L3 wl</th>
            <th>L4 wl</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.location} align="center">
              <td align="left">{item.location}</td>
              <td>{item.L1_min_mm}</td>
              <td>{item.L2_max_mm}</td>
              <td>{item.L3_max_mm}</td>
              <td>{item.L4_max_mm}</td>
              <td>{item.L1_min_wl}</td>
              <td>{item.L2_max_wl}</td>
              <td>{item.L3_max_wl}</td>
              <td>{item.L4_max_wl}</td>
              <td>
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
          <label>Location:
            <input readOnly={true} type="text" name="location" value={editItem.location}></input>
          </label><br></br>
          <table border="1" width="300px">
            <tbody>
                          <tr align="center">
              <td>Level</td>
              <td>mm</td>
              <td>wl</td>
            </tr>
            <tr align="center">
              <td>L1</td>
              <td><input
              type="text"
              name="L1_min_mm"
              value={editItem.L1_min_mm}
              onChange={handleChange}
            />
            </td>
              <td>
              <input
              type="text"
              name="L1_min_wl"
              value={editItem.L1_min_wl}
              onChange={handleChange}
            />
              </td>
            </tr>
            <tr align="center">
              <td>L2</td>
              <td><input width={'10px'}
              type="text"
              name="L2_max_mm"
              value={editItem.L2_max_mm}
              onChange={handleChange}
            /></td>
              <td>
              <input
              type="text"
              name="L2_max_wl"
              value={editItem.L2_max_wl}
              onChange={handleChange}
            />
              </td>
            </tr>
            <tr align="center">
              <td>L3</td>
              <td><input
              type="text"
              name="L3_max_mm"
              value={editItem.L3_max_mm}
              onChange={handleChange}
            /></td>
              <td>
              <input
              type="text"
              name="L3_max_wl"
              value={editItem.L3_max_wl}
              onChange={handleChange}
            />
              </td>
            </tr>
            <tr align="center">
              <td>L4</td>
              <td><input
              type="text"
              name="L4_max_mm"
              value={editItem.L4_max_mm}
              onChange={handleChange}
            />
            </td>
              <td>
              <input
              type="text"
              name="L4_max_wl"
              value={editItem.L4_max_wl}
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

export default ThresholdSetting