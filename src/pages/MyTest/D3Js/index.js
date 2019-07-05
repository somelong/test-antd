import React, { Component } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import style from './index.less';
import { Button } from 'antd'
import * as d3 from 'd3'

class ParticlesJs extends Component {

  data = '{"rtn":0,"message":null,"data":{"nodes":[{"id":"251aa1c2a33643d492f1436bbbe60ebf","name":"tangqi2","group":"root","level":0,"type_name":"root","user_id":"251aa1c2a33643d492f1436bbbe60ebf","face_image_url":"/image/get?id=7b6552b7-7ef0-4fff-a7e3-6eddf86269a8"},{"id":"251aa1c2a33643d492f1436bbbe60ebf_mutual_supervise_group","name":"互监组","group":"mutual_supervise_group","level":1,"type_name":"mutual_supervise_group"},{"id":"58764965391d444b89b554a375dc98d5","name":"tangqi3","group":"mutual_supervise_group","level":0,"type_name":"root","user_id":"58764965391d444b89b554a375dc98d5","face_image_url":"/image/get?id=a5e36f4f-f481-4aea-bfcb-041337d69572"},{"id":"b6491e60dc2f4c6c8e6910b01beadf27","name":"ee","group":"mutual_supervise_group","level":0,"type_name":"root","user_id":"b6491e60dc2f4c6c8e6910b01beadf27"},{"id":"251aa1c2a33643d492f1436bbbe60ebf_abnormal_peer","name":"频繁同行","group":"abnormal_peer","level":1,"type_name":"abnormal_peer"},{"id":"58764965391d444b89b554a375dc98d5_abnormal_peer","name":"频繁同行","group":"abnormal_peer","level":1,"type_name":"abnormal_peer"},{"id":"b6491e60dc2f4c6c8e6910b01beadf27_abnormal_peer","name":"频繁同行","group":"abnormal_peer","level":1,"type_name":"abnormal_peer"},{"id":"251aa1c2a33643d492f1436bbbe60ebf_family","name":"亲属","group":"family","level":1,"type_name":"family"},{"id":"251aa1c2a33643d492f1436bbbe60ebf_daily_management","name":"日常管理","group":"daily_management","level":1,"type_name":"daily_management"},{"id":"251aa1c2a33643d492f1436bbbe60ebf_mutual_supervise","name":"互监脱离","group":"daily_management","level":2,"type_name":"mutual_supervise"},{"id":"251aa1c2a33643d492f1436bbbe60ebf_around_supervise","name":"串监","group":"daily_management","level":2,"type_name":"around_supervise"},{"id":"251aa1c2a33643d492f1436bbbe60ebf_surveilllance_monitor","name":"区域监控","group":"daily_management","level":2,"type_name":"surveilllance_monitor"},{"id":"251aa1c2a33643d492f1436bbbe60ebf_rollcall","name":"点名","group":"daily_management","level":2,"type_name":"rollcall"},{"id":"251aa1c2a33643d492f1436bbbe60ebf_rollcall_perceptual","name":"有感","group":"daily_management","level":3,"type_name":"rollcall_perceptual"},{"id":"251aa1c2a33643d492f1436bbbe60ebf_rollcall_no_perceptual","name":"无感","group":"daily_management","level":3,"type_name":"rollcall_no_perceptual"},{"id":"251aa1c2a33643d492f1436bbbe60ebf_basic_info","name":"基础信息","group":"basic_info","level":1,"type_name":"basic_info"},{"id":"251aa1c2a33643d492f1436bbbe60ebf_case_info","name":"犯罪案件","group":"case_info","level":1,"type_name":"case_info"},{"id":"251aa1c2a33643d492f1436bbbe60ebf_voice_meeting","name":"会见记录","group":"voice_meeting","level":1,"type_name":"voice_meeting"},{"id":"58764965391d444b89b554a375dc98d5_family","name":"亲属","group":"family","level":1,"type_name":"family"},{"id":"58764965391d444b89b554a375dc98d5_daily_management","name":"日常管理","group":"daily_management","level":1,"type_name":"daily_management"},{"id":"58764965391d444b89b554a375dc98d5_mutual_supervise","name":"互监脱离","group":"daily_management","level":2,"type_name":"mutual_supervise"},{"id":"58764965391d444b89b554a375dc98d5_around_supervise","name":"串监","group":"daily_management","level":2,"type_name":"around_supervise"},{"id":"58764965391d444b89b554a375dc98d5_surveilllance_monitor","name":"区域监控","group":"daily_management","level":2,"type_name":"surveilllance_monitor"},{"id":"58764965391d444b89b554a375dc98d5_rollcall","name":"点名","group":"daily_management","level":2,"type_name":"rollcall"},{"id":"58764965391d444b89b554a375dc98d5_rollcall_perceptual","name":"有感","group":"daily_management","level":3,"type_name":"rollcall_perceptual"},{"id":"58764965391d444b89b554a375dc98d5_rollcall_no_perceptual","name":"无感","group":"daily_management","level":3,"type_name":"rollcall_no_perceptual"},{"id":"58764965391d444b89b554a375dc98d5_basic_info","name":"基础信息","group":"basic_info","level":1,"type_name":"basic_info"},{"id":"58764965391d444b89b554a375dc98d5_case_info","name":"犯罪案件","group":"case_info","level":1,"type_name":"case_info"},{"id":"58764965391d444b89b554a375dc98d5_voice_meeting","name":"会见记录","group":"voice_meeting","level":1,"type_name":"voice_meeting"},{"id":"b6491e60dc2f4c6c8e6910b01beadf27_family","name":"亲属","group":"family","level":1,"type_name":"family"},{"id":"b6491e60dc2f4c6c8e6910b01beadf27_daily_management","name":"日常管理","group":"daily_management","level":1,"type_name":"daily_management"},{"id":"b6491e60dc2f4c6c8e6910b01beadf27_mutual_supervise","name":"互监脱离","group":"daily_management","level":2,"type_name":"mutual_supervise"},{"id":"b6491e60dc2f4c6c8e6910b01beadf27_around_supervise","name":"串监","group":"daily_management","level":2,"type_name":"around_supervise"},{"id":"b6491e60dc2f4c6c8e6910b01beadf27_surveilllance_monitor","name":"区域监控","group":"daily_management","level":2,"type_name":"surveilllance_monitor"},{"id":"b6491e60dc2f4c6c8e6910b01beadf27_rollcall","name":"点名","group":"daily_management","level":2,"type_name":"rollcall"},{"id":"b6491e60dc2f4c6c8e6910b01beadf27_rollcall_perceptual","name":"有感","group":"daily_management","level":3,"type_name":"rollcall_perceptual"},{"id":"b6491e60dc2f4c6c8e6910b01beadf27_rollcall_no_perceptual","name":"无感","group":"daily_management","level":3,"type_name":"rollcall_no_perceptual"},{"id":"b6491e60dc2f4c6c8e6910b01beadf27_basic_info","name":"基础信息","group":"basic_info","level":1,"type_name":"basic_info"},{"id":"b6491e60dc2f4c6c8e6910b01beadf27_case_info","name":"犯罪案件","group":"case_info","level":1,"type_name":"case_info"},{"id":"b6491e60dc2f4c6c8e6910b01beadf27_voice_meeting","name":"会见记录","group":"voice_meeting","level":1,"type_name":"voice_meeting"}],"edges":[{"peer_a_id":"251aa1c2a33643d492f1436bbbe60ebf","peer_b_id":"251aa1c2a33643d492f1436bbbe60ebf_mutual_supervise_group"},{"name":"互监","peer_a_id":"251aa1c2a33643d492f1436bbbe60ebf_mutual_supervise_group","peer_b_id":"58764965391d444b89b554a375dc98d5"},{"name":"互监","peer_a_id":"251aa1c2a33643d492f1436bbbe60ebf_mutual_supervise_group","peer_b_id":"b6491e60dc2f4c6c8e6910b01beadf27"},{"peer_a_id":"251aa1c2a33643d492f1436bbbe60ebf","peer_b_id":"251aa1c2a33643d492f1436bbbe60ebf_abnormal_peer"},{"peer_a_id":"58764965391d444b89b554a375dc98d5","peer_b_id":"58764965391d444b89b554a375dc98d5_abnormal_peer"},{"peer_a_id":"b6491e60dc2f4c6c8e6910b01beadf27","peer_b_id":"b6491e60dc2f4c6c8e6910b01beadf27_abnormal_peer"},{"peer_a_id":"251aa1c2a33643d492f1436bbbe60ebf","peer_b_id":"251aa1c2a33643d492f1436bbbe60ebf_family"},{"peer_a_id":"251aa1c2a33643d492f1436bbbe60ebf_daily_management","peer_b_id":"251aa1c2a33643d492f1436bbbe60ebf_mutual_supervise"},{"peer_a_id":"251aa1c2a33643d492f1436bbbe60ebf_daily_management","peer_b_id":"251aa1c2a33643d492f1436bbbe60ebf_around_supervise"},{"peer_a_id":"251aa1c2a33643d492f1436bbbe60ebf_daily_management","peer_b_id":"251aa1c2a33643d492f1436bbbe60ebf_rollcall"},{"peer_a_id":"251aa1c2a33643d492f1436bbbe60ebf_daily_management","peer_b_id":"251aa1c2a33643d492f1436bbbe60ebf_surveilllance_monitor"},{"peer_a_id":"251aa1c2a33643d492f1436bbbe60ebf_rollcall","peer_b_id":"251aa1c2a33643d492f1436bbbe60ebf_rollcall_perceptual"},{"peer_a_id":"251aa1c2a33643d492f1436bbbe60ebf_rollcall","peer_b_id":"251aa1c2a33643d492f1436bbbe60ebf_rollcall_no_perceptual"},{"peer_a_id":"251aa1c2a33643d492f1436bbbe60ebf","peer_b_id":"251aa1c2a33643d492f1436bbbe60ebf_daily_management"},{"peer_a_id":"251aa1c2a33643d492f1436bbbe60ebf","peer_b_id":"251aa1c2a33643d492f1436bbbe60ebf_basic_info"},{"peer_a_id":"251aa1c2a33643d492f1436bbbe60ebf","peer_b_id":"251aa1c2a33643d492f1436bbbe60ebf_case_info"},{"peer_a_id":"251aa1c2a33643d492f1436bbbe60ebf","peer_b_id":"251aa1c2a33643d492f1436bbbe60ebf_voice_meeting"},{"peer_a_id":"58764965391d444b89b554a375dc98d5","peer_b_id":"58764965391d444b89b554a375dc98d5_family"},{"peer_a_id":"58764965391d444b89b554a375dc98d5_daily_management","peer_b_id":"58764965391d444b89b554a375dc98d5_mutual_supervise"},{"peer_a_id":"58764965391d444b89b554a375dc98d5_daily_management","peer_b_id":"58764965391d444b89b554a375dc98d5_around_supervise"},{"peer_a_id":"58764965391d444b89b554a375dc98d5_daily_management","peer_b_id":"58764965391d444b89b554a375dc98d5_rollcall"},{"peer_a_id":"58764965391d444b89b554a375dc98d5_daily_management","peer_b_id":"58764965391d444b89b554a375dc98d5_surveilllance_monitor"},{"peer_a_id":"58764965391d444b89b554a375dc98d5_rollcall","peer_b_id":"58764965391d444b89b554a375dc98d5_rollcall_perceptual"},{"peer_a_id":"58764965391d444b89b554a375dc98d5_rollcall","peer_b_id":"58764965391d444b89b554a375dc98d5_rollcall_no_perceptual"},{"peer_a_id":"58764965391d444b89b554a375dc98d5","peer_b_id":"58764965391d444b89b554a375dc98d5_daily_management"},{"peer_a_id":"58764965391d444b89b554a375dc98d5","peer_b_id":"58764965391d444b89b554a375dc98d5_basic_info"},{"peer_a_id":"58764965391d444b89b554a375dc98d5","peer_b_id":"58764965391d444b89b554a375dc98d5_case_info"},{"peer_a_id":"58764965391d444b89b554a375dc98d5","peer_b_id":"58764965391d444b89b554a375dc98d5_voice_meeting"},{"peer_a_id":"b6491e60dc2f4c6c8e6910b01beadf27","peer_b_id":"b6491e60dc2f4c6c8e6910b01beadf27_family"},{"peer_a_id":"b6491e60dc2f4c6c8e6910b01beadf27_daily_management","peer_b_id":"b6491e60dc2f4c6c8e6910b01beadf27_mutual_supervise"},{"peer_a_id":"b6491e60dc2f4c6c8e6910b01beadf27_daily_management","peer_b_id":"b6491e60dc2f4c6c8e6910b01beadf27_around_supervise"},{"peer_a_id":"b6491e60dc2f4c6c8e6910b01beadf27_daily_management","peer_b_id":"b6491e60dc2f4c6c8e6910b01beadf27_rollcall"},{"peer_a_id":"b6491e60dc2f4c6c8e6910b01beadf27_daily_management","peer_b_id":"b6491e60dc2f4c6c8e6910b01beadf27_surveilllance_monitor"},{"peer_a_id":"b6491e60dc2f4c6c8e6910b01beadf27_rollcall","peer_b_id":"b6491e60dc2f4c6c8e6910b01beadf27_rollcall_perceptual"},{"peer_a_id":"b6491e60dc2f4c6c8e6910b01beadf27_rollcall","peer_b_id":"b6491e60dc2f4c6c8e6910b01beadf27_rollcall_no_perceptual"},{"peer_a_id":"b6491e60dc2f4c6c8e6910b01beadf27","peer_b_id":"b6491e60dc2f4c6c8e6910b01beadf27_daily_management"},{"peer_a_id":"b6491e60dc2f4c6c8e6910b01beadf27","peer_b_id":"b6491e60dc2f4c6c8e6910b01beadf27_basic_info"},{"peer_a_id":"b6491e60dc2f4c6c8e6910b01beadf27","peer_b_id":"b6491e60dc2f4c6c8e6910b01beadf27_case_info"},{"peer_a_id":"b6491e60dc2f4c6c8e6910b01beadf27","peer_b_id":"b6491e60dc2f4c6c8e6910b01beadf27_voice_meeting"}]}}'

