import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() { }

  getData(): BlogPost[][] {
    return [
      [
    { title: 'Post 1', 
    summary : '5G networks are the next generation of mobile internet connectivity, offering faster speeds and more reliable connections on smartphones and other devices than ever before. Combining cutting-edge network technology and the very latest research, 5G should offer connections that are multitudes faster than current connections, with average download speeds of around 1GBps expected to soon be the norm. The networks will help power a huge rise in Internet of Things technology, providing the infrastructure needed to carry huge amounts of data, allowing for a smarter and more connected world. With development well underway, 5G networks are expected to launch across the world by 2020, working alongside existing 3G and 4G technology to provide speedier connections that stay online no matter where you are.'},

    {title: 'Post 2',
    summary:  '5G networks are the next generation of mobile internet connectivity, offering faster speeds and more reliable connections on smartphones and other devices than ever before. Combining cutting-edge network technology and the very latest research, 5G should offer connections that are multitudes faster than current connections, with average download speeds of around 1GBps expected to soon be the norm. The networks will help power a huge rise in Internet of Things technology, providing the infrastructure needed to carry huge amounts of data, allowing for a smarter and more connected world. With development well underway, 5G networks are expected to launch across the world by 2020, working alongside existing 3G and 4G technology to provide speedier connections that stay online no matter where you are.'},
 
    { title: 'Post 3', 
    summary : '5G networks are the next generation of mobile internet connectivity, offering faster speeds and more reliable connections on smartphones and other devices than ever before. Combining cutting-edge network technology and the very latest research, 5G should offer connections that are multitudes faster than current connections, with average download speeds of around 1GBps expected to soon be the norm. The networks will help power a huge rise in Internet of Things technology, providing the infrastructure needed to carry huge amounts of data, allowing for a smarter and more connected world. With development well underway, 5G networks are expected to launch across the world by 2020, working alongside existing 3G and 4G technology to provide speedier connections that stay online no matter where you are.'},

    { title: 'Post 4', 
    summary : '5G networks are the next generation of mobile internet connectivity, offering faster speeds and more reliable connections on smartphones and other devices than ever before. Combining cutting-edge network technology and the very latest research, 5G should offer connections that are multitudes faster than current connections, with average download speeds of around 1GBps expected to soon be the norm. The networks will help power a huge rise in Internet of Things technology, providing the infrastructure needed to carry huge amounts of data, allowing for a smarter and more connected world. With development well underway, 5G networks are expected to launch across the world by 2020, working alongside existing 3G and 4G technology to provide speedier connections that stay online no matter where you are.'}
  ],
  [
    { title: 'Post 5', 
    summary : '5G networks are the next generation of mobile internet connectivity, offering faster speeds and more reliable connections on smartphones and other devices than ever before. Combining cutting-edge network technology and the very latest research, 5G should offer connections that are multitudes faster than current connections, with average download speeds of around 1GBps expected to soon be the norm. The networks will help power a huge rise in Internet of Things technology, providing the infrastructure needed to carry huge amounts of data, allowing for a smarter and more connected world. With development well underway, 5G networks are expected to launch across the world by 2020, working alongside existing 3G and 4G technology to provide speedier connections that stay online no matter where you are.'},

    {title: 'Post 6',
    summary:  '5G networks are the next generation of mobile internet connectivity, offering faster speeds and more reliable connections on smartphones and other devices than ever before. Combining cutting-edge network technology and the very latest research, 5G should offer connections that are multitudes faster than current connections, with average download speeds of around 1GBps expected to soon be the norm. The networks will help power a huge rise in Internet of Things technology, providing the infrastructure needed to carry huge amounts of data, allowing for a smarter and more connected world. With development well underway, 5G networks are expected to launch across the world by 2020, working alongside existing 3G and 4G technology to provide speedier connections that stay online no matter where you are.'},
 
    { title: 'Post 7', 
    summary : '5G networks are the next generation of mobile internet connectivity, offering faster speeds and more reliable connections on smartphones and other devices than ever before. Combining cutting-edge network technology and the very latest research, 5G should offer connections that are multitudes faster than current connections, with average download speeds of around 1GBps expected to soon be the norm. The networks will help power a huge rise in Internet of Things technology, providing the infrastructure needed to carry huge amounts of data, allowing for a smarter and more connected world. With development well underway, 5G networks are expected to launch across the world by 2020, working alongside existing 3G and 4G technology to provide speedier connections that stay online no matter where you are.'},

    { title: 'Post 8', 
    summary : '5G networks are the next generation of mobile internet connectivity, offering faster speeds and more reliable connections on smartphones and other devices than ever before. Combining cutting-edge network technology and the very latest research, 5G should offer connections that are multitudes faster than current connections, with average download speeds of around 1GBps expected to soon be the norm. The networks will help power a huge rise in Internet of Things technology, providing the infrastructure needed to carry huge amounts of data, allowing for a smarter and more connected world. With development well underway, 5G networks are expected to launch across the world by 2020, working alongside existing 3G and 4G technology to provide speedier connections that stay online no matter where you are.'}
  ],
  [
    { title: 'Post 9', 
    summary : '5G networks are the next generation of mobile internet connectivity, offering faster speeds and more reliable connections on smartphones and other devices than ever before. Combining cutting-edge network technology and the very latest research, 5G should offer connections that are multitudes faster than current connections, with average download speeds of around 1GBps expected to soon be the norm. The networks will help power a huge rise in Internet of Things technology, providing the infrastructure needed to carry huge amounts of data, allowing for a smarter and more connected world. With development well underway, 5G networks are expected to launch across the world by 2020, working alongside existing 3G and 4G technology to provide speedier connections that stay online no matter where you are.'},

    {title: 'Post 10',
    summary:  '5G networks are the next generation of mobile internet connectivity, offering faster speeds and more reliable connections on smartphones and other devices than ever before. Combining cutting-edge network technology and the very latest research, 5G should offer connections that are multitudes faster than current connections, with average download speeds of around 1GBps expected to soon be the norm. The networks will help power a huge rise in Internet of Things technology, providing the infrastructure needed to carry huge amounts of data, allowing for a smarter and more connected world. With development well underway, 5G networks are expected to launch across the world by 2020, working alongside existing 3G and 4G technology to provide speedier connections that stay online no matter where you are.'},
 
    { title: 'Post 11', 
    summary : '5G networks are the next generation of mobile internet connectivity, offering faster speeds and more reliable connections on smartphones and other devices than ever before. Combining cutting-edge network technology and the very latest research, 5G should offer connections that are multitudes faster than current connections, with average download speeds of around 1GBps expected to soon be the norm. The networks will help power a huge rise in Internet of Things technology, providing the infrastructure needed to carry huge amounts of data, allowing for a smarter and more connected world. With development well underway, 5G networks are expected to launch across the world by 2020, working alongside existing 3G and 4G technology to provide speedier connections that stay online no matter where you are.'},

    { title: 'Post 12', 
    summary : '5G networks are the next generation of mobile internet connectivity, offering faster speeds and more reliable connections on smartphones and other devices than ever before. Combining cutting-edge network technology and the very latest research, 5G should offer connections that are multitudes faster than current connections, with average download speeds of around 1GBps expected to soon be the norm. The networks will help power a huge rise in Internet of Things technology, providing the infrastructure needed to carry huge amounts of data, allowing for a smarter and more connected world. With development well underway, 5G networks are expected to launch across the world by 2020, working alongside existing 3G and 4G technology to provide speedier connections that stay online no matter where you are.'}
  ],

  ];
  }
}
