import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'

const {Sider} = Layout
const SubMenu = Menu.SubMenu

export default class SiderBar extends Component {

    state = {
        collapsed: false
    };

    onCollapse = (collapsed) => {
        console.log(collapsed)
        this.setState({ collapsed })
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    }

    render() {
        return (
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark"
                          mode="inline"
                          defaultOpenKeys={['sub1']}
                          selectedKeys={[this.state.current]}
                          onClick={this.handleClick}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="home" /><span>操作菜单</span></span>}>
                            <Menu.Item key="1">
                                <Icon type="folder" />
                                <span>文章管理</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="edit" />
                                <span>评论管理</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="plus-circle-o" />
                                <span>公告管理</span>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Icon type="file-unknown" />
                                <span>类型管理</span>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon type="file-add" />
                                <span>分类管理</span>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Icon type="tags" />
                                <span>标签管理</span>
                            </Menu.Item>
                            <Menu.Item key="8">
                                <Icon type="link" />
                                <span>友情链接</span>
                            </Menu.Item>
                            <Menu.Item key="9">
                                <Icon type="plus-circle" />
                                <span>赞助管理</span>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="setting" /><span>系统管理</span></span>}>
                            <Menu.Item key="10">
                                <Icon type="paper-clip" />
                                <span>网站配置</span>
                            </Menu.Item>
                            <Menu.Item key="11">
                                <Icon type="key" />
                                <span>密码修改</span>
                            </Menu.Item>
                            <Menu.Item key="12">
                                <Icon type="delete" />
                                <span>清除缓存</span>
                            </Menu.Item>
                            <Menu.Item key="13">
                                <Icon type="logout" />
                                <span>立即退出</span>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
        )
    }

}
