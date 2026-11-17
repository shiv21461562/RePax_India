// import Navbar from "@/components/layout/Navbar";
// import HomePage from "./home/page";


// export default function Page() {
//   return (
//     <>
//       <Navbar />
//       <HomePage />
    
//     </>
//   );
// }



import Navbar from "@/components/layout/Navbar";
import HomePage from "./home/page";
import EventPopup from "@/components/event-popup/EventPopup";

export default function Page() {
  return (
    <>
      <Navbar />
      <EventPopup />
      <HomePage />
    </>
  );
}
