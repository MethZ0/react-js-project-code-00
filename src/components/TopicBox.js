import React from 'react'
import './topicbox.css'

export default function TopicBox() {
    const topic = "My favourite game is valorant"
    const item = " and GOT"
    const foodprices = {kottu: "250", rice: "350"} //we cannot use object and boolean as dynamic compponents

    const a = 10;
    const b = 20;
    const c = a+b;
  return (
    <div>
      <div className="topicBox">
        <span className='text'>{topic} {item} {c}</span>
      </div>
    </div>
  )
}
