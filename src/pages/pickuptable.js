import React, { useState } from "react";
import Image from "next/image";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

import SearchIcon from "@material-ui/icons/Search";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import TwoWheelerIcon from "@material-ui/icons/TwoWheeler";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import styled from "styled-components";

import { rows } from "constants/Data";
const StyledTableCell = withStyles(
  (theme) => ({
    head: {
      backgroundColor: "white",
      color: "#255977",
      fontFamily: "Poppins-Bold",
      fontSize: 14,

      borderBottomStyle: "solid",
      borderBottomColor: "skyblue",
      borderBottomWidth: "1px",
    },
    body: {
      fontFamily: "Poppins-Regular",
      fontSize: 14,
      border: "none",
    },
  }),
  { name: "MuiExamle_ComponentiAppBar" }
)(TableCell);

const StyledTableRow = withStyles(
  (theme) => ({
    root: {
      //   "&:nth-of-type(odd)": {
      //     backgroundColor: theme.palette.action.hover,
      //   },
      // "&:hover": {
      //   backgroundColor: "green",
      // },
      cursor: "pointer",
    },
  }),
  { name: "MuiExamle_ComponentiAppBar" }
)(TableRow);

const useStyles = makeStyles(
  {
    root: {
      width: "98%",
    },
    table: {
      minWidth: 700,
    },
    tableRow: {
      "&.Mui-selected, &.Mui-selected:hover": {
        backgroundColor: "purple",
        "& > .MuiTableCell-root": {
          color: "yellow",
        },
      },
    },
  },
  { name: "MuiExamle_ComponentiAppBar" }
);

export default function CustomizedTables() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [click, setClick] = useState(false);
  const [selectedID, setSelectedID] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Wrapper>
      <FirstHeaderWrapper click={click}>
        <HeaderContainer>
          <Title>Pickup</Title>
          <SearchWrapper>
            <SearchBar type="text" placeholder="Search Pickup" />
            <Search />
          </SearchWrapper>
          <DropDownContainer>
            <option value="none">All Pickup</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </DropDownContainer>
        </HeaderContainer>
        <Paper className={classes.root}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Pickup ID</StyledTableCell>
                  <StyledTableCell align="left">
                    Request Date &amp; Time
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    City, Township
                  </StyledTableCell>
                  <StyledTableCell align="left">Sender</StyledTableCell>
                  <StyledTableCell align="center">Contact No.</StyledTableCell>
                  <StyledTableCell align="left">Delivery man</StyledTableCell>
                  <StyledTableCell align="left">State</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <StyledTableRow
                      hover
                      key={row.id}
                      selected={selectedID === row.id}
                      className={classes.tableRow}
                      onClick={() => {
                        setSelectedID(row.id);
                        setClick(true);
                      }}
                    >
                      <StyledTableCell component="th" scope="row">
                        {row.pickupId}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.reqDateTime}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.cityTownship}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.sender}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.contactNo}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.delivery}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.state}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
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
        </SecondHeaderWrapper>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const FirstHeaderWrapper = styled.div`
  width: ${({ click }) => (click ? "70%" : "100%")};
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
  width: 30%;
`;

const SearchBar = styled.input`
  padding: 5px 15px 5px 30px;
  border-radius: 3px;
  width: 90%;
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

const DropDownContainer = styled.select`
  padding: 5px 30px 5px 10px;
  border-radius: 3px;
  font-family: "Poppins-Regular";
  font-size: 12px;
  width: 250px;
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
