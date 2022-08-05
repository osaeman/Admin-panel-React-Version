import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateContent from './components/CreateContent'
import Mainbody from './components/Mainbody';
import { Navigate } from "react-router-dom";
import { useGlobalState } from '.';


export default function Pagespage() {
  const [activelink] = useState("Pages")
  const appenddata = useGlobalState("formdata")[0]
  // Getting data from the Local storage for checking the login status and taking action based upon that
  const data = JSON.parse(localStorage.getItem("data"))
  const [page, setpage] = useState("Pages")

  const [tableheading, settableheading] = useState({
    heading1: "TITLE",
    heading2: "PUBLISHED",
    heading3: "CREATED"
  })

  const [tabledata, settabledata] = useState([
    {
      entry1: "Gel processing",
      entry2: "Yes",
      entry3: "12-Dec-2021",
      entry4: 0
    },
    {
      entry1: "Gel processing",
      entry2: "Yes",
      entry3: "12-Dec-2021",
      entry4: 1
    },
    {
      entry1: "Gel processing",
      entry2: "Yes",
      entry3: "12-Dec-2021",
      entry4: 2
    },
    {
      entry1: "Membrane",
      entry2: "Yes",
      entry3: "12-Dec-2021",
      entry4: 3
    }
  ])

  // For adding new Modal data
  useEffect(() => {
    if (appenddata.entry4 === "Page") {
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
          <Header activelink={activelink} />
          <CreateContent page={page} />
          <Mainbody page={page} tabledata={tabledata} ondelete={ondelete} tableheading={tableheading} settabledata={settabledata} />
          <Footer />

        </div> : <Navigate exact to="/Login" />
      }
    </>
  )
}
