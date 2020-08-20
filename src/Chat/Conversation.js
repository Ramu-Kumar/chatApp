import React, { Component } from 'react';
import './Conversation.css'



/*
  1) Material Icon
  2) Bootstrap Class
  
  pls make sure availability of this two links in index.html, while run the application
*/

const users = [
  {
    name: 'Ram Kumar',
    time: '01:05 AM',
    userImg: 'https://i.ytimg.com/vi/K4zm30yeHHE/maxresdefault.jpg',
    messages: [
      {
        type: 'send',
        value: 'Hi'
      },
      {
        type: 'receive',
        value: 'How are you?'
      }
    ]
  },
  {
    name: 'Prathap Bose',
    time: '02:50 AM',
    userImg: 'https://www.popcultureshocktoys.com/content/images/thumbs/0006453_optimus-prime-classic-series_600.jpeg',
    messages: [
      {
        type: 'send',
        value: 'Hi'
      },
      {
        type: 'receive',
        value: 'I have some work ! I supposed to finish today itself , u guys carry on , i will join from tomorrow onwards'
      },
      {
        type: 'send',
        value: 'It is not good time to talk , you just leave now , we will meet later and discuss about this later'
      },
      {
        type: 'receive',
        value: '',
        attachment:true
      },
      {
        type: 'receive',
        value: 'welcome ! '
      }
    ]
  },
  {
    name: 'Paneer Selvam',
    time: '12:11 PM',
    userImg: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2016%2F01%2FTerminator-2-1200x873.jpg',
    messages: [
      {
        type: 'send',
        value: 'Hi'
      },
      {
        type: 'receive',
        value: 'See you later!'
      }
    ]
  },
  {
    name: 'Prasanth',
    time: '01:08 PM',
    userImg: 'http://i66.tinypic.com/2qtbqxe.jpg',
    messages: [
      {
        type: 'send',
        value: 'Hi'
      },
      {
        type: 'receive',
        value: 'Come soon!'
      }
    ]
  },
  {
    name: 'Varun Daga',
    time: '05:05 PM',
    userImg: 'https://cdn.vox-cdn.com/thumbor/AYUayCXcqYxHDkR4a1N9azY5c_8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9375391/MV5BYjg1Yjk1MTktYzE5Mi00ODkwLWFkZTQtNTYxYTY3ZDVmMWUxXkEyXkFqcGdeQXVyNjUwNzk3NDc_._V1_.jpg',
    messages: [
      {
        type: 'send',
        value: 'Hi'
      },
      {
        type: 'receive',
        value: 'Happy birthday!'
      }
    ]
  },
  {
    name: 'Ishan Jain',
    time: '06:05 PM',
    userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzQ3HEvJBpgptB48mdCwRt_BHrmNrDwQiIlrjgJbDKihAV_NI',
    messages: [
      {
        type: 'send',
        value: 'Hi'
      },
      {
        type: 'receive',
        value: 'Let us meet soon'
      }
    ]
  }
]

const menu = [
  'https://cdn.fastly.picmonkey.com/content4/previews/social/social_59_550.png',
  'https://cdn.fastly.picmonkey.com/content4/previews/social/social_57_550.png',
  'https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=399&h=399',
]

const inboxData = [
  [
    {
      text: 'All Messages',
      count: 28
    },
    {
      text: 'Unread',
      count: 12
    },
    {
      text: 'Important',
      count: 15
    },
    {
      text: 'Drafts',
      count: 4
    }
  ],
  [
    {
      text: 'Teams',
      count: 2
    },
    {
      text: 'Groups',
      count: 5
    },
    {
      text: 'Channels',
      count: 15
    },
    {
      text: 'Locations',
    },
    {
      text: 'Media',
      count: 120
    }
  ],
  [
    {
      text: 'Help',
    },
    {
      text: 'Settings',
    },
  ]
]

const details = [
  {
    title: 'Nickname',
    value: 'Killa kella'
  },
  {
    title: 'Tel',
    value: '012 222 2345'
  },
  {
    title: 'Date of Birth',
    value: '07/08/1990'
  },
  {
    title: 'Gender',
    value: 'Female'
  },
  {
    title: 'Language',
    value: 'Engish'
  }
]

class Conversation extends Component {
  state = {
    messageValue: '',
    selectedCount: 1,
    users,
    usersList: users

  }

