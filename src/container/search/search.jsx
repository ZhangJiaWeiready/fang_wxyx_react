/*搜索 */import React,{Component} from 'react'import './search.styl'export default class Search extends Component{    state = {      inputContent: '',      path: this.props.location.pathname    }  handleChang =(name,event) => {    this.setState({    [name]:event.target.value  })}    back = ()=>{      this.props.history.goBack()    }    render() {        const {inputContent} = this.state        return (          <div className='searchWrap'>            <header>              <div className="search">                <div className='form'>                  <form className="imput" >                    <i className='searchIcon'></i>                    <input className='shuru' type="text" placeholder='消暑解渴酒水饮料68元起'                           onChange={( event)=> this.handleChang('inputContent', event)} />                      {inputContent!==''? <i className='closeIcon'></i>:null }                  </form>                </div>                <div className="back" onClick={this.back}>                    <span>                      取消                    </span>                      </div>                  </div>    </header>            {              inputContent===''?  <section className='hotSearch' v-if='!isClose'>                <div className="hotTitle">          <span>            热门搜索          </span>                </div>                <div className="hotContent">                  <div className="item hotItem">            <span>              5月热销推荐            </span>                  </div>                  <div className="item">            <span>              牙刷            </span>                  </div>                </div>              </section>:<section className="result" v-if='isClose'>                <ul className='resultWrap'>                  <li>            <span>              112生            </span>                  </li>                  <li>            <span>              112生            </span>                  </li>                </ul>              </section>            }    </div>        )    }}