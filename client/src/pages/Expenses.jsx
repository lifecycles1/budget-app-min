import { useEffect, useState } from "react";
import Modal1 from "../components/Modal1";
import NavigationBar from "../components/NavigationBar";
import ExpensesList from "../components/ExpensesList";
import LandingFooter from "../components/LandingFooter";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) window.location.href = "/signin";
  }, []);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <NavigationBar />
      <ExpensesList />
      {isOpen && <Modal1 closeModal={closeModal} />}
      <LandingFooter />
    </>
  );
};

export default Home;
