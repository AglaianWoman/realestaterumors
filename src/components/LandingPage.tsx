

import * as React from 'react'

import WorldMap from './WorldMap'
import FooterLinks from './FooterLinks'
import DraggableList from './DraggableList'
import ImgOverlay from './ImgOverlay'
import Carousel from './Carousel'
import CarouselTile from './CarouselTile'
import Globe from './Globe'

import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import * as gsap from 'gsap'

import 'styles/LandingPage.scss'
import SarahDrasner from './SarahDrasner'




export default class LandingPage extends React.Component<any, any> {

  state = {
    language: 'en'
  }

  shouldComponentUpdate(nextProps, nextState) {
    if ((this.state === nextState) && (this.props === nextProps)) {
      return false
    }
    return true
  }

  setLanguage = (language: string): void => {
    this.setState({ language: language })
  }

  languageNav = (): JSX.Element => {
    return (
      <div className="landing-languages">
        <p className='languages' onClick={() => this.setLanguage("en")}><a>English</a></p>
        <span className='languages'>—</span>
        <p className='languages' onClick={() => this.setLanguage("ch")} style={{ marginTop: '0.1rem' }}>
          <a>中文</a>
        </p>
        <span className='languages'>—</span>
        <p className='languages' onClick={() => this.setLanguage("ru")}><a>Русский</a></p>
      </div>
    )
  }

  render() {
    return (
      <div className='landing-page'>
        <div className='background-color-slider'></div>
        <div className='hero-container'>
          <div> { this.languageNav() } </div>

          <CSSTransitionGroup
            transitionName="router-fade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            { switchLanguageHeader(this.state.language) }
          </CSSTransitionGroup>

          <div className='world-map-container'>
            <div className="world-map-background"></div>
            <SarahDrasner language={this.state.language}/>
          </div>

          {/* <div className='world-map-container'> */}
          {/*   <Globe/> */}
          {/* </div> */}

          { switchLanguageHeader2(this.state.language) }

          <div className="landing-page-listings-container">
            <Carousel className='landing-page-listings-flex vertical__carousel'>
            {(
              [1,3,11,12,13,14,15].map((n, i) => {
                return (
                  <CarouselTile key={i}
                    onClick={() => { console.log('tile clicked') }}
                    img={require(`../img/house${n}.svg`)}
                    verticalTiles={true}
                  >
                    <div>Cool</div>
                    <div>Beans</div>
                  </CarouselTile>
                )
              })
            )}
            </Carousel>
            <Carousel className='landing-page-listings-flex vertical__carousel'>
            {(
              [6,7,5,4,9,16,18,15].map((n, i) => {
                return (
                  <CarouselTile key={i}
                    onClick={() => { console.log('tile clicked') }}
                    img={require(`../img/house${n}.svg`)}
                    verticalTiles={true}
                  >
                    <div>Cool</div>
                    <div>Beans</div>
                  </CarouselTile>
                )
              })
            )}
            </Carousel>
          </div>

          <FooterLinks/>
        </div>
      </div>
    )
  }
}



