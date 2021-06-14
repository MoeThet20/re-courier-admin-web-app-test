import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import SearchIcon from "@material-ui/icons/Search";
import { pickedData, createdData } from "constants/Data";

const waybill = () => {
  const [click, setClick] = useState(false);
  const [barClick, setBarClick] = useState(true);
  const [checked, setChecked] = useState(false);
  const [checked_2, setChecked_2] = useState(false);
  const [box, setBox] = useState(null);
  const [box_2, setBox_2] = useState(null);

  return (
    <Wrapper>
      <FirstHeaderWrapper>
        <HeaderContainer>
          <Title>Waybill</Title>
          <SearchWrapper>
            <SearchBar type="text" placeholder="Waybill No" />
            <Search />
          </SearchWrapper>
          <DropDownWrapper>
            <DropDownContainer>
              <option value="none">All Customer</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </DropDownContainer>
          </DropDownWrapper>
        </HeaderContainer>
        <FirstMiddleWrapper>
          <PickupWrapper onClick={() => setBarClick(true)}>
            <PickupText>Picked</PickupText>
            {barClick ? <UnderBar /> : null}
          </PickupWrapper>
          <CreatedWrapper onClick={() => setBarClick(false)}>
            <CreatedText>Created</CreatedText>
            {!barClick ? <UnderBar /> : null}
          </CreatedWrapper>
        </FirstMiddleWrapper>

        {barClick
          ? pickedData.map((data) => (
              <BoxWrapper
                onClick={() => {
                  setBox(data);
                  setClick(!click);
                }}
                key={data.id}
              >
                <BoxLocationWrapper>
                  <ImageWrapper>
                    <Image src="/box.png" alt="Box" width={35} height={35} />
                  </ImageWrapper>
                  <IdLocationWrapper>
                    <IdText>{data.pickedID}</IdText>
                    <LocationText>{data.address}</LocationText>
                  </IdLocationWrapper>
                </BoxLocationWrapper>
                <TimeWrapper>
                  <TimeText>{data.pickedDate}</TimeText>
                </TimeWrapper>
              </BoxWrapper>
            ))
          : createdData.map((data) => (
              <BoxWrapper
                onClick={() => {
                  setBox_2(data);
                  setChecked_2(!checked_2);
                  setClick(!click);
                }}
                key={data.id}
              >
                <BoxLocationWrapper>
                  <CreatedCheckboxWrapper>
                    <StyledCheckbox checked={checked_2}>
                      {checked_2 ? (
                        <Icon viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12 " />
                        </Icon>
                      ) : null}
                    </StyledCheckbox>
                  </CreatedCheckboxWrapper>

                  <IdLocationWrapper>
                    <IdText>{data.pickedID}</IdText>
                    <LocationText>{data.address}</LocationText>
                  </IdLocationWrapper>
                </BoxLocationWrapper>
                <TimeWrapper>
                  <TimeText>
                    {data.createdDate}, {data.createdStatus}
                  </TimeText>
                </TimeWrapper>
              </BoxWrapper>
            ))}
      </FirstHeaderWrapper>
      {box && barClick ? (
        <SecondHeaderWrapper>
          <SecondHeaderContainer>
            <SecondTitle>{box.pickedID}</SecondTitle>
            <DayText>Same Day</DayText>
          </SecondHeaderContainer>
          <SecondSectionWrapper>
            <LeftSectionWrapper>
              <ImageTextWrapper>
                <ImageHolder
                  src={box.customerInfo.img}
                  alt="Image"
                  width={50}
                  height={50}
                />
                <CustomerInfoWrapper>
                  <CustomerName>{box.customerInfo.name}</CustomerName>
                  <CustomerShopName>
                    {box.customerInfo.shopName}
                  </CustomerShopName>
                  <CustomerPhno>{box.customerInfo.phoneNo}</CustomerPhno>
                </CustomerInfoWrapper>
              </ImageTextWrapper>
              <InputSectionWrapper>
                <InputLabel>Mobile</InputLabel>
                <InputSection />
              </InputSectionWrapper>
              <InputSectionWrapper>
                <InputLabel>Name</InputLabel>
                <SecondInputSection />
              </InputSectionWrapper>
              <InputSectionWrapper>
                <InputLabel>City</InputLabel>
                <SecondInputSection />
              </InputSectionWrapper>
              <InputSectionWrapper>
                <InputLabel>Township</InputLabel>
                <SecondInputSection />
              </InputSectionWrapper>
              <InputSectionWrapper>
                <InputLabel>Address</InputLabel>
                <TextareaInputSection />
              </InputSectionWrapper>
            </LeftSectionWrapper>
            <RightSectionWrapper>
              <CourierImageTextWrapper>
                <ImageHolder
                  src={box.deliveryInfo.img}
                  alt="Image"
                  width={50}
                  height={50}
                />
                <CourierInfoWrapper>
                  <CourierName>{box.deliveryInfo.name}</CourierName>
                  <CourierDate>18 May 2021, 2:14 pm</CourierDate>
                </CourierInfoWrapper>
              </CourierImageTextWrapper>
              <SecondDropDownWrapper>
                <InputLabel>To City</InputLabel>
                <SecondDropDownContainer>
                  <option value="yangon">Yangon</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </SecondDropDownContainer>
              </SecondDropDownWrapper>

              <SecondDropDownWrapper>
                <InputLabel>Service Type</InputLabel>
                <SecondDropDownContainer>
                  <option value="same">Same Day</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </SecondDropDownContainer>
              </SecondDropDownWrapper>
              <WeightWrapper>
                <WeightInputWrapper>
                  <InputLabel>Weight (Kg)</InputLabel>
                  <WeightInputSection value={box.deliveryInfo.weight} />
                </WeightInputWrapper>
                <InDeButtonWrapper>
                  <Button>+</Button>
                  <Button>-</Button>
                </InDeButtonWrapper>
              </WeightWrapper>
              <PaymentWrapper>
                <SecondDropDownWrapper>
                  <InputLabel>Payment By</InputLabel>
                  <PaymentDropDownContainer>
                    <option value="receiver">Receiver</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </PaymentDropDownContainer>
                </SecondDropDownWrapper>

                <SecondDropDownWrapper>
                  <InputLabel>Payment Type</InputLabel>
                  <PaymentDropDownContainer>
                    <option value="postpaid">Postpaid</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </PaymentDropDownContainer>
                </SecondDropDownWrapper>
              </PaymentWrapper>

              <CODWrapper onClick={() => setChecked(!checked)}>
                <StyledCheckbox checked={checked}>
                  {checked ? (
                    <Icon viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12 " />
                    </Icon>
                  ) : null}
                </StyledCheckbox>
                <CheckboxTitle>COD</CheckboxTitle>
              </CODWrapper>
              <PackageWrapper>
                <InputLabel>Package Photo</InputLabel>
                <Image
                  src="/profile_4.png"
                  alt="Image"
                  width={230}
                  height={130}
                />
              </PackageWrapper>
              <InputSectionWrapper>
                <InputLabel>Pieces [Optional]</InputLabel>
                <SecondInputSection />
              </InputSectionWrapper>

              <InputSectionWrapper>
                <InputLabel>Special Instruction [Optional]</InputLabel>
                <TextareaInputSection />
              </InputSectionWrapper>

              <ButtonWrapper>
                <ConfirmButton>Confirm</ConfirmButton>
                <CancelButton>Cancel</CancelButton>
              </ButtonWrapper>
            </RightSectionWrapper>
          </SecondSectionWrapper>
        </SecondHeaderWrapper>
      ) : null}
      {box_2 && !barClick ? (
        <SecondHeaderWrapper>
          <SecondHeaderContainer>
            <SecondTitle>{box_2.pickedID}</SecondTitle>
            <DayText>Same Day</DayText>
          </SecondHeaderContainer>
          <SecondSectionWrapper>
            <LeftSectionWrapper>
              <ImageTextWrapper>
                <ImageHolder
                  src={box_2.customerInfo.img}
                  alt="Image"
                  width={50}
                  height={50}
                />
                <CustomerInfoWrapper>
                  <CustomerName>{box_2.customerInfo.name}</CustomerName>
                  <CustomerShopName>
                    {box_2.customerInfo.shopName}
                  </CustomerShopName>
                  <CustomerPhno>{box_2.customerInfo.phoneNo}</CustomerPhno>
                </CustomerInfoWrapper>
              </ImageTextWrapper>
              <CreatedInputSectionWrapper>
                <InputLabel>Pickup Location</InputLabel>
                <TextareaInputSection
                  value={box_2.customerInfo.pickupLocation}
                  disabled
                />
              </CreatedInputSectionWrapper>
              <InputSectionWrapper>
                <InputLabel>Mobile</InputLabel>
                <InputSection value={box_2.customerInfo.mobileNo} disabled />
              </InputSectionWrapper>
              <InputSectionWrapper>
                <InputLabel>Name</InputLabel>
                <SecondInputSection
                  value={box_2.customerInfo.realName}
                  disabled
                />
              </InputSectionWrapper>
              <InputSectionWrapper>
                <InputLabel>City</InputLabel>
                <SecondInputSection value={box_2.customerInfo.city} disabled />
              </InputSectionWrapper>
              <InputSectionWrapper>
                <InputLabel>Township</InputLabel>
                <SecondInputSection
                  value={box_2.customerInfo.township}
                  disabled
                />
              </InputSectionWrapper>
              <InputSectionWrapper>
                <InputLabel>Address</InputLabel>
                <TextareaInputSection
                  value={box_2.customerInfo.address}
                  disabled
                />
              </InputSectionWrapper>
            </LeftSectionWrapper>
            <CreatedRightSectionWrapper>
              <SecondDropDownWrapper>
                <InputLabel>To City</InputLabel>
                <SecondDropDownContainer>
                  <option value="yangon">Yangon</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </SecondDropDownContainer>
              </SecondDropDownWrapper>

              <SecondDropDownWrapper>
                <InputLabel>Service Type</InputLabel>
                <SecondDropDownContainer>
                  <option value="same">Same Day</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </SecondDropDownContainer>
              </SecondDropDownWrapper>
              <WeightWrapper>
                <WeightInputWrapper>
                  <InputLabel>Weight (Kg)</InputLabel>
                  <WeightInputSection />
                </WeightInputWrapper>
                <InDeButtonWrapper>
                  <Button>+</Button>
                  <Button>-</Button>
                </InDeButtonWrapper>
              </WeightWrapper>
              <PaymentWrapper>
                <SecondDropDownWrapper>
                  <InputLabel>Payment By</InputLabel>
                  <PaymentDropDownContainer>
                    <option value="receiver">Receiver</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </PaymentDropDownContainer>
                </SecondDropDownWrapper>

                <SecondDropDownWrapper>
                  <InputLabel>Payment Type</InputLabel>
                  <PaymentDropDownContainer>
                    <option value="postpaid">Postpaid</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </PaymentDropDownContainer>
                </SecondDropDownWrapper>
              </PaymentWrapper>

              <CreatedCODWrapper onClick={() => setChecked(!checked)}>
                <StyledCheckbox checked={checked}>
                  {checked ? (
                    <Icon viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12 " />
                    </Icon>
                  ) : null}
                </StyledCheckbox>
                <CheckboxTitle>COD</CheckboxTitle>
              </CreatedCODWrapper>
              <InputSectionWrapper>
                <InputLabel>Pieces [Optional]</InputLabel>
                <SecondInputSection />
              </InputSectionWrapper>

              <InputSectionWrapper>
                <InputLabel>Special Instruction [Optional]</InputLabel>
                <TextareaInputSection />
              </InputSectionWrapper>

              <ButtonWrapper>
                <ConfirmButton>Confirm</ConfirmButton>
                <CancelButton>Cancel</CancelButton>
              </ButtonWrapper>
            </CreatedRightSectionWrapper>
          </SecondSectionWrapper>
        </SecondHeaderWrapper>
      ) : null}
    </Wrapper>
  );
};

