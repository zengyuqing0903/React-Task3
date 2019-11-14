import React, { Component } from 'react'
import { NavBar,Carousel,Grid } from 'antd-mobile';
const list = ['热门品牌','私人搭配师','选购指南']
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar style={{background:'#3fcccb',color:'#fff',height:'70px'}}>住吧家居</NavBar>
                    <div>
                        <Carousel 
                            autoplay={true}
                            infinite
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}
                            >
                            {[1,2].map(val => (
                                <img
                                    src={require('../img/banner-'+val+'.png')}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            ))}
                        </Carousel>
                         <Grid data={[1,2,3]}
                            columnNum={3}
                            renderItem={dataItem => (
                                <div style={{ padding: '12.5px',background:"#eee"}}>
                                    <img src={require('../img/m-'+dataItem+'.png')} 
                                        style={{ width: '100%',position:'relative',opacity:'0.6',background:'#000'}} alt="" />
                                    <div style={{ color: '#fff', fontSize: '14px', marginTop: '12px',
                                                position:'absolute',top:'50%',left:'35%' }}>
                                        <span>{list[dataItem-1]}</span>
                                    </div>
                                </div>
                            )}
                            />
                        <div >
                            <div style={{height:'75px'}}>
                                <div style={{float:'left',marginTop:'20px',background:'#3fcccb',
                                            width:'8px',height:'35px'}}></div>
                                <span style={{fontSize:'16px',lineHeight:'75px',color:'#000',
                                            marginLeft:'5px'}}>热门推荐</span>
                            </div>
                            <div style={{position:'relative'}}>
                                <img src={require('../img/back.png')} style={{width:'100%'}}/>
                                <span style={{color:'#fff',fontSize:'16px',position:'absolute',bottom:'10px',left:'14%'}}>什么是英伦装修风格 英伦风家装 英伦风格装修效果图</span>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
