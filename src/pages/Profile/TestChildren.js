import React, { Component } from 'react';
import DescriptionList from '@/components/DescriptionList';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Button } from 'antd';

const { Description } = DescriptionList;

class TestChildren extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '测试中的State',
      application: {
        id: 'test1',
        status: '运送中',
        orderNo: 'h123123',
        childOrderNo: 'q123123'
      }
    }
  }

  componentWillMount() {
    console.log('渲染之前  componentWillMount', this.state, this.props)
  }

  componentDidMount() {
    console.log('渲染之后  componentDidMount', this.state, this.props)
  }

  UNSAFE_componentWillMount() {
    console.log('render之前   UNSAFE_componentWillMount')
  }

  componentWillReceiveProps(nextProps, nextContent) {
    console.log('重新渲染触发的第一个生命周期函数  componentWillReceiveProps', this.state, this.props)
    // this.setStateTest()
  }

  UNSAFE_componentWillReceiveProps() {
    console.log('重新渲染触发的UNSAFE钩子   UNSAFE_componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('是否应该重新渲染  shouldComponentUpdate', this.state, this.props, nextProps, nextState)
  }

  componentWillUpdate() {
    console.log('重新渲染之前  componentWillUpdate', this.state, this.props)
  }

  UNSAFE_componentWillUpdate() {
    console.log('重新渲染之前的UNSAFE钩子   UNSAFE_componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('重新渲染之后  componentDidUpdate', this.state, this.props)
  }

  componentWillUnmount() {
    console.log('卸载前  componentWillUnmount', this.state, this.props)
  }

  setStateTest = () => {
    this.setState({
      name: '测试'
    })
  }
  

  render() {
    console.log('render方法   render', this.state, this.props);
    const { title } = this.props
    const { application } = this.state;

    return (
      <DescriptionList size="large" title={title} style={{ marginBottom: 32 }}>
        <Description term="测试信息">{application.id}</Description>
        <Description term="测试信息">{application.status}</Description>
        <Description term="测试信息">{application.orderNo}</Description>
        <Description term="测试信息">{application.childOrderNo}</Description>
        <Description term="测试信息"><Button onClick={this.setStateTest}>修改state</Button></Description>
      </DescriptionList>
    );
  }
}

export default TestChildren;