const switchLanguageHeader = (language: string): JSX.Element => {
  switch (language) {
    case 'ch': {
      return (
        <div className='landing-page-header-container' key='ch'>
          <div className='landing-page-header'>
            <div> <h1>Empire</h1> </div>
            <div> <h2>实时市场 /</h2> </div>
            <div> <h2>房地产投标和估值。</h2> </div>
          </div>
          <div className='landing-page-sub-header'>
            <h3>在地图上放置和分享实时预测。</h3>
            <p><b>Card Game: 大老二 (Big Old 2).</b></p>
            <p>
            Lorem存有悲坐阿梅德，consectetur adipiscing elit，sed的tempor和活力，使勞動和悲傷，一些重要的事情要做eiusmod。
                多年來，我會來的，誰將會nostrud aliquip了她鍛煉的優勢，使刺激措施，如果學區和長壽。
            </p>
          </div>
        </div>
      )
    }
    case 'ru': {
      return (
        <div className='landing-page-header-container' key='ru'>
          <div className='landing-page-header'>
            <div> <h1>Empire</h1> </div>
            <div> <h2>Рынок в реальном времени для /</h2> </div>
            <div> <h2>Ставки и оценки недвижимости.</h2> </div>
          </div>
          <div className='landing-page-sub-header'>
            <h3>Место и доля предсказаний в реальном времени на карте.</h3>
            <p> <b>Card Game: дурак (Idiot).</b> </p>
            <p> Lorem Ipsum боль сидеть Амет, consectetur adipiscing Элит, sed Tempor и жизнеспособность, так что труд и горе, некоторые важные вещи, чтобы сделать eiusmod.
            На протяжении многих лет я пришел, кто nostrud aliquip из нее преимущества упражнений, так что усилия по стимулированию, если школьный округ и долговечность.
            </p>
          </div>
        </div>
      )
    }
    default: {
      return (
        <div className='landing-page-header-container' key='en'>
          <div className='landing-page-header'>
            <div> <h1>Empire</h1> </div>
            <div> <h2>Expanded Market for /</h2> </div>
            <div> <h2>Predictions In Real Estate.</h2> </div>
          </div>
          <div className='landing-page-sub-header'>
            <h3>Place and share real-time predictions on the map.</h3>
            <p> <b>Card Game: Poker/Blackjack.</b>  </p>
            <p>
            Watch meta-auctions occur in real-time across the bid-scape. Polygrams.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      )
    }
  }
}

const switchLanguageHeader2 = (language: string): JSX.Element => {
  switch (language) {
    case 'ch': {
      return (
        <div className="landing-page-header2-container">
          <div className='landing-page-header2'>
            <h2>发现新上市 /</h2>
            <h2>贸易估值并赚取收益。</h2>
          </div>
          <div className='landing-page-sub-header'>
            <h3>对不公开的属性进行投标。</h3>
            Lorem存有悲坐阿梅德，consectetur adipiscing elit，的和活力，使勞動和悲傷，一些重要的事情要做。多年來，我會來的，誰將會nostrud aliquip了她鍛煉的優勢，使刺激措施，如果學區和長壽。想成為在cupidatat cillum疼痛已經在等dolore麥格納被批評逃離產生任何結果的樂趣。Excepteur cupidatat黑人就不是excepteur，舒緩心靈，那就是，他們拋棄了那些誰是責怪你的煩惱的一般責任。
            <br/>
            <h4>#房地产谣言 / #不公开的属性 / #星际房地产 </h4>
          </div>
        </div>
      )
    }
    case 'ru': {
      return (
        <div className="landing-page-header2-container">
          <div className='landing-page-header2'>
            <h2>Откройте для себя новые списки /</h2>
            <h2>Торговые оценки и вознаграждения.</h2>
          </div>
          <div className='landing-page-sub-header'>
            <h3>Ставка на незарегистрированные свойства.</h3>
            <br/>
            Lorem Ipsum боль сидеть Амет лит и жизнеспособность, так что труд и горе, некоторые важные вещи, чтобы сделать eiusmod.
              На протяжении многих лет я пришел, кто из нее преимущества упражнений, так что усилия по стимулированию, если школьный округ и долговечность.
              Хотите быть боль в cupidatat cillum была подвергнута критике в др Dolore MAGNA бежать не производит результирующую удовольствие.
            <h4>#Слухи+о+недвижимости / #Частные+объекты / #Межзвездная+недвижимость</h4>
          </div>
        </div>
      )
    }
    default: {
      return (
        <div className="landing-page-header2-container">
          <div className='landing-page-header2'>
            <h2>Discover new listings /</h2>
            <h2>Trade valuations and earn rewards.</h2>
          </div>
          <div className='landing-page-sub-header'>
            <h3>Bid on unlisted properties</h3>
            Create a crowd-funded real-estate trust, and initiate real-estate investments on blocks of land.
            Initiate package auctions on groups of land parcels and start your own street or neighbourhood.
            <br/>
            <h4>#real+estate+rumors / #unlisted+properties / #interstellar+real+estate</h4>
          </div>
        </div>
      )
    }
  }
}

