import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import MapGL from "react-map-gl";
import SearchIcon from "@material-ui/icons/Search";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import TwoWheelerIcon from "@material-ui/icons/TwoWheeler";

import { courierData, clientData, clientData_2 } from "constants/Data";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibW9lLXRoZXQiLCJhIjoiY2tvanRrOW5rMHhyZTJ3anp2NWw2ZnAzaCJ9.MjAsSE5-apWBbqbVa_oQBQ";

const pickup = () => {
  const [viewport, setViewport] = useState({
    latitude: 16.852852,
    longitude: 96.122892,
    zoom: 12,
    bearing: 0,
    pitch: 0,
  });

  const [click, setClick] = useState(true);
  const [barClick, setBarClick] = useState(true);
  const [box, setBox] = useState(null);
  const [courierInfo, setCourierInfo] = useState(null);

  console.log(box);

  if (box) {
    // Need to change something in here
    if (box.courierInfo == null) {
      box.courierInfo = courierInfo ? courierInfo : null;
    }
  }

  return (
    <Wrapper>
      <FirstHeaderWrapper click={barClick}>
        {click ? (
          <>
            <HeaderContainer>
              <Title>Pickup</Title>
              <SearchWrapper>
                <SearchBar type="text" placeholder="Pickup No" />
                <Search />
              </SearchWrapper>
            </HeaderContainer>
            <FirstMiddleWrapper>
              <UnassignedWrapper onClick={() => setBarClick(true)}>
                <UnassignedText>Unassigned</UnassignedText>
                {barClick ? <UnderBar /> : null}
              </UnassignedWrapper>
              <AssignedWrapper onClick={() => setBarClick(false)}>
                <AssignedText>Assigned</AssignedText>
                {!barClick ? <UnderBar /> : null}
              </AssignedWrapper>
            </FirstMiddleWrapper>
            {barClick
              ? clientData.map((data) => (
                  <BoxWrapper
                    onClick={() => {
                      setBox(data);
                      setClick(false);
                    }}
                    key={data.id}
                  >
                    <BoxLocationWrapper>
                      <ImageWrapper>
                        <Image
                          src="/box.png"
                          alt="Box"
                          width={35}
                          height={35}
                        />
                      </ImageWrapper>
                      <IdLocationWrapper>
                        <IdText>{data.PickupID}</IdText>
                        <LocationText>Hlaing, Yangon</LocationText>
                      </IdLocationWrapper>
                    </BoxLocationWrapper>
                    <TimeWrapper>
                      <TimeText>{data.PickupDate}</TimeText>
                    </TimeWrapper>
                  </BoxWrapper>
                ))
              : null}
            {!barClick
              ? clientData_2.map((data) => (
                  <BoxWrapper
                    onClick={() => {
                      setBox(data);
                      setClick(false);
                    }}
                    key={data.id}
                  >
                    <BoxLocationWrapper>
                      <ImageWrapper>
                        <SecondImage
                          src={data.courierInfo?.img}
                          alt="Image"
                          width={35}
                          height={35}
                        />
                      </ImageWrapper>
                      <IdLocationWrapper>
                        <IdText>{data.PickupID}</IdText>
                        <LocationText>Hlaing, Yangon</LocationText>
                      </IdLocationWrapper>
                    </BoxLocationWrapper>
                    <TimeWrapper>
                      <TimeText>{data.PickupDate}</TimeText>
                    </TimeWrapper>
                    <StatusWrapper>
                      <StatusText>Pending</StatusText>
                    </StatusWrapper>
                  </BoxWrapper>
                ))
              : null}
          </>
        ) : box ? (
          <>
            <ClickBoxHeader>
              <ClickIdTextWrapper>
                <Title>{box.PickupID}</Title>
                <ClickDate>{box.PickupTime}</ClickDate>
              </ClickIdTextWrapper>
              <IconWrapper>
                <EditIcon />
                <CrossIcon onClick={() => setClick(true)} />
              </IconWrapper>
            </ClickBoxHeader>
            <AddressWrapper>
              <AddressIcon />
              <AddressText>{box.Address}</AddressText>
            </AddressWrapper>
            <DateWrapper>
              <DateIcon />
              <DateText>{box.PickupDate}</DateText>
            </DateWrapper>
            <NoteWrapper>
              <NoteIcon />
              <NoteText>-</NoteText>
            </NoteWrapper>
            {box.clientInfo?.map(({ id, name, img, shopName, PhoneNo }) => (
              <SecondImageTextWrapper key={id}>
                <SecondImage src={img} alt="Image" width={40} height={40} />
                <CustomerInfoWrapper>
                  <CustomerName>{name}</CustomerName>
                  <CustomerShopName>{shopName}</CustomerShopName>
                  <CustomerPhno>{PhoneNo}</CustomerPhno>
                </CustomerInfoWrapper>
              </SecondImageTextWrapper>
            ))}

            <BikeIconWrapper>
              {/* {box.courierInfo !== null ? (  //Need to fix
                <CourierImageTextWrapper>
                  <SecondImage
                    src={box.courierInfo.img}
                    alt="Image"
                    width={40}
                    height={40}
                  />
                  <CourierNameWrapper>
                    <CourierNameText>{box.courierInfo.name}</CourierNameText>
                    <CourierStatusText>
                      {box.courierInfo.status}
                    </CourierStatusText>
                  </CourierNameWrapper>
                </CourierImageTextWrapper>
              ) : (
                <div></div>
              )} */}
              <BikeIconContainer>
                <BikeIcon />
              </BikeIconContainer>
            </BikeIconWrapper>
            <SpecialText>Special Note for Courier</SpecialText>
            <SpecialTextArea />

            <ButtonWrapper>
              <AssignButton>Assign</AssignButton>
              <CancelButton>Cancel</CancelButton>
            </ButtonWrapper>
          </>
        ) : null}
      </FirstHeaderWrapper>

      {barClick ? (
        <SecondHeaderWrapper>
          <SecondHeaderContainer>
            <Title>Courier</Title>
            <SecondSearchWrapper>
              <SecondSearchBar type="text" placeholder="Pickup No" />
              <Search />
            </SecondSearchWrapper>
          </SecondHeaderContainer>

          {courierData.map(
            ({ id, img, name, status, completeJob, assignJob }) => (
              <SecondBoxWrapper
                key={id}
                onClick={() =>
                  box ? setCourierInfo({ img, name, status }) : null
                }
              >
                {/* // <SecondBoxWrapper
            //   key={id}
            //   onClick={() =>
            //     box ? box.courierInfo({ img, name, status }) : null
            //   }
            // > */}
                <ImageTextWrapper>
                  <SecondImage src={img} alt="Image" width={40} height={40} />
                  <NameWrapper>
                    <NameText>{name}</NameText>
                  </NameWrapper>
                </ImageTextWrapper>
                <MiniBoxWrapper>
                  <BoxOne>{completeJob}</BoxOne>
                  <BoxTwo>{assignJob}</BoxTwo>
                </MiniBoxWrapper>
              </SecondBoxWrapper>
            )
          )}
        </SecondHeaderWrapper>
      ) : null}

      <ThirdHeaderWrapper>
        <Title>Map</Title>
        <MapWrapper>
          <MapGL
            {...viewport}
            width="100vh"
            height="80vh"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={setViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
          />
        </MapWrapper>
      </ThirdHeaderWrapper>
    </Wrapper>
  );
};

export default pickup;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const FirstHeaderWrapper = styled.div`
  width: ${({ click }) => (click ? "28%" : "40%")};
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
  margin-bottom: 15px;
`;

const UnderBar = styled.div`
  width: 80%;
  height: 2px;
  background-color: red;
  margin-top: 2px;
`;
const UnassignedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  cursor: pointer;
  align-items: center;
`;

const UnassignedText = styled.div`
  font-size: 12px;
  font-family: "Poppins-Regular";
`;
const AssignedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  cursor: pointer;
  align-items: center;
`;

const AssignedText = styled.div`
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
  width: 20%;
  height: 50rem;
  align-items: center;
  background-color: white;
  box-shadow: 10px 0 3px -10px #888;
  flex-direction: column;
  padding-left: 10px;
  margin-left: 10px;
`;

const SecondHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SecondSearchBar = styled(SearchBar)`
  width: 80%;
`;

const SecondSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  margin-top: 10px;
`;

const SecondBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 30px 0 0;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 2px 3px 2px #888888;
    border-radius: 5px;
  }
`;

const ImageTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 5px 8px 5px;
`;

const SecondImage = styled(Image)`
  border-radius: 50%;
`;

const NameWrapper = styled.div`
  margin-left: 15px;
`;

const NameText = styled.p`
  font-family: "Poppins-Regular";
  font-size: 12px;
  color: #6a8a9c;
`;

const MiniBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
`;

const BoxOne = styled.p`
  padding: 1px 10px;
  margin-right: 2.5px;
  border-radius: 4px;
  background-color: #fbf473;
`;

const BoxTwo = styled.p`
  padding: 1px 10px;
  margin-left: 2.5px;
  border-radius: 4px;
  background-color: #82a8bf;
`;

const ThirdHeaderWrapper = styled.div`
  align-items: flex-start;
  background-color: white;
  flex-direction: column;
  padding-left: 10px;
  margin-left: 10px;
`;

const MapWrapper = styled.div`
  margin-top: 30px;
`;

const ClickBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const EditIcon = styled(EditOutlinedIcon)`
  background-color: #1e933d;
  border-radius: 50%;
  color: white;
  padding: 3px;
  margin-right: 10px;
  cursor: pointer;
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

const SecondImageTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 5px 8px 0;
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

const BikeIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BikeIconContainer = styled.div`
  padding: 20px;
  border-radius: 5px;
  border: 2px solid #c08893;
  margin: 5px 18px;
`;

const BikeIcon = styled(TwoWheelerIcon)`
  color: black;
`;

const SpecialText = styled.div`
  font-family: "Poppins-Regular";
  font-size: 12px;
`;

const SpecialTextArea = styled.textarea`
  width: 95%;
  height: 15%;
  border-radius: 5px;
  padding: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 5px;
`;

const AssignButton = styled.button`
  padding: 5px 50px;
  color: white;
  font-family: "Poppins-Regular";
  font-size: 16px;
  background-color: #b4cbd9;
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
  margin-right: 20px;
`;

const CancelButton = styled.button`
  padding: 5px 50px;
  color: white;
  font-family: "Poppins-Regular";
  font-size: 16px;
  background-color: #ee1c25;
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
`;

const CourierImageTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 5px 8px 0;
`;

const CourierNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const CourierNameText = styled.div`
  font-family: "Poppins-Bold";
  font-size: 12px;
`;

const CourierStatusText = styled.div`
  font-family: "Poppins-Regular";
  font-size: 12px;
`;

const StatusWrapper = styled.div`
  margin-right: 10px;
`;

const StatusText = styled.p`
  font-family: "Poppins-Regular";
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.1);
  color: yellow;
  border-radius: 3px;
  padding: 2px 15px;
`;
