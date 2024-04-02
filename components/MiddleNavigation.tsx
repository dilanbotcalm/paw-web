import React from 'react'

import Link from "next/link";
import Image from "next/image";
import Send from "../assets/icons/send.png";
import Bridge from "../assets/icons/bridge.png";
import Portfolio from "../assets/icons/portfolio.png";
import Swap from "../assets/icons/swap.png";
import Activity from "../assets/icons/activity.png";

type Props = {}

const MiddleNavigation = (props: Props) => {
  return (
    <div className="flex items-center justify-center sm:gap-8 gap-6 flex-wrap ">
    <Link
      href="/send"
      className="text-white flex items-center justify-center flex-col group"
    >
      <Image src={Send} alt="" className="group-hover:opacity-70" />
      <span className="font-light sm:text-sm text-xs">Send</span>
    </Link>

    <Link
      href="/swap"
      className="text-white flex items-center justify-center flex-col group"
    >
      <Image src={Swap} alt="" className="group-hover:opacity-70" />
      <span className="font-light sm:text-sm text-xs">Swap</span>
    </Link>

    <Link
      href="/bridge"
      className="text-white flex items-center justify-center flex-col group"
    >
      <Image src={Bridge} alt="" className="group-hover:opacity-70" />
      <span className="font-light sm:text-sm text-xs">Bridge</span>
    </Link>

    <Link
      href="/"
      className="text-white flex items-center justify-center flex-col group"
    >
      <Image
        src={Portfolio}
        alt=""
        className="group-hover:opacity-70"
      />
      <span className="font-light sm:text-sm text-xs">Portfolio</span>
    </Link>

    <Link
      href="/activity"
      className="text-white flex items-center justify-center flex-col group"
    >
      <Image
        src={Activity}
        alt=""
        className="group-hover:opacity-70"
      />
      <span className="font-light sm:text-sm text-xs">Activity</span>
    </Link>
  </div>
  )
}

export default MiddleNavigation