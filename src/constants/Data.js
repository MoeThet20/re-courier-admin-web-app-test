export const courierData = [
  {
    id: "1",
    img: "/profile_2.png",
    name: "Jennie",
    status: "on duty",
    completeJob: 0,
    assignJob: 0,
  },
  {
    id: "2",
    img: "/profile_3.png",
    name: "Rose",
    status: "on duty",
    completeJob: 0,
    assignJob: 2,
  },
  {
    id: "3",
    img: "/profile_4.png",
    name: "MashMellow",
    status: "on duty",
    completeJob: 0,
    assignJob: 5,
  },
];

export const clientData = [
  {
    id: "1",
    PickupID: "PK000118052021",
    PickupTime: "17 May 2021, 2:21 PM",
    Address:
      " No.22, Building 32, Thu Nandar Street, Hlaing Myint Mo Estate, Hlaing, Yangon",
    PickupDate: "18 May 2021, 2:00 to 3:00 pm",
    clientInfo: [
      {
        id: "1",
        name: "Jennie",
        img: "/profile_2.png",
        shopName: "Pink Pink Online Shop",
        PhoneNo: "09797122458",
      },
    ],
    courierInfo: {},
  },
  {
    id: "2",
    PickupID: "PK000118052022",
    PickupTime: "17 May 2021, 2:40 PM",
    Address: " MaharSwe Street, Hlaing, Yangon",
    PickupDate: "18 May 2021, 3:00 to 4:00 pm",
    clientInfo: [
      {
        id: "1",
        name: "MashMellow",
        img: "/profile_4.png",
        shopName: "DJ Online Shop",
        PhoneNo: "09797122458",
      },
    ],
    courierInfo: {},
  },
];

export const clientData_2 = [
  {
    id: "3",
    PickupID: "PK000118052025",
    PickupTime: "17 May 2021, 2:05 PM",
    Address: " MaharSwe Street, Hlaing, Yangon",
    PickupDate: "19 May 2021, 10:00 to 11:00 am",
    clientInfo: [
      {
        id: "1",
        name: "Rose",
        img: "/profile_3.png",
        shopName: "Rose Online Shop",
        PhoneNo: "09797122458",
      },
    ],
    courierInfo: {
      img: "/profile_4.png",
      name: "MashMellow",
      status: "on duty",
    },
  },
  {
    id: "4",
    PickupID: "PK000118052024",
    PickupTime: "17 May 2021, 2:05 PM",
    Address: " MaharSwe Street, Hlaing, Yangon",
    PickupDate: "19 May 2021, 10:00 to 11:00 am",
    clientInfo: [
      {
        id: "1",
        name: "Jennie",
        img: "/profile_2.png",
        shopName: "Jennie Online Shop",
        PhoneNo: "09797122458",
      },
    ],
    courierInfo: {
      img: "/profile_3.png",
      name: "Rose",
      status: "on duty",
    },
  },
];

export const pickedData = [
  {
    id: "1",
    pickedID: "YGN0012550521YGN",
    address: "Hlaing, Yangon",
    pickedDate: "18 May 2021, 2:00 to 3:00 pm",
    customerInfo: {
      name: "Rose Kay Khine",
      img: "/profile_3.png",
      shopName: "Pink Pink Online Shop",
      phoneNo: "09797122458",
    },
    deliveryInfo: {
      name: "Soe Moe",
      img: "/profile_4.png",
      toCity: "Yangon",
      serviceType: "Same Day",
      weight: 0.5,
      paymentBy: "Receiver",
      paymentType: "Postpaid",
    },
  },
  {
    id: "2",
    pickedID: "YGN0012550526YGN",
    address: "Hlaing, Yangon",
    pickedDate: "18 May 2021, 2:00 to 3:00 pm",
    customerInfo: {
      name: "Jennie Kay Khine",
      img: "/profile_2.png",
      shopName: "Pink Pink Online Shop",
      phoneNo: "09797122457",
    },
    deliveryInfo: {
      name: "Moe Moe",
      img: "/profile_3.png",
      toCity: "Yangon",
      serviceType: "Same Day",
      weight: 0.5,
      paymentBy: "Receiver",
      paymentType: "Postpaid",
    },
  },
];

export const createdData = [
  {
    id: "1",
    pickedID: "YGN4714510512YGN",
    address: "Hlaing, Yangon",
    createdDate: "18 May 2021",
    createdStatus: "drop off",
    customerInfo: {
      name: "Kyawt Kay Khine",
      img: "/profile_3.png",
      shopName: "Pink Pink Online Shop",
      phoneNo: "09797122458",
      pickupLocation:
        "No.22 Building 32, Thu Nandar Street, Hlaing Myint Mo Estate, Hlaing Yangon",
      mobileNo: "09797122499",
      realName: "The` Nu San",
      city: "Yangon",
      township: "Hlaing",
      address: "Room 44/A, 3rd Floor, Building 4, MICT Park, Hlaing, Yangon",
    },
  },
  {
    id: "2",
    pickedID: "YGN4714510515YGN",
    address: "Hlaing, Yangon",
    createdDate: "18 May 2021",
    createdStatus: "drop off",
    customerInfo: {
      name: "MeshMellow Kay Khine",
      img: "/profile_4.png",
      shopName: "Mesh Mesh Online Shop",
      phoneNo: "09797122458",
      pickupLocation:
        "No.22 Building 32, Thu Nandar Street, Hlaing Myint Mo Estate, Hlaing Yangon",
      mobileNo: "09797122499",
      realName: "The` Nu San",
      city: "Yangon",
      township: "Hlaing",
      address: "Room 44/A, 3rd Floor, Building 4, MICT Park, Hlaing, Yangon",
    },
  },
];
