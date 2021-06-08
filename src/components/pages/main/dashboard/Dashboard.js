import './dashboard.css'
import hello from '../../../../assets/hello.jpg'
import Chart from './Chart'
import { Container, Row, Col } from 'react-bootstrap'
import NavbarAll from '../../../NavbarAll'

const Main = () => {
  return (
    <>
      <NavbarAll />
      <Container fluid className='main__container'>
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className='main__title'>
          <img className='rounded-circle' src={hello} alt='hello' />
          <div className='main__greeting'>
            <h1>Hello David</h1>
            <p>Welcome back</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <Row className='cardsOverview'>
          <Col style={{ paddingTop: '3vh' }}>
            <div className='card bg-success'>
              <i className='fa fa-users fa-2x' aria-hidden='true'></i>
              <div className='card_inner'>
                <p className='text-white'>Suppliers</p>
                <span className='font-bold text-title text-white'>53</span>
              </div>
            </div>
          </Col>
          <Col style={{ paddingTop: '3vh' }}>
            <div className='card bg-info'>
              <i
                className='fa fa-user-o fa-2x text-green'
                aria-hidden='true'
              ></i>
              <div className='card_inner'>
                <p className='text-white'>Users</p>
                <span className='font-bold text-white text-title'>7</span>
              </div>
            </div>
          </Col>
          <Col style={{ paddingTop: '3vh' }}>
            <div className='card bg-primary'>
              <i
                className='fa fa-shopping-cart fa-2x text-yellow'
                aria-hidden='true'
              ></i>
              <div className='card_inner'>
                <p className='text-white'>pending orders</p>
                <span className='font-bold text-white text-title'>10</span>
              </div>
            </div>
          </Col>
          <Col style={{ paddingTop: '3vh' }}>
            <div className='card bg-secondary'>
              <i
                className='fa fa-bicycle fa-2x text-green'
                aria-hidden='true'
              ></i>
              <div className='card_inner'>
                <p className='text-white'>Deliveries Today</p>
                <span className='font-bold text-white text-title'>15</span>
              </div>
            </div>
          </Col>
        </Row>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <Row style={{ paddingTop: '10vh' }}>
          <Col>
            <div className='charts__left'>
              <div className='charts__left__title'>
                <div>
                  <h1>Daily Performance Analysis</h1>
                </div>
                <i className='fa fa-usd' aria-hidden='true'></i>
              </div>
              <Chart />
            </div>
          </Col>
          <Col>
            <div className='charts__right'>
              <div className='charts__right__title'>
                <div>
                  <h1>Stats Reports</h1>
                </div>
                <i className='fa fa-usd' aria-hidden='true'></i>
              </div>
            </div>

            <Row>
              <Col>
                <Row>
                  <Col style={{ paddingTop: '2vh' }}>
                    <div className='card1'>
                      <h1>Income</h1>
                      <p>$75,300</p>
                    </div>
                  </Col>
                  <Col style={{ paddingTop: '2vh' }}>
                    <div className='card2'>
                      <h1>Sales</h1>
                      <p>$124,200</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ paddingTop: '2vh' }}>
                    <div className='card3'>
                      <h1>Customers</h1>
                      <p>3900</p>
                    </div>
                  </Col>
                  <Col style={{ paddingTop: '2vh' }}>
                    <div className='card4'>
                      <h1>Orders</h1>
                      <p>1881</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          {/* <!-- CHARTS ENDS HERE --> */}
        </Row>
      </Container>
    </>
  )
}

export default Main
