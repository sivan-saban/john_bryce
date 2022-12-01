import { useEffect, useState } from "react";
import "./Main.css";
import axios from "axios";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import CustomerModel from "../../model/CustomerModel";

function Main(): JSX.Element {
  const [customers, setCustomers] = useState<CustomerModel[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3001/customer/all").then((response) => {
      setCustomers(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="Main">
      <Header />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>address</th>
            <th> tel</th>
            <th>refer</th>
            <th>memo</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.tel}</td>
              <td>{item.refer}</td>
              <td style={{ width: 400 }}>{item.memo}</td>

              <td>
                <button
                  onClick={() => {
                    axios.delete(`http://localhost:3001/customer/${item.id}`);
                    setCustomers(
                      customers.filter(
                        (singleCustomer) => singleCustomer.id !== item.id
                      )
                    );
                  }}
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Main;
