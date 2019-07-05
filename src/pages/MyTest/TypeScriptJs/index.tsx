import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Button } from 'antd'

@connect(({ profile, loading }) => ({
  profile,
  loading: loading.effects['profile/fetchBasic'],
}))
class ParticlesJs extends Component {

  componentDidMount() {

  }

  getDetailTime = (date: number | undefined) => {
    const ss = 1000;
    const mm = 1000 * 60;
    const hh = 1000 * 60 * 60;
    const dd = 1000 * 60 * 60 * 24;
    if (date) {
      const d = date / dd > 1 ? Math.floor(date / dd) : 0;
      const h = (date - dd * d) / hh > 1 ? Math.floor((date - dd * d) / hh) : 0;
      const m = (date - hh * h - dd * d) / mm > 1 ? Math.floor((date - hh * h - dd * d) / mm) : 0;
      const s =
        (date - h * hh - m * mm - dd * d) / ss > 1
          ? Math.floor((date - h * hh - m * mm - dd * d) / ss)
          : 0;
      return (d ? d + '天' : '') + (h ? h + '小时' : '') + (m ? m + '分钟' : '') + s + '秒';
    }
    return '';
  };

  render() {
    return (
      <PageHeaderWrapper title="基础详情页" type='success'>
        <div>测试</div>
        <div>{this.getDetailTime(30000)}</div>
      </PageHeaderWrapper>
    );
  }
}

export default ParticlesJs;
