//引入actionCreator，专门用于创建action对象
import { addItem, deleteItem } from '../../redux/actions/hobby'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import { Route , Switch, Redirect } from 'react-router-dom'
/* ******定义UI组件(App组件)****** */
import React, { useCallback } from 'react'
import './index.css'
import { ItemContext } from '../../context'
//引入Hobby组件的子组件
import Header from '../../components/Header'
import Footer from '../Footer'
import List from '../../components/List'
import Detail from '../../pages/Detail'
import Frontpage from '../../pages/Frontpage'
const Hobby = (props) => {
  console.log('Hobby--执行了1');
  const { addItem, deleteItem, items } = props
  const { Provider } = ItemContext
  // 添加新爱好
  const addHobby = useCallback(
    (newItem) => {
      addItem(newItem)
    },
    [addItem]
  )

  // 删除新爱好
  const deleteHobby = useCallback(
    (newItems) => {
      deleteItem(newItems)
    },
    [deleteItem]
  )

  return (
    <div className='hobby'>
      <Header addHobby={addHobby}></Header>
      <Provider value={{ deleteHobby }}>
        <List todos={items}></List>
      </Provider>
      <Footer todos={items} deleteHobby={deleteHobby}></Footer>
      <br />
      <Switch>
        <Route path='/frontPage' component={Frontpage} />
        <Route path='/test' component={Detail} />
        <Redirect to="/frontPage"/>
      </Switch>
    </div>
  )
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(state => ({ items: state.items }),
  {
    addItem,
    deleteItem
  }
)(Hobby)