import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"
import { data } from "./config_firebase";
import { getDatabase, ref, set, get, child, remove, update } from "firebase/database";

function App() {
  const [getData, setData] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    get(ref(db, 'users')).then((xem) => {
      if (xem.exists()) {
        setData(xem.val());
      }
    });

  }, []);
console.log(getData.length);
  function AddFirebase() {
    const db = getDatabase();
    set(ref(db, 'users/'+getData.length), {
      id: getData.length+2,
      name: "vo add ++",
    });
  }
  function Remove(id){
    // const id=""+idc;
    // alert(typeof id)
    const db = getDatabase();
    const consider=window.confirm("We'll remove it !");
    if(consider){
      remove(ref(db, `users/${id}`));
    };
  };
  function Update(id){
    // alert(id)
    const db = getDatabase();
    set(ref(db, 'users/'+ +id+1), {
      id: id,
      name: "update id: "+id,
    });
  };
  return (
    <div className="App">
      <button onClick={() => AddFirebase()}>Thêm mới</button>
      <table className='bg-red-500 text-red-500'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {getData.map((get) => {
            return (
              <tr key={get.id}>
                <td>{get.id}</td>
                <td>{get.name}</td>
                <td className="btn">
                  <button onClick={()=>Remove(get.id)} data-id={get.id}>Remove</button>
                  <button onClick={()=>Update(get.id)}>Update</button>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  );
}

export default App;
