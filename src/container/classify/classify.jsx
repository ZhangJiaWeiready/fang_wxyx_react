/*分类 */import React,{Component} from 'react'import {Link} from 'react-router-dom'import BScroll from 'better-scroll'import {reqHeadcatelist} from "../../api";import ShopClass from '../../components/shopClass/shopClass'import './classify.styl'export default class Classify extends Component{    state= {      headCateList: [],      position: 3    }  /*constructor(props){    super(props);    // 手动bind this    this.handleClick = this.handleClick.bind(this);  }*/    componentDidMount (){        this.getHeadCateList()      new BScroll('.shopList',{        scrollY: true,        click: true,      })    }    async getHeadCateList () {      const result = await reqHeadcatelist()      if (result.code === 0) {        const headCateList = result.data        this.setState({          headCateList        })      }    }  handleClick = (event) => {    const liNodes = document.querySelectorAll('.shopList > ul > li')    for (let i =0; i<liNodes.length; i++){      liNodes[i].removeAttribute('class')    }    // console.log(111+event)    // console.log('event=' + event.target)    // console.log(event.target.className)    const id = event.target.className    this.setState({      position:id*1    })    // liNodes[index].className = 'on'    event.target.parentNode.className='on'  }    render() {        const {headCateList,position} = this.state        return (          <div className='ClassifyWrap'>            <header>              <div className='search'>                <i className='searchIcon'></i>                <Link to='/search'>                    <span className='searchText' >                    搜索商品，共9736款好物                    </span>                </Link>                </div>            </header>              <div className="shopList">                <ul>                  {                    headCateList.map((headCate,index) => {                      const id = headCate.id                      console.log(id)                        if (headCate.name==='居家') {                            return (                              <li key={index} onClick={(event) => (this.handleClick(event))} className='on'>                                <p className={index}>                                  {headCate.name}                                </p>                              </li>                            )                        } else {                          return (                            <li key={index} onClick={(event) => (this.handleClick(event))}>                                <p className={index}>                                  {headCate.name}                                </p>                            </li>                          )                        }                    })                  }              </ul>            </div>            <ShopClass  position={position} headCateList={headCateList}/>        </div>        )    }}