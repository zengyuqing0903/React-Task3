import React from 'react' //引入react
import { TabBar } from 'antd-mobile';
import Home from './Home';
import Linggan from './Linggan';
import Shop from './Shop';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  render() {
    return (
      <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i style={{fontSize:22,lineHeight:'22px',color:'#000'}} className="iconfont icon-home"></i>
            }
            selectedIcon={<i style={{fontSize:22,lineHeight:'22px'}} className="iconfont icon-home"></i>
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
              <Home/> {/* 首页对应的组件*/}
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22,lineHeight:'22px',color:'#000'}} className="iconfont icon-linggan"></i>
            }
            selectedIcon={<i style={{fontSize:22,lineHeight:'22px'}} className="iconfont icon-linggan"></i>
            }
            title="灵感"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}      
          >
              <Linggan/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22,lineHeight:'22px',color:'#000'}} className="iconfont icon-store_icon"></i>
            }
            selectedIcon={
                <i style={{fontSize:22,lineHeight:'22px'}} className="iconfont icon-store_icon"></i>
            }
            title="商城"
            key="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <Shop/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22,lineHeight:'22px',color:'#000'}} className="iconfont icon-wode1"></i>}
            selectedIcon={<i style={{fontSize:22,lineHeight:'22px'}} className="iconfont icon-wode1"></i>}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
