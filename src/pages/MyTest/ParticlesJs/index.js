import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Badge, Table, Divider, Button } from 'antd';
import DescriptionList from '@/components/DescriptionList';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Particles from 'react-particles-js'
import ParticleData from './particles.json'
import style from './index.less'

const { Description } = DescriptionList;

@connect(({ profile, loading }) => ({
  profile,
  loading: loading.effects['profile/fetchBasic'],
}))
class ParticlesJs extends Component {

  componentDidMount() {
    const { dispatch, match } = this.props;
    const { params } = match;

    dispatch({
      type: 'profile/fetchBasic',
      payload: params.id || '1000000000',
    });
  }

  render() {
    const { profile = {}, loading } = this.props;

    return (
      <PageHeaderWrapper title="基础详情页" loading={loading}>
        <Particles className={style.particles_bg} params={ParticleData}></Particles>
      </PageHeaderWrapper>
    );
  }
}

export default ParticlesJs;
