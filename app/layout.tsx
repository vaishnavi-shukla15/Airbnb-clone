import { Nunito } from "next/font/google";

import "./globals.css";

import Navbar from "./component/navbar/Navbar";
import ClientOnly from "./component/ClientOnly";
import RegisterModal from "./component/modals/RegisterModal";
import LoginModal from "./component/modals/LoginModal";
import RentModal from "./component/modals/RentModal";
import SearchModal from "./component/modals/SearchModal";

import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";


export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal/>
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
           {children}
        </div>
      </body>
    </html>
  );
}
