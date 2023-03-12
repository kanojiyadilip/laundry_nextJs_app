import Head from 'next/head'
import React from "react";

export default function Home({resData}) {

    console.log("resData=======>", resData);
  return (
    <>
    <Head>
    <link
      rel="stylesheet"
      type="text/css"
      charset="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
    </Head>
    <div className="main-price">
        <div style={{textAlign: 'center', padding: '30px'}}>
            <h2>Message List</h2>
            <p>No of Data <b>{resData.data.length}</b></p>
        </div>
        <div className="nav-price">
                
            <div className="container">
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Message</th>
                </tr>
                </thead>
                <tbody>
                {/* <tr> */}
                    {
                        resData.data.map((item)=>{
                            return (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.address}</td>
                                    <td>{item.message}</td>
                                </tr>)
                        })
                    }
                    {/* <td>John</td> */}
                    {/* <td>Doe</td> */}
                    {/* <td>john@example.com</td> */}
                {/* </tr> */}
                </tbody>
            </table>
            </div>
        </div>
    </div>
    </>
  )
}

export async function getServerSideProps({req, query, params}){

    const headers = {'Content-Type':'application/json'};
    const apiRes = await fetch('http://localhost:3000/api/post',{method: 'get', headers: headers});
    var resData = await apiRes.json();

    return{
        props: {
            resData,
        }
    }
}