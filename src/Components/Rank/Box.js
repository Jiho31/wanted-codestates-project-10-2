import React, { useState } from 'react';
import styled from 'styled-components';
import RankerInfo from './RankerInfo';
import RankingInfo from './RankingInfo';
import Buttons from './Buttons';
import Modal from './Modal';
import { OneInfos, TeamInfos } from '../../MockUP/rankData';
import './box.css';
const RankerBox = () => {
  const [modalState, setModalState] = useState(false);
  const setOnclick = () => setModalState(true);
  const defaultState = [true, false];
  const [isSelected, setIsSelected] = useState(defaultState);
  return (
    <>
      {modalState && <Modal setModalState={setModalState} />}
      <BaseWrapper>
        <div className="ocean">
          <div className="wave"></div>
        </div>
        <div className="ocean">
          <div className="wave"></div>
        </div>
        <div style={{ width: '1200px', margin: '0 auto' }}>
          <RankingInfo setOnclick={setOnclick} />
          <Buttons isSelected={isSelected} setIsSelected={setIsSelected} />
        </div>
        <Rankers>
          {isSelected[0]
            ? OneInfos.map((info) => {
                return <RankerInfo info={info} />;
              })
            : TeamInfos.map((info) => {
                return <RankerInfo info={info} />;
              })}
        </Rankers>
      </BaseWrapper>
    </>
  );
};

const BaseWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 5;
  position: relative;
  padding-top: 55px;
  width: 100%;
  min-width: 800px;
  margin: 0 auto;
  background-color: #005fcc;
  justify-content: center;
  flex-direction: column;
`;
const Rankers = styled.div`
  display: flex;
  justify-content: center;
`;
export default RankerBox;
