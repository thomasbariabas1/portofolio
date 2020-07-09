import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { config } from 'react-spring/renderprops'
import Grid from './Grid'
import { Slug, Fade } from './Primitives'
import './styles.css'
import 'antd/dist/antd.css'


export const tileData =  [
    {
        name: 'Rare Wind',
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        description: '#a8edea → #fed6e3',
        css: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
        height: 200,
        id: '1',
        cover: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut orci magna. Proin molestie, mauris in consequat varius, turpis velit scelerisque elit, ut ultrices est risus vitae magna. Mauris gravida condimentum lectus et auctor. Ut a odio nec risus fringilla dapibus vitae vel arcu. Integer eget ornare dolor, in congue velit. Vivamus mollis, velit sed tincidunt gravida, libero lacus sodales tortor, molestie imperdiet velit enim in urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus condimentum tortor diam, et ornare enim ultricies vel. Donec vitae rutrum turpis, ac placerat neque. Cras sit amet convallis massa. Quisque ut egestas orci.\n' +
            '\n' +
            'Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam vitae ligula viverra, sollicitudin justo ac, tincidunt nunc. Etiam dapibus lacus quam, iaculis pulvinar diam hendrerit at. Maecenas dapibus nunc nulla, at pellentesque ante feugiat vitae. Sed in nunc facilisis, euismod elit et, dictum erat. Nulla facilisi. Duis nec nibh aliquam, varius orci venenatis, lobortis nisi. Nam a magna pretium, dapibus ipsum mattis, ullamcorper sem. Sed a tincidunt neque. Maecenas nec erat ac odio venenatis porttitor eget vitae ipsum. Aliquam porta nisl vestibulum condimentum maximus. Donec vestibulum in sapien sit amet tempor. Nulla lacinia ac mauris ut posuere.\n' +
            '\n' +
            'Cras consectetur nibh vitae enim mollis finibus. Curabitur vitae bibendum diam. Nam eleifend turpis eros, in varius erat tempor quis. Donec congue sem eu lorem varius euismod. In hac habitasse platea dictumst. Duis ut lacinia tortor, vitae pharetra elit. Maecenas ut luctus risus. Phasellus et enim mi. Morbi a suscipit quam. Vivamus lacinia nibh sed luctus ornare. Suspendisse mollis nec quam lobortis mollis. Donec aliquet, neque sit amet accumsan vulputate, augue nisl dapibus quam, id mattis est eros a est. Etiam vitae commodo neque. Sed turpis enim, auctor quis nunc id, tristique tincidunt ligula. Ut eu ipsum sollicitudin, placerat augue sit amet, hendrerit libero.\n' +
            '\n' +
            'Maecenas et lectus elementum, ornare justo at, venenatis nisl. Sed congue gravida gravida. Nam nibh nulla, convallis in maximus eget, condimentum a ipsum. Morbi quis accumsan libero. Sed vel eros dolor. Curabitur ut ultricies ligula. Duis vestibulum elit at sem molestie accumsan. Praesent vulputate gravida diam, vitae congue nisi pharetra non. Aliquam gravida non mauris eu condimentum. Maecenas dictum euismod pharetra. Sed feugiat congue mauris, non mattis quam rhoncus ut. Aenean mattis justo at enim auctor venenatis.'
    },
    {
        name: 'Saint Petersburg',
        img: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
        description: '#f5f7fa → #c3cfe2',
        css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        height: 350,
        id: '2',
        cover: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut orci magna. Proin molestie, mauris in consequat varius, turpis velit scelerisque elit, ut ultrices est risus vitae magna. Mauris gravida condimentum lectus et auctor. Ut a odio nec risus fringilla dapibus vitae vel arcu. Integer eget ornare dolor, in congue velit. Vivamus mollis, velit sed tincidunt gravida, libero lacus sodales tortor, molestie imperdiet velit enim in urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus condimentum tortor diam, et ornare enim ultricies vel. Donec vitae rutrum turpis, ac placerat neque. Cras sit amet convallis massa. Quisque ut egestas orci.\n' +
            '\n' +
            'Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam vitae ligula viverra, sollicitudin justo ac, tincidunt nunc. Etiam dapibus lacus quam, iaculis pulvinar diam hendrerit at. Maecenas dapibus nunc nulla, at pellentesque ante feugiat vitae. Sed in nunc facilisis, euismod elit et, dictum erat. Nulla facilisi. Duis nec nibh aliquam, varius orci venenatis, lobortis nisi. Nam a magna pretium, dapibus ipsum mattis, ullamcorper sem. Sed a tincidunt neque. Maecenas nec erat ac odio venenatis porttitor eget vitae ipsum. Aliquam porta nisl vestibulum condimentum maximus. Donec vestibulum in sapien sit amet tempor. Nulla lacinia ac mauris ut posuere.\n' +
            '\n' +
            'Cras consectetur nibh vitae enim mollis finibus. Curabitur vitae bibendum diam. Nam eleifend turpis eros, in varius erat tempor quis. Donec congue sem eu lorem varius euismod. In hac habitasse platea dictumst. Duis ut lacinia tortor, vitae pharetra elit. Maecenas ut luctus risus. Phasellus et enim mi. Morbi a suscipit quam. Vivamus lacinia nibh sed luctus ornare. Suspendisse mollis nec quam lobortis mollis. Donec aliquet, neque sit amet accumsan vulputate, augue nisl dapibus quam, id mattis est eros a est. Etiam vitae commodo neque. Sed turpis enim, auctor quis nunc id, tristique tincidunt ligula. Ut eu ipsum sollicitudin, placerat augue sit amet, hendrerit libero.\n' +
            '\n' +
            'Maecenas et lectus elementum, ornare justo at, venenatis nisl. Sed congue gravida gravida. Nam nibh nulla, convallis in maximus eget, condimentum a ipsum. Morbi quis accumsan libero. Sed vel eros dolor. Curabitur ut ultricies ligula. Duis vestibulum elit at sem molestie accumsan. Praesent vulputate gravida diam, vitae congue nisi pharetra non. Aliquam gravida non mauris eu condimentum. Maecenas dictum euismod pharetra. Sed feugiat congue mauris, non mattis quam rhoncus ut. Aenean mattis justo at enim auctor venenatis.'

    },
    {
        name: 'Deep Blue',
        img: 'https://material-ui.com/static/images/grid-list/camera.jpg',
        description: '#e0c3fc → #8ec5fc',
        css: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)',
        height: 300,
        id: '3',
        cover: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut orci magna. Proin molestie, mauris in consequat varius, turpis velit scelerisque elit, ut ultrices est risus vitae magna. Mauris gravida condimentum lectus et auctor. Ut a odio nec risus fringilla dapibus vitae vel arcu. Integer eget ornare dolor, in congue velit. Vivamus mollis, velit sed tincidunt gravida, libero lacus sodales tortor, molestie imperdiet velit enim in urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus condimentum tortor diam, et ornare enim ultricies vel. Donec vitae rutrum turpis, ac placerat neque. Cras sit amet convallis massa. Quisque ut egestas orci.\n' +
            '\n' +
            'Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam vitae ligula viverra, sollicitudin justo ac, tincidunt nunc. Etiam dapibus lacus quam, iaculis pulvinar diam hendrerit at. Maecenas dapibus nunc nulla, at pellentesque ante feugiat vitae. Sed in nunc facilisis, euismod elit et, dictum erat. Nulla facilisi. Duis nec nibh aliquam, varius orci venenatis, lobortis nisi. Nam a magna pretium, dapibus ipsum mattis, ullamcorper sem. Sed a tincidunt neque. Maecenas nec erat ac odio venenatis porttitor eget vitae ipsum. Aliquam porta nisl vestibulum condimentum maximus. Donec vestibulum in sapien sit amet tempor. Nulla lacinia ac mauris ut posuere.\n' +
            '\n' +
            'Cras consectetur nibh vitae enim mollis finibus. Curabitur vitae bibendum diam. Nam eleifend turpis eros, in varius erat tempor quis. Donec congue sem eu lorem varius euismod. In hac habitasse platea dictumst. Duis ut lacinia tortor, vitae pharetra elit. Maecenas ut luctus risus. Phasellus et enim mi. Morbi a suscipit quam. Vivamus lacinia nibh sed luctus ornare. Suspendisse mollis nec quam lobortis mollis. Donec aliquet, neque sit amet accumsan vulputate, augue nisl dapibus quam, id mattis est eros a est. Etiam vitae commodo neque. Sed turpis enim, auctor quis nunc id, tristique tincidunt ligula. Ut eu ipsum sollicitudin, placerat augue sit amet, hendrerit libero.\n' +
            '\n' +
            'Maecenas et lectus elementum, ornare justo at, venenatis nisl. Sed congue gravida gravida. Nam nibh nulla, convallis in maximus eget, condimentum a ipsum. Morbi quis accumsan libero. Sed vel eros dolor. Curabitur ut ultricies ligula. Duis vestibulum elit at sem molestie accumsan. Praesent vulputate gravida diam, vitae congue nisi pharetra non. Aliquam gravida non mauris eu condimentum. Maecenas dictum euismod pharetra. Sed feugiat congue mauris, non mattis quam rhoncus ut. Aenean mattis justo at enim auctor venenatis.'

    },
    {
        name: 'Ripe Malinka',
        img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
        description: '#f093fb → #f5576c',
        css: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
        height: 300,
        id: '4',
        cover: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut orci magna. Proin molestie, mauris in consequat varius, turpis velit scelerisque elit, ut ultrices est risus vitae magna. Mauris gravida condimentum lectus et auctor. Ut a odio nec risus fringilla dapibus vitae vel arcu. Integer eget ornare dolor, in congue velit. Vivamus mollis, velit sed tincidunt gravida, libero lacus sodales tortor, molestie imperdiet velit enim in urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus condimentum tortor diam, et ornare enim ultricies vel. Donec vitae rutrum turpis, ac placerat neque. Cras sit amet convallis massa. Quisque ut egestas orci.\n' +
            '\n' +
            'Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam vitae ligula viverra, sollicitudin justo ac, tincidunt nunc. Etiam dapibus lacus quam, iaculis pulvinar diam hendrerit at. Maecenas dapibus nunc nulla, at pellentesque ante feugiat vitae. Sed in nunc facilisis, euismod elit et, dictum erat. Nulla facilisi. Duis nec nibh aliquam, varius orci venenatis, lobortis nisi. Nam a magna pretium, dapibus ipsum mattis, ullamcorper sem. Sed a tincidunt neque. Maecenas nec erat ac odio venenatis porttitor eget vitae ipsum. Aliquam porta nisl vestibulum condimentum maximus. Donec vestibulum in sapien sit amet tempor. Nulla lacinia ac mauris ut posuere.\n' +
            '\n' +
            'Cras consectetur nibh vitae enim mollis finibus. Curabitur vitae bibendum diam. Nam eleifend turpis eros, in varius erat tempor quis. Donec congue sem eu lorem varius euismod. In hac habitasse platea dictumst. Duis ut lacinia tortor, vitae pharetra elit. Maecenas ut luctus risus. Phasellus et enim mi. Morbi a suscipit quam. Vivamus lacinia nibh sed luctus ornare. Suspendisse mollis nec quam lobortis mollis. Donec aliquet, neque sit amet accumsan vulputate, augue nisl dapibus quam, id mattis est eros a est. Etiam vitae commodo neque. Sed turpis enim, auctor quis nunc id, tristique tincidunt ligula. Ut eu ipsum sollicitudin, placerat augue sit amet, hendrerit libero.\n' +
            '\n' +
            'Maecenas et lectus elementum, ornare justo at, venenatis nisl. Sed congue gravida gravida. Nam nibh nulla, convallis in maximus eget, condimentum a ipsum. Morbi quis accumsan libero. Sed vel eros dolor. Curabitur ut ultricies ligula. Duis vestibulum elit at sem molestie accumsan. Praesent vulputate gravida diam, vitae congue nisi pharetra non. Aliquam gravida non mauris eu condimentum. Maecenas dictum euismod pharetra. Sed feugiat congue mauris, non mattis quam rhoncus ut. Aenean mattis justo at enim auctor venenatis.'

    },
    {
        name: 'Perfect White',
        img: 'https://material-ui.com/static/images/grid-list/hats.jpg',
        description: '#fdfbfb → #ebedee',
        css: 'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)',
        height: 400,
        id: '5',
        cover: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut orci magna. Proin molestie, mauris in consequat varius, turpis velit scelerisque elit, ut ultrices est risus vitae magna. Mauris gravida condimentum lectus et auctor. Ut a odio nec risus fringilla dapibus vitae vel arcu. Integer eget ornare dolor, in congue velit. Vivamus mollis, velit sed tincidunt gravida, libero lacus sodales tortor, molestie imperdiet velit enim in urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus condimentum tortor diam, et ornare enim ultricies vel. Donec vitae rutrum turpis, ac placerat neque. Cras sit amet convallis massa. Quisque ut egestas orci.\n' +
            '\n' +
            'Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam vitae ligula viverra, sollicitudin justo ac, tincidunt nunc. Etiam dapibus lacus quam, iaculis pulvinar diam hendrerit at. Maecenas dapibus nunc nulla, at pellentesque ante feugiat vitae. Sed in nunc facilisis, euismod elit et, dictum erat. Nulla facilisi. Duis nec nibh aliquam, varius orci venenatis, lobortis nisi. Nam a magna pretium, dapibus ipsum mattis, ullamcorper sem. Sed a tincidunt neque. Maecenas nec erat ac odio venenatis porttitor eget vitae ipsum. Aliquam porta nisl vestibulum condimentum maximus. Donec vestibulum in sapien sit amet tempor. Nulla lacinia ac mauris ut posuere.\n' +
            '\n' +
            'Cras consectetur nibh vitae enim mollis finibus. Curabitur vitae bibendum diam. Nam eleifend turpis eros, in varius erat tempor quis. Donec congue sem eu lorem varius euismod. In hac habitasse platea dictumst. Duis ut lacinia tortor, vitae pharetra elit. Maecenas ut luctus risus. Phasellus et enim mi. Morbi a suscipit quam. Vivamus lacinia nibh sed luctus ornare. Suspendisse mollis nec quam lobortis mollis. Donec aliquet, neque sit amet accumsan vulputate, augue nisl dapibus quam, id mattis est eros a est. Etiam vitae commodo neque. Sed turpis enim, auctor quis nunc id, tristique tincidunt ligula. Ut eu ipsum sollicitudin, placerat augue sit amet, hendrerit libero.\n' +
            '\n' +
            'Maecenas et lectus elementum, ornare justo at, venenatis nisl. Sed congue gravida gravida. Nam nibh nulla, convallis in maximus eget, condimentum a ipsum. Morbi quis accumsan libero. Sed vel eros dolor. Curabitur ut ultricies ligula. Duis vestibulum elit at sem molestie accumsan. Praesent vulputate gravida diam, vitae congue nisi pharetra non. Aliquam gravida non mauris eu condimentum. Maecenas dictum euismod pharetra. Sed feugiat congue mauris, non mattis quam rhoncus ut. Aenean mattis justo at enim auctor venenatis.'

    },
    {
        name: 'Near Moon',
        img: 'https://material-ui.com/static/images/grid-list/honey.jpg',
        description: '#5ee7df → #b490ca',
        css: 'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)',
        height: 300,
        id: '6',
        cover: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut orci magna. Proin molestie, mauris in consequat varius, turpis velit scelerisque elit, ut ultrices est risus vitae magna. Mauris gravida condimentum lectus et auctor. Ut a odio nec risus fringilla dapibus vitae vel arcu. Integer eget ornare dolor, in congue velit. Vivamus mollis, velit sed tincidunt gravida, libero lacus sodales tortor, molestie imperdiet velit enim in urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus condimentum tortor diam, et ornare enim ultricies vel. Donec vitae rutrum turpis, ac placerat neque. Cras sit amet convallis massa. Quisque ut egestas orci.\n' +
            '\n' +
            'Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam vitae ligula viverra, sollicitudin justo ac, tincidunt nunc. Etiam dapibus lacus quam, iaculis pulvinar diam hendrerit at. Maecenas dapibus nunc nulla, at pellentesque ante feugiat vitae. Sed in nunc facilisis, euismod elit et, dictum erat. Nulla facilisi. Duis nec nibh aliquam, varius orci venenatis, lobortis nisi. Nam a magna pretium, dapibus ipsum mattis, ullamcorper sem. Sed a tincidunt neque. Maecenas nec erat ac odio venenatis porttitor eget vitae ipsum. Aliquam porta nisl vestibulum condimentum maximus. Donec vestibulum in sapien sit amet tempor. Nulla lacinia ac mauris ut posuere.\n' +
            '\n' +
            'Cras consectetur nibh vitae enim mollis finibus. Curabitur vitae bibendum diam. Nam eleifend turpis eros, in varius erat tempor quis. Donec congue sem eu lorem varius euismod. In hac habitasse platea dictumst. Duis ut lacinia tortor, vitae pharetra elit. Maecenas ut luctus risus. Phasellus et enim mi. Morbi a suscipit quam. Vivamus lacinia nibh sed luctus ornare. Suspendisse mollis nec quam lobortis mollis. Donec aliquet, neque sit amet accumsan vulputate, augue nisl dapibus quam, id mattis est eros a est. Etiam vitae commodo neque. Sed turpis enim, auctor quis nunc id, tristique tincidunt ligula. Ut eu ipsum sollicitudin, placerat augue sit amet, hendrerit libero.\n' +
            '\n' +
            'Maecenas et lectus elementum, ornare justo at, venenatis nisl. Sed congue gravida gravida. Nam nibh nulla, convallis in maximus eget, condimentum a ipsum. Morbi quis accumsan libero. Sed vel eros dolor. Curabitur ut ultricies ligula. Duis vestibulum elit at sem molestie accumsan. Praesent vulputate gravida diam, vitae congue nisi pharetra non. Aliquam gravida non mauris eu condimentum. Maecenas dictum euismod pharetra. Sed feugiat congue mauris, non mattis quam rhoncus ut. Aenean mattis justo at enim auctor venenatis.'

    },
    {
        name: 'Wild Apple',
        img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg',
        description: '#d299c2 → #fef9d7',
        css: 'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)',
        height: 300,
        id: '7',
        cover: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut orci magna. Proin molestie, mauris in consequat varius, turpis velit scelerisque elit, ut ultrices est risus vitae magna. Mauris gravida condimentum lectus et auctor. Ut a odio nec risus fringilla dapibus vitae vel arcu. Integer eget ornare dolor, in congue velit. Vivamus mollis, velit sed tincidunt gravida, libero lacus sodales tortor, molestie imperdiet velit enim in urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus condimentum tortor diam, et ornare enim ultricies vel. Donec vitae rutrum turpis, ac placerat neque. Cras sit amet convallis massa. Quisque ut egestas orci.\n' +
            '\n' +
            'Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam vitae ligula viverra, sollicitudin justo ac, tincidunt nunc. Etiam dapibus lacus quam, iaculis pulvinar diam hendrerit at. Maecenas dapibus nunc nulla, at pellentesque ante feugiat vitae. Sed in nunc facilisis, euismod elit et, dictum erat. Nulla facilisi. Duis nec nibh aliquam, varius orci venenatis, lobortis nisi. Nam a magna pretium, dapibus ipsum mattis, ullamcorper sem. Sed a tincidunt neque. Maecenas nec erat ac odio venenatis porttitor eget vitae ipsum. Aliquam porta nisl vestibulum condimentum maximus. Donec vestibulum in sapien sit amet tempor. Nulla lacinia ac mauris ut posuere.\n' +
            '\n' +
            'Cras consectetur nibh vitae enim mollis finibus. Curabitur vitae bibendum diam. Nam eleifend turpis eros, in varius erat tempor quis. Donec congue sem eu lorem varius euismod. In hac habitasse platea dictumst. Duis ut lacinia tortor, vitae pharetra elit. Maecenas ut luctus risus. Phasellus et enim mi. Morbi a suscipit quam. Vivamus lacinia nibh sed luctus ornare. Suspendisse mollis nec quam lobortis mollis. Donec aliquet, neque sit amet accumsan vulputate, augue nisl dapibus quam, id mattis est eros a est. Etiam vitae commodo neque. Sed turpis enim, auctor quis nunc id, tristique tincidunt ligula. Ut eu ipsum sollicitudin, placerat augue sit amet, hendrerit libero.\n' +
            '\n' +
            'Maecenas et lectus elementum, ornare justo at, venenatis nisl. Sed congue gravida gravida. Nam nibh nulla, convallis in maximus eget, condimentum a ipsum. Morbi quis accumsan libero. Sed vel eros dolor. Curabitur ut ultricies ligula. Duis vestibulum elit at sem molestie accumsan. Praesent vulputate gravida diam, vitae congue nisi pharetra non. Aliquam gravida non mauris eu condimentum. Maecenas dictum euismod pharetra. Sed feugiat congue mauris, non mattis quam rhoncus ut. Aenean mattis justo at enim auctor venenatis.'

    },
    {
        name: 'Ladoga Bottom',
        img: 'https://material-ui.com/static/images/grid-list/plant.jpg',
        description: '#ebc0fd → #d9ded8',
        css: 'linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)',
        height: 250,
        id: '8',
        cover: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut orci magna. Proin molestie, mauris in consequat varius, turpis velit scelerisque elit, ut ultrices est risus vitae magna. Mauris gravida condimentum lectus et auctor. Ut a odio nec risus fringilla dapibus vitae vel arcu. Integer eget ornare dolor, in congue velit. Vivamus mollis, velit sed tincidunt gravida, libero lacus sodales tortor, molestie imperdiet velit enim in urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus condimentum tortor diam, et ornare enim ultricies vel. Donec vitae rutrum turpis, ac placerat neque. Cras sit amet convallis massa. Quisque ut egestas orci.\n' +
            '\n' +
            'Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam vitae ligula viverra, sollicitudin justo ac, tincidunt nunc. Etiam dapibus lacus quam, iaculis pulvinar diam hendrerit at. Maecenas dapibus nunc nulla, at pellentesque ante feugiat vitae. Sed in nunc facilisis, euismod elit et, dictum erat. Nulla facilisi. Duis nec nibh aliquam, varius orci venenatis, lobortis nisi. Nam a magna pretium, dapibus ipsum mattis, ullamcorper sem. Sed a tincidunt neque. Maecenas nec erat ac odio venenatis porttitor eget vitae ipsum. Aliquam porta nisl vestibulum condimentum maximus. Donec vestibulum in sapien sit amet tempor. Nulla lacinia ac mauris ut posuere.\n' +
            '\n' +
            'Cras consectetur nibh vitae enim mollis finibus. Curabitur vitae bibendum diam. Nam eleifend turpis eros, in varius erat tempor quis. Donec congue sem eu lorem varius euismod. In hac habitasse platea dictumst. Duis ut lacinia tortor, vitae pharetra elit. Maecenas ut luctus risus. Phasellus et enim mi. Morbi a suscipit quam. Vivamus lacinia nibh sed luctus ornare. Suspendisse mollis nec quam lobortis mollis. Donec aliquet, neque sit amet accumsan vulputate, augue nisl dapibus quam, id mattis est eros a est. Etiam vitae commodo neque. Sed turpis enim, auctor quis nunc id, tristique tincidunt ligula. Ut eu ipsum sollicitudin, placerat augue sit amet, hendrerit libero.\n' +
            '\n' +
            'Maecenas et lectus elementum, ornare justo at, venenatis nisl. Sed congue gravida gravida. Nam nibh nulla, convallis in maximus eget, condimentum a ipsum. Morbi quis accumsan libero. Sed vel eros dolor. Curabitur ut ultricies ligula. Duis vestibulum elit at sem molestie accumsan. Praesent vulputate gravida diam, vitae congue nisi pharetra non. Aliquam gravida non mauris eu condimentum. Maecenas dictum euismod pharetra. Sed feugiat congue mauris, non mattis quam rhoncus ut. Aenean mattis justo at enim auctor venenatis.'

    },
    {
        name: 'Sunny Morning',
        img: 'https://material-ui.com/static/images/grid-list/mushroom.jpg',
        description: '#f6d365 → #fda085',
        css: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
        height: 400,
        id: '9',
        cover: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut orci magna. Proin molestie, mauris in consequat varius, turpis velit scelerisque elit, ut ultrices est risus vitae magna. Mauris gravida condimentum lectus et auctor. Ut a odio nec risus fringilla dapibus vitae vel arcu. Integer eget ornare dolor, in congue velit. Vivamus mollis, velit sed tincidunt gravida, libero lacus sodales tortor, molestie imperdiet velit enim in urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus condimentum tortor diam, et ornare enim ultricies vel. Donec vitae rutrum turpis, ac placerat neque. Cras sit amet convallis massa. Quisque ut egestas orci.\n' +
            '\n' +
            'Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam vitae ligula viverra, sollicitudin justo ac, tincidunt nunc. Etiam dapibus lacus quam, iaculis pulvinar diam hendrerit at. Maecenas dapibus nunc nulla, at pellentesque ante feugiat vitae. Sed in nunc facilisis, euismod elit et, dictum erat. Nulla facilisi. Duis nec nibh aliquam, varius orci venenatis, lobortis nisi. Nam a magna pretium, dapibus ipsum mattis, ullamcorper sem. Sed a tincidunt neque. Maecenas nec erat ac odio venenatis porttitor eget vitae ipsum. Aliquam porta nisl vestibulum condimentum maximus. Donec vestibulum in sapien sit amet tempor. Nulla lacinia ac mauris ut posuere.\n' +
            '\n' +
            'Cras consectetur nibh vitae enim mollis finibus. Curabitur vitae bibendum diam. Nam eleifend turpis eros, in varius erat tempor quis. Donec congue sem eu lorem varius euismod. In hac habitasse platea dictumst. Duis ut lacinia tortor, vitae pharetra elit. Maecenas ut luctus risus. Phasellus et enim mi. Morbi a suscipit quam. Vivamus lacinia nibh sed luctus ornare. Suspendisse mollis nec quam lobortis mollis. Donec aliquet, neque sit amet accumsan vulputate, augue nisl dapibus quam, id mattis est eros a est. Etiam vitae commodo neque. Sed turpis enim, auctor quis nunc id, tristique tincidunt ligula. Ut eu ipsum sollicitudin, placerat augue sit amet, hendrerit libero.\n' +
            '\n' +
            'Maecenas et lectus elementum, ornare justo at, venenatis nisl. Sed congue gravida gravida. Nam nibh nulla, convallis in maximus eget, condimentum a ipsum. Morbi quis accumsan libero. Sed vel eros dolor. Curabitur ut ultricies ligula. Duis vestibulum elit at sem molestie accumsan. Praesent vulputate gravida diam, vitae congue nisi pharetra non. Aliquam gravida non mauris eu condimentum. Maecenas dictum euismod pharetra. Sed feugiat congue mauris, non mattis quam rhoncus ut. Aenean mattis justo at enim auctor venenatis.'

    },
    {
        name: 'Lemon Gate',
        img: 'https://material-ui.com/static/images/grid-list/olive.jpg',
        description: '#96fbc4 → #f9f586',
        css: 'linear-gradient(to top, #96fbc4 0%, #f9f586 100%)',
        height: 300,
        id: '10',
        cover: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut orci magna. Proin molestie, mauris in consequat varius, turpis velit scelerisque elit, ut ultrices est risus vitae magna. Mauris gravida condimentum lectus et auctor. Ut a odio nec risus fringilla dapibus vitae vel arcu. Integer eget ornare dolor, in congue velit. Vivamus mollis, velit sed tincidunt gravida, libero lacus sodales tortor, molestie imperdiet velit enim in urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus condimentum tortor diam, et ornare enim ultricies vel. Donec vitae rutrum turpis, ac placerat neque. Cras sit amet convallis massa. Quisque ut egestas orci.\n' +
            '\n' +
            'Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam vitae ligula viverra, sollicitudin justo ac, tincidunt nunc. Etiam dapibus lacus quam, iaculis pulvinar diam hendrerit at. Maecenas dapibus nunc nulla, at pellentesque ante feugiat vitae. Sed in nunc facilisis, euismod elit et, dictum erat. Nulla facilisi. Duis nec nibh aliquam, varius orci venenatis, lobortis nisi. Nam a magna pretium, dapibus ipsum mattis, ullamcorper sem. Sed a tincidunt neque. Maecenas nec erat ac odio venenatis porttitor eget vitae ipsum. Aliquam porta nisl vestibulum condimentum maximus. Donec vestibulum in sapien sit amet tempor. Nulla lacinia ac mauris ut posuere.\n' +
            '\n' +
            'Cras consectetur nibh vitae enim mollis finibus. Curabitur vitae bibendum diam. Nam eleifend turpis eros, in varius erat tempor quis. Donec congue sem eu lorem varius euismod. In hac habitasse platea dictumst. Duis ut lacinia tortor, vitae pharetra elit. Maecenas ut luctus risus. Phasellus et enim mi. Morbi a suscipit quam. Vivamus lacinia nibh sed luctus ornare. Suspendisse mollis nec quam lobortis mollis. Donec aliquet, neque sit amet accumsan vulputate, augue nisl dapibus quam, id mattis est eros a est. Etiam vitae commodo neque. Sed turpis enim, auctor quis nunc id, tristique tincidunt ligula. Ut eu ipsum sollicitudin, placerat augue sit amet, hendrerit libero.\n' +
            '\n' +
            'Maecenas et lectus elementum, ornare justo at, venenatis nisl. Sed congue gravida gravida. Nam nibh nulla, convallis in maximus eget, condimentum a ipsum. Morbi quis accumsan libero. Sed vel eros dolor. Curabitur ut ultricies ligula. Duis vestibulum elit at sem molestie accumsan. Praesent vulputate gravida diam, vitae congue nisi pharetra non. Aliquam gravida non mauris eu condimentum. Maecenas dictum euismod pharetra. Sed feugiat congue mauris, non mattis quam rhoncus ut. Aenean mattis justo at enim auctor venenatis.'

    },
    {
        name: 'New York',
        img: 'https://material-ui.com/static/images/grid-list/star.jpg',
        description: ' #fff1eb → #ace0f9',
        css: 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)',
        height: 360,
        id: '12',
        cover: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut orci magna. Proin molestie, mauris in consequat varius, turpis velit scelerisque elit, ut ultrices est risus vitae magna. Mauris gravida condimentum lectus et auctor. Ut a odio nec risus fringilla dapibus vitae vel arcu. Integer eget ornare dolor, in congue velit. Vivamus mollis, velit sed tincidunt gravida, libero lacus sodales tortor, molestie imperdiet velit enim in urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus condimentum tortor diam, et ornare enim ultricies vel. Donec vitae rutrum turpis, ac placerat neque. Cras sit amet convallis massa. Quisque ut egestas orci.\n' +
            '\n' +
            'Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam vitae ligula viverra, sollicitudin justo ac, tincidunt nunc. Etiam dapibus lacus quam, iaculis pulvinar diam hendrerit at. Maecenas dapibus nunc nulla, at pellentesque ante feugiat vitae. Sed in nunc facilisis, euismod elit et, dictum erat. Nulla facilisi. Duis nec nibh aliquam, varius orci venenatis, lobortis nisi. Nam a magna pretium, dapibus ipsum mattis, ullamcorper sem. Sed a tincidunt neque. Maecenas nec erat ac odio venenatis porttitor eget vitae ipsum. Aliquam porta nisl vestibulum condimentum maximus. Donec vestibulum in sapien sit amet tempor. Nulla lacinia ac mauris ut posuere.\n' +
            '\n' +
            'Cras consectetur nibh vitae enim mollis finibus. Curabitur vitae bibendum diam. Nam eleifend turpis eros, in varius erat tempor quis. Donec congue sem eu lorem varius euismod. In hac habitasse platea dictumst. Duis ut lacinia tortor, vitae pharetra elit. Maecenas ut luctus risus. Phasellus et enim mi. Morbi a suscipit quam. Vivamus lacinia nibh sed luctus ornare. Suspendisse mollis nec quam lobortis mollis. Donec aliquet, neque sit amet accumsan vulputate, augue nisl dapibus quam, id mattis est eros a est. Etiam vitae commodo neque. Sed turpis enim, auctor quis nunc id, tristique tincidunt ligula. Ut eu ipsum sollicitudin, placerat augue sit amet, hendrerit libero.\n' +
            '\n' +
            'Maecenas et lectus elementum, ornare justo at, venenatis nisl. Sed congue gravida gravida. Nam nibh nulla, convallis in maximus eget, condimentum a ipsum. Morbi quis accumsan libero. Sed vel eros dolor. Curabitur ut ultricies ligula. Duis vestibulum elit at sem molestie accumsan. Praesent vulputate gravida diam, vitae congue nisi pharetra non. Aliquam gravida non mauris eu condimentum. Maecenas dictum euismod pharetra. Sed feugiat congue mauris, non mattis quam rhoncus ut. Aenean mattis justo at enim auctor venenatis.'

    },
    {
        name: 'Soft Grass',
        img: 'https://material-ui.com/static/images/grid-list/bike.jpg',
        description: ' #c1dfc4 → #deecdd',
        css: 'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)',
        height: 370,
        id: '13',
        cover: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut orci magna. Proin molestie, mauris in consequat varius, turpis velit scelerisque elit, ut ultrices est risus vitae magna. Mauris gravida condimentum lectus et auctor. Ut a odio nec risus fringilla dapibus vitae vel arcu. Integer eget ornare dolor, in congue velit. Vivamus mollis, velit sed tincidunt gravida, libero lacus sodales tortor, molestie imperdiet velit enim in urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus condimentum tortor diam, et ornare enim ultricies vel. Donec vitae rutrum turpis, ac placerat neque. Cras sit amet convallis massa. Quisque ut egestas orci.\n' +
            '\n' +
            'Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam vitae ligula viverra, sollicitudin justo ac, tincidunt nunc. Etiam dapibus lacus quam, iaculis pulvinar diam hendrerit at. Maecenas dapibus nunc nulla, at pellentesque ante feugiat vitae. Sed in nunc facilisis, euismod elit et, dictum erat. Nulla facilisi. Duis nec nibh aliquam, varius orci venenatis, lobortis nisi. Nam a magna pretium, dapibus ipsum mattis, ullamcorper sem. Sed a tincidunt neque. Maecenas nec erat ac odio venenatis porttitor eget vitae ipsum. Aliquam porta nisl vestibulum condimentum maximus. Donec vestibulum in sapien sit amet tempor. Nulla lacinia ac mauris ut posuere.\n' +
            '\n' +
            'Cras consectetur nibh vitae enim mollis finibus. Curabitur vitae bibendum diam. Nam eleifend turpis eros, in varius erat tempor quis. Donec congue sem eu lorem varius euismod. In hac habitasse platea dictumst. Duis ut lacinia tortor, vitae pharetra elit. Maecenas ut luctus risus. Phasellus et enim mi. Morbi a suscipit quam. Vivamus lacinia nibh sed luctus ornare. Suspendisse mollis nec quam lobortis mollis. Donec aliquet, neque sit amet accumsan vulputate, augue nisl dapibus quam, id mattis est eros a est. Etiam vitae commodo neque. Sed turpis enim, auctor quis nunc id, tristique tincidunt ligula. Ut eu ipsum sollicitudin, placerat augue sit amet, hendrerit libero.\n' +
            '\n' +
            'Maecenas et lectus elementum, ornare justo at, venenatis nisl. Sed congue gravida gravida. Nam nibh nulla, convallis in maximus eget, condimentum a ipsum. Morbi quis accumsan libero. Sed vel eros dolor. Curabitur ut ultricies ligula. Duis vestibulum elit at sem molestie accumsan. Praesent vulputate gravida diam, vitae congue nisi pharetra non. Aliquam gravida non mauris eu condimentum. Maecenas dictum euismod pharetra. Sed feugiat congue mauris, non mattis quam rhoncus ut. Aenean mattis justo at enim auctor venenatis.'

    }
]