  nodeList = '{"rtn":0,"message":null,"data":{"menuList":["1k03840f1j546d6c71c81c62"],"deviceList":["946d4f802d946d46aa28b8bf"],"deviceEditList":["946d4f802d946d46aa28b8bf"],"resourceList":[],"resourceEditList":[],"personList":["946d4f802d946d46aa28b8bf"],"personEditList":["946d4f802d946d46aa28b8bf"],"systemList":["000384002d946d6c71c81c62"],"roleList":["1k03840f1d946d6c71c8b8b2","946d4f802d946d46aa28b8bf"],"prisonIdList":["946d4f802d946d46aa28b8bf"]}}'

  componentDidMount() {
    console.log(JSON.parse(this.data))
    console.log(JSON.parse(this.nodeList))
  }

  changeColor = () => {
    let _circle = d3.selectAll('circle') // selectAll 选中
    _circle.attr('fill', 'blue')
  }

  changeSize = () => {
    d3.selectAll('circle').data([20, 30, 40]).attr('r', function (data) {
      // return Math.sqrt(data)  // 返回平方根
      return data
    })
  }

  testEnter = () => {
    d3.selectAll('circle')
      .data([20, 30, 40, 50, 60, 70], function (d) {
        return d
      })
      .enter()
      .append('circle')
      .attr('fill', 'red')
      .attr('cx', function (data) {
        return data
      })
      .attr('cy', function (data) {
        return data
      })
      .attr('r', function (data) {
        return data
      })
  }

