import { NextResponse } from 'next/server'

// role-based logic lands in slice 3

export function proxy() {
  return NextResponse.next()
}

export const config = {
  matcher: [

  ],
}