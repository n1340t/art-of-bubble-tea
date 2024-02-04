import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';
import { KF_TEA_LIST } from './constants';
import { shuffleArray } from './utils';
import { useReducer } from 'react';
function App() {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  return (
    <MDBContainer>
      <MDBRow className='p-3'>
        <MDBCol>
          <h1>Kung Fu tea</h1>
        </MDBCol>
        <MDBCol>
          <MDBBtn onClick={forceUpdate}>Reset list</MDBBtn>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <MDBListGroup light numbered>
            {shuffleArray(KF_TEA_LIST).map((tea) => (
              <MDBListGroupItem key={tea.name.toUpperCase()}>
                <p>{tea.name}</p>
                <div>Syrup/Powder: {tea.syrup}</div>
                <div>Tea: {tea.tea}</div>
                <div>Water: {tea.water}</div>
                <div>Milk: {tea.milk}</div>
                <div>Honey: {tea.honey}</div>
                <div>Note: {tea.note}</div>
              </MDBListGroupItem>
            ))}
          </MDBListGroup>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
