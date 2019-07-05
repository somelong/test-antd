import React, { Component } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import style from './index.less';
import { Button } from 'antd'
import * as d3 from 'd3'

class ParticlesJs extends Component {
  gs = ''; // 节点集（关系节点+文字描述）变量
  forceSimulation = ''; // 力导向图实例变化变量
  links = ''; // 节点之间的连线集变量
  linkTexts = ''; // 连接线上的文字描述集变量
  circles = ''; // 圆

  // 关系节点集
  nodes = [
    { name: '湖南邵阳' },
    { name: '山东莱州' },
    { name: '广东阳江' },
    { name: '山东枣庄' },
    { name: 'A' },
    { name: 'B' },
    { name: 'C' },
    { name: 'D' },
    { name: '班长' },
  ];

  // 关系描述
  edges = [
    { source: 0, target: 4, relation: '籍贯', value: 3 },
    { source: 4, target: 5, relation: '舍友', value: 2 },
    { source: 4, target: 6, relation: '舍友', value: 2 },
    { source: 4, target: 7, relation: '舍友', value: 2 },
    { source: 1, target: 6, relation: '籍贯', value: 3 },
    { source: 2, target: 5, relation: '籍贯', value: 3 },
    { source: 3, target: 7, relation: '籍贯', value: 3 },
    { source: 5, target: 6, relation: '同学', value: 1.5 },
    { source: 6, target: 7, relation: '朋友', value: 2 },
    { source: 6, target: 8, relation: '职责', value: 3 },
  ]

  componentDidMount() {
    this.initsvg()
  }

  initsvg = () => {
    var marge = { top: 60, bottm: 60, left: 60, right: 60 }
    var svg = d3.select('#sss');

    svg.attr('height', 580);
    svg.attr('width', 1200);

    var width = svg.attr('width');
    var height = svg.attr('height');

    var g = svg.append('g')
      .attr('transfrom', 'translate(' + marge.top + ',' + marge.left + ')');

    // 设置一个color的颜色比例尺，为了让不同的节点呈现不同的颜色
    var colorScale = d3.scaleOrdinal(d3.schemeCategory10)

    // 创建一个力导向图
    this.forceSimulation = d3.forceSimulation(this.nodes)
      .force('links', d3.forceLink(this.links))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter())

    // 生成节点数据(初始化节点位置)
    this.forceSimulation.nodes(this.nodes).on('tick', this.ticked); // 这个函数还没有写

    // 生成线数据
    this.forceSimulation.force('links').links(this.edges).distance(function (d) {
      return d.value * 100
    })

    // 设置图形的中心位置
    this.forceSimulation.force('center').x(width / 2).y(height / 2);

    // 划线
    this.links = g.append('g')
      .selectAll('line')
      .data(this.edges)
      .enter()
      .append('line')
      .attr('stroke', function (d, i) {
        return colorScale(i)
      })
      .attr('stroke-width', 1);

    // 画线上的关系描述
    this.linkTexts = g.append('g')
      .selectAll('text')
      .data(this.edges)
      .enter()
      .append('text')
      .text(function (d) {
        return d.relation;
      })

    // 节点和节点上的文字进行分组
    this.gs = g.selectAll('.circleText')
      .data(this.nodes)
      .enter()
      .append('g')
      .attr('transfrom', function (d, i) {
        return 'translate(' + d.x + ',' + d.y + ')';
      })
      .call(d3.drag()
        .on('start', this.started)
        .on('drag', this.dragged)
        .on('end', this.ended)
      ); // 后面这三个方法是移动需要用到的方法

    // 绘制节点
    this.gs.append('circle')
      .attr('r', 30)
      .attr('fill', function (d, i) {
        return colorScale(i)
      })

    // 文字
    this.gs.append('text')
      .attr('x', -10)
      .attr('y', -10)
      .attr('dy', 15)
      .text(function(d){
        return d.name
      });

  }

  ticked = () => {
    this.links.attr(
      'x1', function (d) { return d.source.x; },
    ).attr(
      'y1', function (d) { return d.source.y; },
    ).attr(
      'x2',function (d) { return d.target.x; },
    ).attr(
      'y2', function (d) { return d.target.y; },
    )

    this.linkTexts.attr(
      'x', function (d) { return (d.source.x + d.target.x) / 2; },
    ).attr(
      'y', function (d) { return (d.source.y + d.target.y) / 2; },
    )

    this.gs.attr('transform', function (d) { return 'translate(' + d.x + ',' + d.y + ')'; });
  }

  started = (d) => {
    if (!d3.event.active) {
      this.forceSimulation.alphaTarget(0.8).restart()
    }
    d.fx = d.x;
    d.fy = d.y;
  }

  dragged = (d) => {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  ended = (d) => {
    if (!d3.event.active) {
      this.forceSimulation.alphaTarget(0);
    }
    d.fx = null;
    d.fy = null;
  }

  render() {
    return (
      <PageHeaderWrapper title="基础详情页" type='success'>
        <div>尝试画出力导向图</div>
        <div className={style.ceshi}>
          <svg id='sss'></svg>
        </div>
      </PageHeaderWrapper>
    );

  }
}

export default ParticlesJs;