class Cell extends React.Component {
    render() {
        const { toggle, name, description, css, active, cover, img } = this.props
        return (
            <div
                className="cell"
                style={{ backgroundImage: css, cursor: !active ? 'pointer' : 'auto' }}
                onClick={!active ? toggle : undefined}>
                <Fade show={active}>
                    <div className="details">
                        <Slug>
                            <div className="circle" style={{ background: css }} />
                            <img src={img} />
                            <h1>{name}</h1>
                            <p>{description}</p>
                            <p >{cover}</p>
                        </Slug>
                    </div>
                </Fade>
                <Fade
                    show={!active}
                    from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
                    enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                    leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
                >
                    <div className="default">
                        <img src={img} style={{height:'150px', width: '100%'}}/>
                        <div style={{ zIndex: 1 }}>{name}</div>
                        <p style={{maxHeight: '200px', overflow:'hidden'}}>{cover}</p>
                    </div>
                </Fade>
            </div>
        )
    }
}

const  PostList = () => {

    return(
        <Grid
            className="grid"
            // Arbitrary data, should contain keys, possibly heights, etc.
            data={tileData}
            // Key accessor, instructs grid on how to fet individual keys from the data set
            keys={d => d.name}
            // Can be a fixed value or an individual data accessor
            heights={d => d.height}
            // Number of columns
            columns={window.innerWidth< 480? 1 : 3}
            // Space between elements
            margin={30}
            // Removes the possibility to scroll away from a maximized element
            lockScroll={false}
            // Delay when active elements (blown up) are minimized again
            closeDelay={0}
            // Regular react-spring configs
            config={config.default}>
            {(data, active, toggle) => (
                <Cell {...data} active={active} toggle={toggle} />
            )}
        </Grid>
    )
}

export default PostList;