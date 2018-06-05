/*购物车 */import React,{Component} from 'react'import {connect} from 'react-redux'import {Link} from 'react-router-dom'import './shopCart.styl'class ShopCart extends Component{    render() {        const isLogin = this.props.userIslogin.isLogin        return (            <div>              <div className='cartWrap'>                <header>                    <span>                      购物车                    </span>                </header>                <section className='promise'>                  <div className='msg'>                    <i></i>                    <span>30天无忧退货</span>                  </div>                  <div className='msg'>                    <i></i>                    <span>48小时快速退款</span>                  </div>                  <div className='msg'>                    <i></i>                    <span>满88元满邮费</span>                  </div>                </section>                {                    !isLogin? ( <section className='content'>                      <div className="img">                        <img src={require('./images/null.png')} alt="" />                        <span>去添加点什么吧</span>                      </div>                      <div className="login">                        <Link to='/login'>                        <span>                        登录                      </span>                        </Link>                      </div>                    </section>) : null                }              </div>            </div>        )    }}export default connect(  state =>({userIslogin:state.userIslogin}))(ShopCart)