export default waybill;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const FirstHeaderWrapper = styled.div`
  width: 40%;
  height: 60rem;
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
  margin-bottom: 30px;
`;

const UnderBar = styled.div`
  width: 80%;
  height: 2px;
  background-color: red;
  margin-top: 2px;
`;

const PickupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  cursor: pointer;
  align-items: center;
`;

const PickupText = styled.div`
  font-size: 12px;
  font-family: "Poppins-Regular";
`;
const CreatedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  cursor: pointer;
  align-items: center;
`;

const CreatedText = styled.div`
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
`;

const TimeText = styled.div`
  font-family: "Poppins-Bold";
  font-size: 12px;
  color: #6a8a9c;
`;

const DropDownWrapper = styled.div`
  margin-right: 20px;
`;

const DropDownContainer = styled.select`
  padding: 5px 30px 5px 5px;
  border-radius: 3px;
  font-family: "Poppins-Regular";
  font-size: 12px;
`;

const SecondHeaderWrapper = styled.div`
  align-items: flex-start;
  background-color: white;
  flex-direction: column;
  margin-left: 40px;
  width: 700px;
`;

const SecondHeaderContainer = styled.div`
  margin-top: 20px;
`;

const SecondTitle = styled.div`
  font-size: 1.3rem;
  font-family: "Poppins-Bold";
  color: #085588;
`;

