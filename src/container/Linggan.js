import React, { Component } from 'react'
import { NavBar, Icon,Tabs,Grid } from 'antd-mobile';
const tabs = [
    { title: '推荐'},
    { title: '冬季' },
    { title: '宜家'},
    { title: '小清新'},
    { title: '小户型'},
    { title: '个性色彩'},
    {title:'彪'}
  ];
export default class Linggan extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{background:'#3fcccb',color:'#fff',height:'70px'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                    >灵感</NavBar>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div>
                        <Grid data={[1,2,3,4,5,6]}
                            columnNum={2}
                            renderItem={dataItem => (
                                <div style={{ padding: '12.5px'}}>
                                    <img src={require('../img/ling-'+dataItem+'.png')} style={{ width: '70%',position:'relative' }} alt="" />
                                    <div>
                                        <img src={require('../img/head.png')} style={{width:'10%',height:'10%',position:'absolute',bottom:'18%',left:'18%'}}/>
                                        <span style={{position:'absolute',bottom:'18%',left:'40%'}}>橙色律动</span>
                                        <img src={require('../img/heart.png')} style={{width:'5%',height:'5%',position:'absolute',bottom:'18%',right:'20%'}}/>
                                    </div>
                                </div>
                            )}
                            />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of fourth tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of fifth tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of sixth tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of seventh tab
                    </div>
                </Tabs>
            </div>
        )
    }
}

