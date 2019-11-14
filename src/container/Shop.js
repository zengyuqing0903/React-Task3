import React, { Component } from 'react'
import { NavBar,SearchBar,Carousel,Grid } from 'antd-mobile';
const list = ['桌','床','椅','几','柜','书架','沙发','家居饰品','户外家具','全部分类'];
const bgcolor = ['fc5a8c','5ad1ff','fdac42','63cdcc','fd4240','4949f8','c254ff','54de91','9e99c1','99979e'];
const font1 = ['Top Art Studio欧式风格精细...','顺顺工艺欧式风格塑料外框黑...'];
const font2 = ['￥39.95','￥83.99']
export default class Shop extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{background:'#3fcccb',color:'#fff',height:'70px'}}
                    rightContent={[
                        <img src={require('../img/che.png')} style={{marginRight:'16px',width:'20px'}} />,
                    ]}
                    >商城</NavBar>
                    <div style={{position:'relative'}}>
                        <Carousel 
                            autoplay={true}
                            infinite
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}
                            >
                            {[1,2,3,4].map(val => (
                                <img
                                    src={require('../img/sh-banner1.png')}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top'}}
                                    onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            ))}
                        </Carousel>
                        <img src={require('../img/section.png')} style={{width:'40px',height:'40px',
                                position:'absolute',top:'5px',left:'10px'}}/>
                        <div style={{width:'85%',position:'absolute',top:'5px',left:'55px',}}>
                            <SearchBar placeholder="输入关键字搜索" maxLength={8} />
                        </div>
                    </div>
                    <Grid data={[1,2,3,4,5,6,7,8,9,10]}
                        columnNum={5}
                        hasLine={false}
                        renderItem={dataItem => (
                            <div style={{ padding: '12.5px' }}>
                                <div style={{background:'#'+bgcolor[dataItem-1],width:'75%',borderRadius:'50%',}}>  
                                    <img src={require('../img/'+list[dataItem-1]+'.png')} style={{width:'85%',position:'relative'}} alt="" />
                                </div>
                                <div style={{color:'#000',fontSize:'14px',position:'absolute',bottom:'3%',left:'20%'}}>
                                    <span>{list[dataItem-1]}</span>
                                </div>
                            </div>
                        )}
                        />
                    <Grid data={[1,2]}
                        columnNum={2}
                        hasLine={false}
                        itemStyle={{background:'#eee',position:'relative'}}
                        renderItem={dataItem => (
                            <div style={{padding:'12.5px'}}>
                                <div style={{background:'#fff'}}>
                                    <img src={require('../img/shop'+dataItem+'.png')} style={{width:'100%'}} alt="" />
                                </div>
                                <div style={{color:'#000',fontSize:'14px'}}>
                                    <span style={{position:'absolute',bottom:'7%',left:'15%'}}>{font1[dataItem-1]}</span>
                                    <span style={{position:'absolute',bottom:'0',left:'15%'}}>{font2[dataItem-1]}</span>
                                </div>
                            </div>
                        )}
                    />
            </div>
        )
    }
}