const DayText = styled.div`
  font-family: "Poppins-Regular";
  font-size: 10px;
  color: #085588;
`;

const SecondSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RightSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  width: 100%;
`;

const ImageTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 5px 15px 0;
`;

const ImageHolder = styled(Image)`
  border-radius: 50%;
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

const InputSectionWrapper = styled.div`
  margin-top: 10px;
`;

const InputLabel = styled.div`
  font-family: "Poppins-Regular";
  font-size: 12px;
`;

const InputSection = styled.input`
  width: 100%;
  padding: 3px 15px;
  border-radius: 3px;
  font-size: 16px;
  border: 1.5px solid gray;
  font-family: "Poppins-Regular";
`;

const SecondInputSection = styled(InputSection)`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 5px 15px;
  border: none;
`;

const TextareaInputSection = styled.textarea`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.3);
  font-family: "Poppins-Regular";
  font-size: 14px;
`;

const CourierImageTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 5px 15px 0;
  margin-bottom: 5px;
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

const CourierDate = styled.div`
  font-family: "Poppins-Regular";
  font-size: 12px;
`;

const SecondDropDownContainer = styled.select`
  padding: 6.5px 30px 6.5px 2px;
  border-radius: 3px;
  font-family: "Poppins-Regular";
  font-size: 12px;
  width: 100%;
