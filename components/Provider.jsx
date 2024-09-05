"use client";
import { SessionProvider } from "next-auth/react";

const Provider = ({ session, childern }) => {
  return <SessionProvider session={session}>{childern}</SessionProvider>;
};

export default Provider;
