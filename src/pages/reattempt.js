import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import SearchIcon from "@material-ui/icons/Search";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import TwoWheelerIcon from "@material-ui/icons/TwoWheeler";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

const reattempt = () => {
  const [click, setClick] = useState(false);
  const [barClick, setBarClick] = useState(true);

  return (
    <Wrapper>
      <FirstHeaderWrapper>
        <HeaderContainer>
          <Title>Reattempt</Title>
          <SearchWrapper>
            <SearchBar type="text" placeholder="Pickup No" />
            <Search />
          </SearchWrapper>
        </HeaderContainer>
        <FirstMiddleWrapper>
          <CanceledWrapper onClick={() => setBarClick(true)}>
            <CanceledText>Canceled</CanceledText>
            {barClick ? <UnderBar /> : null}
          </CanceledWrapper>
          <IncompleteWrapper onClick={() => setBarClick(false)}>
            <IncompleteText>Incomplete</IncompleteText>
            {!barClick ? <UnderBar /> : null}
          </IncompleteWrapper>
        </FirstMiddleWrapper>
        <BoxWrapper onClick={() => setClick(true)}>
          <BoxLocationWrapper>
            <ImageWrapper>
              <ImageHolder
                src="/profile_2.png"
                alt="Box"
                width={35}
                height={35}
              />
            </ImageWrapper>
            <IdLocationWrapper>
              <IdText>PK000118052021</IdText>
              <LocationText>Hlaing, Yangon</LocationText>
            </IdLocationWrapper>
          </BoxLocationWrapper>
          <TimeWrapper>
            <TimeText>18 May 2021, 2:00 to 3:00 pm</TimeText>
          </TimeWrapper>
        </BoxWrapper>

        <BoxWrapper onClick={() => setClick(true)}>
          <BoxLocationWrapper>
            <ImageWrapper>
              <ImageHolder
                src="/profile_3.png"
                alt="Box"
                width={35}
                height={35}
              />
            </ImageWrapper>
            <IdLocationWrapper>
              <IdText>PK000118052021</IdText>
              <LocationText>Hlaing, Yangon</LocationText>
            </IdLocationWrapper>
          </BoxLocationWrapper>
          <TimeWrapper>
            <TimeText>18 May 2021, 2:00 to 3:00 pm</TimeText>
          </TimeWrapper>
        </BoxWrapper>
      </FirstHeaderWrapper>
      {click ? (
        <SecondHeaderWrapper>
          <ClickBoxHeader>
            <ClickIdTextWrapper>
              <Title>PK000118052021</Title>
              <ClickDate>18 May 2021, 4:21 PM</ClickDate>
            </ClickIdTextWrapper>
            <IconWrapper>
              <CrossIcon onClick={() => setClick(false)} />
            </IconWrapper>
          </ClickBoxHeader>
          <AddressWrapper>
            <AddressIcon />
            <AddressText>
              No.22, Building 32, Thu Nandar Street, Hlaing Myint Mo Estate,
              Hlaing, Yangon
            </AddressText>
          </AddressWrapper>
          <DateWrapper>
            <DateIcon />
            <DateText>18 May 2021, 2:00 to 3:00 pm</DateText>
          </DateWrapper>
          <NoteWrapper>
            <NoteIcon />
            <NoteText>-</NoteText>
          </NoteWrapper>
          <CashWrapper>
            <CashIcon />
            <CashText>-</CashText>
          </CashWrapper>
          <SecondImageTextWrapper>
            <ImageHolder
              src="/profile_2.png"
              alt="Image"
              width={50}
              height={50}
            />
            <CustomerInfoWrapper>
              <CustomerName>Jennie</CustomerName>
              <CustomerShopName>Pink Pink Online Shop</CustomerShopName>
              <CustomerPhno>09797122458</CustomerPhno>
            </CustomerInfoWrapper>
          </SecondImageTextWrapper>
          <BikeIconWrapper>
            <SecondImageTextWrapper>
              <ImageHolder
                src="/profile_4.png"
                alt="Image"
                width={50}
                height={50}
              />
              <CourierInfoWrapper>
                <CourierName>Soe Moe</CourierName>
                <CourierStatus>Active</CourierStatus>
              </CourierInfoWrapper>
            </SecondImageTextWrapper>
            <BikeIconContainer>
              <BikeIcon />
            </BikeIconContainer>
          </BikeIconWrapper>
          <CommentWrapper>
            <CommentIcon />
            <CommentText>Can't reach to pickup point</CommentText>
          </CommentWrapper>
          <TimeIconWrapper>
            <TimeIcon />
            <TimeIconText>16 may 2021, 6:00 pm</TimeIconText>
          </TimeIconWrapper>
          <ButtonWrapper>
            <ReAssignButton>Re-assign</ReAssignButton>
            <CancelButton>Cancel</CancelButton>
          </ButtonWrapper>
        </SecondHeaderWrapper>
      ) : null}
    </Wrapper>
  );
};

export default reattempt;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const FirstHeaderWrapper = styled.div`
  width: 28%;
  height: 50rem;
  align-items: flex-start;
  background-color: white;
  box-shadow: 10px 0 3px -10px #888;
  flex-direction: column;
  padding-left: 30px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.p`
  font-size: 1.3rem;
  font-family: "Poppins-Bold";
  color: #085588;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  margin-left: 25px;