  testRemove = () => { // 是删除没有选中的元素
    d3.selectAll('circle')
      .data([20, 30], function (d) {
        return d
      })
      .exit()
      .remove()
  }

  render() {
    return (
      <PageHeaderWrapper title="基础详情页" type='success'>
        <div>尝试画出d3图形</div>
        <div className={style.ceshi}>
          <svg className={style.test}>
            <circle cx='50' cy='50' r='20' fill="#fff">1</circle>
            <circle cx='150' cy='50' r='20' fill="#fff">2</circle>
            <circle cx='250' cy='50' r='20' fill="#fff">3</circle>
          </svg>
        </div>
        <div className={style.ceshi1}>
          <svg width="200" height="250">

            <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5" />
            <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5" />

            <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5" />
            <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5" />

            <line x1="10" x2="50" y1="110" y2="150" stroke="orange" fill="transparent" stroke-width="5" />
            <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
              stroke="orange" fill="transparent" stroke-width="5" />

            <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
              stroke="green" fill="transparent" stroke-width="5" />

            <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5" />
          </svg>
        </div>

        <div className={style.ceshi1}>
          <svg width="200" height="250">
            <circle cx="50" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5" />
          </svg>
        </div>
        <div>
          <Button onClick={this.changeColor}>点击变换颜色</Button>
          <Button onClick={this.changeSize}>点击改变大小</Button>
          <Button onClick={this.testEnter}>预留位置</Button>
          <Button onClick={this.testRemove}>删除元素</Button>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default ParticlesJs;
