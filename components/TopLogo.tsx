import React from 'react'
import PawBridgeLogo from "../assets/swapbeta.png";
import Link from "next/link";
import Image from "next/image";

type Props = {}

const TopLogo = (props: Props) => {
  return (
    <Link
        href="/"
        className="flex items-center justify-center my-4 mt-10 w-fit"
      >
        <Image src={PawBridgeLogo} alt="" className="w-[250px] " />
      </Link>
  )
}

export default TopLogo