`;

const SecondDropDownWrapper = styled.div`
  margin-top: 10px;
`;

const WeightInputWrapper = styled.div`
  width: 135px;
  margin-top: 10px;
`;

const WeightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 1px;
  width: 100%;
`;

const WeightInputSection = styled.input`
  padding: 3px 10px;
  border-radius: 3px;
  font-size: 16px;
  border: 1.5px solid gray;
  font-family: "Poppins-Regular";
  width: 100%;
`;

const InDeButtonWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 40px;
  height: 35px;
  color: red;
  background-color: white;
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
  margin-left: 10px;
`;

const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PaymentDropDownContainer = styled.select`
  padding: 6.5px 85px 6.5px 2px;
  border-radius: 3px;
  font-family: "Poppins-Regular";
  font-size: 12px;
  width: 100%;
`;

export const CODWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 28px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid #000;
  /* background: ${(props) => (props.checked ? "salmon" : "white")}; */
  background-color: white;
  border-radius: 2px;
  transition: all 150ms;
`;

export const CheckboxTitle = styled.div`
  font-family: "Poppins-Regular";
  font-size: 14px;
  margin-left: 5px;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 3px;
  padding-bottom: 3px;
`;

export const PackageWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`;

const ConfirmButton = styled.button`
  padding: 6px 30px;
  color: white;
  font-family: "Poppins-Regular";
  font-size: 12px;
  background-color: #0a5687;
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
  width: 47%;
`;

const CancelButton = styled.button`
  padding: 6px 30px;
  color: white;
  font-family: "Poppins-Regular";
  font-size: 12px;
  background-color: #ee1c25;
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
  width: 47%;
`;

const CreatedCheckboxWrapper = styled.div`
  margin-right: 10px;
  align-self: center;
`;

const CreatedInputSectionWrapper = styled(InputSectionWrapper)`
  margin-bottom: 20px;
`;

const CreatedCODWrapper = styled(CODWrapper)`
  margin-bottom: 15px;
`;

const CreatedRightSectionWrapper = styled(RightSectionWrapper)`
  margin-top: 85px;
`;