`;

const SearchBar = styled.input`
  padding: 3px 15px 3px 30px;
  border-radius: 3px;
  width: 85%;
  font-size: 16px;
  border: 1.5px solid gray;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 13px;
    font-family: "Poppins-Regular";
  }
`;

const Search = styled(SearchIcon)`
  position: absolute;
  left: 0;
  color: rgba(0, 0, 0, 0.3);
  margin-left: 3px;
  padding: 3px;
`;

const FirstMiddleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

const UnderBar = styled.div`
  width: 80%;
  height: 2px;
  background-color: red;
  margin-top: 2px;
`;

const CanceledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  cursor: pointer;
  align-items: center;
`;

const CanceledText = styled.div`
  font-size: 12px;
  font-family: "Poppins-Regular";
`;
const IncompleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  cursor: pointer;
  align-items: center;
`;

const IncompleteText = styled.div`
  font-size: 12px;
  font-family: "Poppins-Regular";
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 10px;
`;

const ImageWrapper = styled.div`
  margin-right: 10px;
  align-self: center;
`;

const BoxLocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const IdLocationWrapper = styled.div`
  margin-left: 15px;
`;

const IdText = styled.div`
  font-family: "Poppins-Bold";
  font-size: 12px;
`;

const LocationText = styled.div`
  font-family: "Poppins-Regular";
  font-size: 12px;
`;

const TimeWrapper = styled.div`
  margin-right: 10px;
  align-self: center;
`;

const TimeText = styled.p`
  font-family: "Poppins-Bold";
  font-size: 10px;
  color: #6a8a9c;
`;

const SecondHeaderWrapper = styled.div`
  width: 30%;
  height: 50rem;
  align-items: center;
  background-color: white;
  flex-direction: column;
  padding-left: 10px;
  margin-left: 10px;
`;

const ImageHolder = styled(Image)`
  border-radius: 50%;
`;

const ClickBoxHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ClickIdTextWrapper = styled.div`
  flex-direction: column;
`;

const ClickDate = styled.p`
  font-family: "Poppins-Regular";
  font-size: 12px;
  color: gray;
`;

const IconWrapper = styled.div`
  margin-bottom: 25px;
`;

const CrossIcon = styled(ClearOutlinedIcon)`
  background-color: gray;
  border-radius: 50%;
  color: white;
  padding: 3px;
  margin-right: 10px;
  cursor: pointer;
`;

const AddressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AddressIcon = styled(RoomOutlinedIcon)`
  color: #e72030;
`;

const AddressText = styled.p`
  font-family: "Poppins-Regular";
  font-size: 12px;
  margin-left: 10px;
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const DateIcon = styled(EventOutlinedIcon)`
  color: #e72030;
`;

const DateText = styled.p`
  font-family: "Poppins-Regular";
  font-size: 12px;
  margin-left: 10px;
`;

const NoteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NoteIcon = styled(CommentOutlinedIcon)`
  color: #e72030;
`;

const NoteText = styled.p`
  font-family: "Poppins-Regular";
  font-size: 12px;
  margin-left: 10px;
`;

const CashWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CashIcon = styled(LocalAtmIcon)`
  color: #e72030;
`;

const CashText = styled.p`
  font-family: "Poppins-Regular";
  font-size: 12px;
  margin-left: 10px;
`;

const SecondImageTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 5px 15px 0;
`;

const CustomerInfoWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-left: 10px;
`;

const CustomerName = styled.div`
  font-family: "Poppins-Bold";
  font-size: 12px;
`;

const CustomerShopName = styled.div`
  font-family: "Poppins-Regular";
  font-size: 12px;
`;

const CustomerPhno = styled.div`
  font-family: "Poppins-Regular";
  font-size: 12px;
`;

const CourierInfoWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-left: 10px;
`;

const CourierName = styled.div`
  font-family: "Poppins-Bold";
  font-size: 12px;
`;

const CourierStatus = styled.div`
  font-family: "Poppins-Regular";
  font-size: 12px;
`;

const BikeIconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;

const BikeIconContainer = styled.div`
  padding: 20px;
  border-radius: 5px;
  border: 2px solid #c08893;
  margin: 5px 0 5px 100px;
`;

const BikeIcon = styled(TwoWheelerIcon)`
  color: black;
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CommentIcon = styled(QuestionAnswerIcon)`
  color: #e72030;
`;

const CommentText = styled.p`
  font-family: "Poppins-Regular";
  font-size: 12px;
  margin-left: 10px;
`;

const TimeIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TimeIcon = styled(QueryBuilderIcon)`
  color: #e72030;
`;

const TimeIconText = styled.p`
  font-family: "Poppins-Regular";
  font-size: 12px;
  margin-left: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 5px;
`;

const ReAssignButton = styled.button`
  padding: 6px 50px;
  color: white;
  font-family: "Poppins-Regular";
  font-size: 16px;
  background-color: #0a5687;
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
  margin-right: 20px;
`;

const CancelButton = styled.button`
  padding: 6px 65px;
  color: white;
  font-family: "Poppins-Regular";
  font-size: 16px;
  background-color: #ee1c25;
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
`;
