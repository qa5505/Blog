import React, { Component } from 'react'

import {Layout} from 'antd'


import SiderBar from './siderBar'

export default class AdminLayout extends Component {
  componentWillMount () {

  }
  render () {
    return (
       <div className='blog_container'>
           <Layout>
               <Layout.Sider >
                 <SiderBar/>
               </Layout.Sider>
           </Layout>

       </div>
    )
  }
}
