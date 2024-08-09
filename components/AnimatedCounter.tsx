'use client';

import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = (props: {amount: number} ) => {
  return (
    <div>
        <CountUp 
            duration={2.75}
            decimals={2}
            decimal='.'
            prefix='$'
            end={props.amount}
        />
    </div>
  )
}

export default AnimatedCounter