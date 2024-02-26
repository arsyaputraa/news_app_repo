// import axios from "axios";
// import React, { useState } from "react";

// // pisah axios config agar tidak perlu menulis berulang kali setiap buat fungsi request
// const MyAxiosConfiguration = axios.create({
//   baseURL: process.env.REACT_APP_SERVER_URL,
//   //   sertakan auth token jika api yang dituju protected
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "BEARER auth_token",
//   },
// });

// const TestPage = () => {
//   // fungsi API call dan state biasanya saya pisahkan menggunakan custom hooks untuk menjaga code readability dan memisahkan bussiness logic dan UI
//   const [birthDate, setBirthDate] = useState("");

//   const functionToreceiveDataWhenitSuccess = (data)=>{
//     // tampilkan data list dengan cara mengubah state tampilan
//     setDataList(data.dataList);
//     // tampilkan toast untuk notifikasi pada user
//     toast(data.Message, status:data.status);
//   }

//   const apiCall = async (birthDate) => {
//     try {
//       const response = await MyAxiosConfiguration.post(
//         "/person/getDataByBirthDate",
//         {
//           // secara default dari javascript sudah memiliki format YYYY-MM-DD
//           birthDate: birthDate,
//         }
//       );
//       if (response.status === 200) {
//         // ubah state aplikasi dengan menampilkan list yang diterima
//         functionToreceiveDataWhenitSuccess(response.data);
//       }
//     } catch (error) {
//       // handle error bisa dapat dengan cara meredirect ke error page atau menampilkan modal dan sebagainya
//       console.error("Error:", error);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     apiCall(new Date(birthDate));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Birth Date:
//         <input
//           type="date"
//           value={birthDate}
//           onChange={(e) => setBirthDate(e.target.value)}
//         />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default TestPage;
