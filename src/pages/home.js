import React from 'react'
import TopicBox from '../components/TopicBox'
import Content from '../components/Content'

export default function home() {
  return (
    <div>
        <TopicBox topic = "valorant" price ="200">
          <span>This is description</span>
        </TopicBox>
        <TopicBox topic = "got" price ="300">
          <button>This is a Button</button>
        </TopicBox>
        <TopicBox topic = "rdr2" price ="400">
          <p>hello i am methush</p>
        </TopicBox>
        
    </div>
  )
}