  onListSearch = (event) => {
    let value = event.target.value;
    let list = [...this.state.users];
    const filteredList = list.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    })
    this.setState({
      usersList: filteredList
    })
  }

  onMessageChange = (event) => {
    this.setState({
      messageValue: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    let users = this.state.users
    if (this.state.messageValue) {
      users[this.state.selectedCount].messages.push({
        value: this.state.messageValue,
        type: 'send'
      })
      users[this.state.selectedCount].messages.push({
        type: 'receive',
        value: 'I am fine , How are you!'
      })
      this.setState({ users, messageValue: '' })
    }
  }

  setActive = (count) => {
    this.setState({
      selectedCount: count
    })
  }

  checkActive = (count) => {
    return this.state.selectedCount === count ? 'active' : ''
  }


  render() {
    return (
      <div className="dashboard-container" >
        <div className="chat-container">
          <div className='media-menu'>
            <div>
              <span className="material-icons">
                menu
              </span>
            </div>
            {
              menu.map((item, index) => (
                <div key={index} className={index === 2 ? 'menu-active' : ''}><img src={item}  alt={"img"+index} /></div>
              ))
            }
          </div>
          <div className='inbox'>
            <div className='inbox-header'>
              <h4>Inbox</h4>
              <span className="material-icons">
                person_add
              </span>
            </div>
            {
              inboxData.map((item,i) => (
                <div key={i} className='inbox-list'>
                  {
                    item.map((element,i) => (
                      <div key={i} className={`inbox-content ${element.text === 'All Messages' ? 'menu-active' : ''}`}>
                        <p>{element.text}</p>
                        <p>{element.count}</p>
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>
          <div className="border-right">
            <div className="search-box">
              <div className="input-wrapper">
                <i className="material-icons">search</i>
                <input onChange={this.onListSearch} placeholder="Search" type="text" />
              </div>
            </div>
            {
              this.state.usersList.map((item, index) => {
                let length = item.messages.length - 1;
                return <div key={index} onClick={() => this.setActive(index)} className={`friend-drawer friend-drawer-list ${this.checkActive(index)}`}>
                  <img className="profile-image" src={item.userImg} alt="" />
                  <div className="text">
                    <h5>{item.name}</h5>
                    <p className="text-muted">{item.messages[length].value}</p>
                  </div>
                  <span className="time text-muted small">{item.time}</span>
                </div>
              })
            }
          </div>
          <div className="chat-message-container">
            <div className='chat-header'>
              <div className="friend-drawer chat-row">
                <img className="profile-image" src={this.state.users[this.state.selectedCount].userImg} alt="" />
                <div className="text">
                  <h4 className="user-header">{this.state.users[this.state.selectedCount].name}</h4>
                </div>
              </div>

              <div style={{display:"flex",marginLeft:"84px"}}>
                <div className="icon_title"><span className="material-icons">
                star
              </span></div>
                <div className="icon_title"><span className="material-icons">
                call
              </span></div>
                <div className="icon_title"><span className="material-icons">
                videocam
              </span></div>
              </div>
            </div>
            <div className="chat-panel">
              {
                this.state.users[this.state.selectedCount].messages.map((item,i) => {
                  if (item.type === 'send')
                    return <div key={i} className="row left-msg">
                      <div className="col-xs-6 d-flex">
                        <img className="profile-image" src='https://img.theweek.in/content/dam/week/news/entertainment/images/2019/4/26/thanos-avengers-infinity.jpg' alt="" />
                        <div className="chat-bubble chat-left">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  else return <div key={i} className="row right-msg">
                    <div className="col-xs-6 d-flex right-column">
                      <div className="chat-bubble chat-right">
                        {item.value}
                        {item.attachment&&<div className="cards_msg">
                          
                            <img style={{maxWidth:"100%",width:"100px",borderRadius:"5px",height:"100px",margin:"10px"}} src="https://d2d3qesrx8xj6s.cloudfront.net/img/screenshots/4c79e51f564ea8679637d465ed15bd4c4221dd5f.jpeg" alt="no network"/>
                          
                          <div className="card_txt">

                          <h4>Ready to Die</h4>
                          <p>The Notemade B.I.G</p>
                          <p>* * * *   </p>
                          <button>$12.99 - BUY NOW</button>
                          </div>
                        </div> }
                      </div>
                      <img className="profile-image" src={this.state.users[this.state.selectedCount].userImg} alt="" />
                    </div>
                  </div>
                })
              }
            </div>
            <form className="chat-box-tray" onSubmit={this.onFormSubmit}>
              <div>
                <i className="material-icons">sentiment_very_satisfied</i>
                <input value={this.state.messageValue} type="text" onChange={this.onMessageChange} placeholder="Type your message here..." />
              </div>
              <div>
                <i className="material-icons">mic</i>
                <i onClick={this.onFormSubmit} className="material-icons">send</i>
              </div>
            </form>
          </div>
          <div className='profile'>
            <div className='notification'>
              <span className="material-icons">
                notifications
              </span>
              <p>Matt Thomson</p>
            </div>
            <div className='user-profile'>
              <img alt="No Internet" src='https://img.theweek.in/content/dam/week/news/entertainment/images/2019/4/26/thanos-avengers-infinity.jpg'/>
              <h3>Kirsten Mckeller</h3>
              <p>Cape Town, RSA</p>
            </div>
            <div className='user-details'>
              {
                details.map((item,i) => (
                  <div key={i} className='user-content'>
                    <p>{item.title}</p>
                    <p>{item.value}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Conversation;