import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-blue-900 sm:text-7xl">
        <span className="relative whitespace-nowrap text-blue-100">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-500"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">Neverending{' '}</span>
        </span><br/>
        Machine Learning
      </h1>
      <span className='text-blue-200'>NML 2024 is co-located with ICDM 2024, Abu Dhabi, UAE, December 9-12, 2024</span>
      {/* <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        The workshop on Classifier Learning from Difficult Data is organized during the <a href="https://www.ecai2024.eu/">27TH EUROPEAN CONFERENCE ON ARTIFICIAL INTELLIGENCE</a> in Santiago de Compostella.
      </p> */}

      {/* <p className="mt-4 text-lg tracking-tight text-slate text-wrap">
            The pre-conference program, including the CLD2 workshop, will take place in two adjacent buildings on the <strong>North Campus of the University of Santiago de Compostela on October 19-20, 2024</strong>. 
            
      </p> */}
      {/* <p className="mt-4 text-lg tracking-tight text-slate text-wrap">
        CLD2, as a half-day event, will consist of two 90-minute sessions, lasting from 9:00 to 10:30 am and from 11:00 to 12:30 pm separated by a 30-minute coffee break. 
          </p> */}
      
    </Container>
  )
}
