import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import SearchIcon from "@material-ui/icons/Search";

const waybill = () => {
  const [click, setClick] = useState(false);
  const [barClick, setBarClick] = useState(true);

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
        <BoxWrapper onClick={() => setClick(true)}>
          <BoxLocationWrapper>
            <ImageWrapper>
              <Image src="/box.png" alt="Box" width={35} height={35} />
            </ImageWrapper>
            <IdLocationWrapper>
              <IdText>YGN0012550521YGN</IdText>
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
              <Image src="/box.png" alt="Box" width={35} height={35} />
            </ImageWrapper>
            <IdLocationWrapper>
              <IdText>YGN0012550522YGN</IdText>
              <LocationText>Hlaing, Yangon</LocationText>
            </IdLocationWrapper>
          </BoxLocationWrapper>
          <TimeWrapper>
            <TimeText>18 May 2021, 2:00 to 3:00 pm</TimeText>
          </TimeWrapper>
        </BoxWrapper>
      </FirstHeaderWrapper>

      <SecondHeaderWrapper>
        <SecondHeaderContainer>
          <SecondTitle>YGN0012550521YGN</SecondTitle>
          <DayText>Same Day</DayText>
        </SecondHeaderContainer>
        <SecondSectionWrapper>
          <LeftSectionWrapper>
            <ImageTextWrapper>
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
                src="/profile_4.png"
                alt="Image"
                width={50}
                height={50}
              />
              <CourierInfoWrapper>
                <CourierName>Soe Moe</CourierName>
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
                <WeightInputSection />
              </WeightInputWrapper>
              <Button>+</Button>
              <Button>-</Button>
            </WeightWrapper>
          </RightSectionWrapper>
        </SecondSectionWrapper>
      </SecondHeaderWrapper>
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
  padding-left: 30px;
  margin-left: 10px;
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
  margin-right: 10px;
`;

const RightSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
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
  width: 99%;
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
  width: 235px;
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
  margin-top: 1px;
`;

const WeightInputSection = styled.input`
  padding: 3px 10px;
  border-radius: 3px;
  font-size: 16px;
  border: 1.5px solid gray;
  font-family: "Poppins-Regular";
  width: 100%;
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