import { Outlet } from 'react-router-dom';
import { Footer } from './Footer'
import React from 'react'
import "../assets/css/Header.css"
import { Header } from "./Header"
import { Breadcrumbs } from "./Breadcrumbs"
import { FeedbackForm } from "./FeedbackForm"

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Breadcrumbs></Breadcrumbs>
      <main className="container-main">
        <Outlet />
      </main>
      <FeedbackForm></FeedbackForm>
      <Footer></Footer>
    </>
  )
}

export { Layout }