import React, { useState, useEffect } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateContent from './components/CreateContent'
import Mainbody from './components/Mainbody';
import { Navigate } from "react-router-dom";
import { useGlobalState } from '.';

export default function Userpage() {
  const data = JSON.parse(localStorage.getItem("data"))
  const [activelink] = useState("Users")

  const appenddata = useGlobalState("formdata")[0]
  const [page, setpage] = useState("Users")
  const [tableheading, settableheading] = useState({
    heading1: "NAME",
    heading2: "EMAIL",
    heading3: "JOINED"
  })

  const [tabledata, settabledata] = useState([
    {
      entry1: "Osama",
      entry2: "2015n2424@",
      entry3: "12-Dec-2021",
      entry4: 0
    },
    {
      entry1: "Zain",
      entry2: "zain123@",
      entry3: "12-Dec-2021",
      entry4: 1
    },
    {
      entry1: "Furqan",
      entry2: "furqan123@",
      entry3: "12-Dec-2021",
      entry4: 2
    },
    {
      entry1: "Obaid",
      entry2: "furqan123@",
      entry3: "12-Dec-2021",
      entry4: 3
    }
  ])

  useEffect(() => {
    if (appenddata.entry4 === "User") {
      appenddata.entry4 = (tabledata[tabledata.length - 1].entry4 + 1);
      settabledata([...tabledata, appenddata])
    }
  }, [appenddata])

  const ondelete = (alpha) => {
    settabledata(tabledata.filter((ele) => {
      return ele.entry4 != alpha
    }))
  }
  return (
    <>
      {data.status ?
        <div>
          <Header activelink={activelink}  />
          <CreateContent page={page} />
          <Mainbody page={page} tabledata={tabledata} ondelete={ondelete} tableheading={tableheading} settabledata={settabledata} />
          <Footer />
        </div> : <Navigate exact to="/Login" />
      }
    </>
  )
}
